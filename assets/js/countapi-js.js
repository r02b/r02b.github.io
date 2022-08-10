/*
 * countapi-js - v1.0.2
 * https://github.com/mlomb/countapi-js
 * License: MIT
 */

const BASE_API_PATH = "https://api.countapi.xyz";
const validPattern = /^[A-Za-z0-9_\-.]{3,64}$/;
const validRegex = new RegExp(validPattern);

const validatePath = function(namespace, key) {
    if(typeof key === "undefined") {
        if(typeof namespace === "undefined") {
            return Promise.reject("Missing key");
        }
        key = namespace;
        namespace = undefined;
    }

    function validName(name) {
        return validRegex.test(name) || name === ':HOST:' || name === ':PATHNAME:';
    }

    return new Promise(function(resolve, reject) {
        if(!validName(key)) {
            reject(`Key must match ${validPattern}. Got '${namespace}'`);
            return;
        }
        if(!validName(namespace) && typeof namespace !== "undefined" && namespace !== null) {
            reject(`Namespace must match ${validPattern} or be empty. Got '${namespace}'`);
            return;
        }

        var path = '';
        if(typeof namespace !== "undefined")
            path += namespace + '/';
        path += key;

        resolve({
            path: path
        });
    });
}

function validateTuple(namespace, key, value) {
    if(typeof value === "undefined") {
        if(typeof key === "undefined") {
            return Promise.reject("Missing key or value");
        }
        value = key;
        key = undefined;
    }
    if(typeof value !== "number") {
        return Promise.reject("Value is NaN");
    }

    return validatePath(namespace, key).then(function(result) {
        return Object.assign({}, { value: value }, result);
    });
}

function finalize(res) {
    console.log(res)
    const valid_responses = [200, 400, 403, 404];
    if (valid_responses.includes(res.status)) {
        return res.json().then(function(json) {
            if(res.status == 400)
                return Promise.reject(json.error);
            return Object.assign({}, {
                status: res.status,
                path: res.headers.get('X-Path')
            }, json);
        });
    }
    return Promise.reject("Response from server: " + res.status);
}

function queryParams(params) {
    return Object.keys(params || {})
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function get(namespace, key) {
    return validatePath(namespace, key).then(function(result) {
        return fetch(`${BASE_API_PATH}/get/${result.path}`).then(finalize);
    });
};

function set(namespace, key, value) {
    return validateTuple(namespace, key, value).then(function(result) {
        return fetch(`${BASE_API_PATH}/set/${result.path}?value=${result.value}`).then(finalize);
    });
};

function update(namespace, key, amount) {
    return validateTuple(namespace, key, amount).then(function(result) {
        return fetch(`${BASE_API_PATH}/update/${result.path}?amount=${result.value}`).then(finalize);
    });
};

function hit(namespace, key) {
    return validatePath(namespace, key).then(function(result) {
        return fetch(`${BASE_API_PATH}/hit/${result.path}`).then(finalize);
    });
};

function info(namespace, key) {
    return validatePath(namespace, key).then(function(result) {
        return fetch(`${BASE_API_PATH}/info/${result.path}`).then(finalize);
    });
};

function create(options) {
    var params = queryParams(options);
    return fetch(`${BASE_API_PATH}/create${params.length > 0 ? '?' + params : ''}`).then(finalize);
};

function stats() {
    return fetch(`${BASE_API_PATH}/stats`).then(finalize);
};

function event(name) {
    return this.hit(':HOST:', name);
};

function visits(page) {
    return this.hit(':HOST:', page ? page : ':PATHNAME:');
};

function info_mine(page) {
//    var stuff = 0;
    return validatePath('r02b.github.io', page).then(function(result) {
        return fetch(`${BASE_API_PATH}/info/${result.path}`).then(finalize);
    });
//    try {
////        stuff = fetch(`${BASE_API_PATH}/info/r02b.github.io/`+page).then(finalize);
//        stuff = fetch(`${BASE_API_PATH}/info/r02b.github.io/`+page).then(finalize);
//    } catch (error) {
//        console.log(page + 'is not tracked');
//    }
//    return stuff;
};

export default { validatePath, validateTuple, get, set, update, hit, info, info_mine, create, stats, event, visits};