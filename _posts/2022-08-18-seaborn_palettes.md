---
layout: post
title:  "Seaborn Color Palettes and How to Use Them"
categories: [ data science, visualization ]
tags: [ seaborn ]
image: "assets/images/crayon-2162075.jpg"
description: "Using Seaborn color palettes - a comprehensive list, usage examples and customization, plus a note regarding colorblind friendly palettes." 
featured: true
comments: false
beforetoc: "I love how easy it is to make a visually pleasing plot with `seaborn` color palettes. I've compiled a list of available palettes based on data types, and added a few tips on how to use them."
toc: true
last_modified_at: 2022-11-08
---


## Some Color Palettes Basics

A `seaborn` color palette is given either as a `List` of colors, or a `matplotlib.colors.Colormap` object.
In this post, I will focus on the first type. 
As the default, the palette provided by `seaborn` is a list is of RBG tuples.

```python
import seaborn as sns

palette = sns.color_palette() # Default color palette
print(palette)  # Prints the RGB tuples that make up this color palette
sns.palplot(palette) # Plotting your palette!
sns.palplot(sns.color_palette('husl', 10)) # Seaborn color palette, with 10 colors
sns.color_palette("rocket", as_cmap=True) # Get a CMap
```

There are some really great posts out there full of useful information, including Seaborn's own <a href="https://seaborn.pydata.org/tutorial/color_palettes.html" target="_blank">tutorial</a>, but I couldn't find a clear list of all the pre-made options, sectioned into types. 
I tried to list all of them (updated for `seaborn 0.11.2`), and though I'm sure I've missing some, it is more comprehensive than what I was able to find online. 
The palette chosen should fit the data, and so, the palettes are given by types. I use the three palette classes `seaborn` uses in their documentation - qualitative, sequential and diverging, as well as `matplotlib`'s miscellaneous.

## Named `seaborn` Palettes by Category

### Qualitative color palettes
Best for categorical data, as they vary mostly in the hue component (the most noticeable exceptions here are `tab20b` and `tab20c`). 
This pattern of variations creates different colors with very similar luminosity and saturation, so the palette looks cohesive, and there is no "special" color that stands out compared to the others.

#### `matplotlib` palettes, and Seaborn variations
The `matlab` default palette we all know and love is called `tab10`, and is also the default palette for most `seaborn` functions. 
The `seaborn` variations are: `deep`, `muted`, `pastel`, `bright`, `dark`, and `colorblind`, while the `matplotlib` palettes are `tab20`, `tab20b` and `tab20c`.

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">tab10 / default</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="tab10" src="{{ site.baseurl }}/assets/images/color_palettes/tab10.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">deep</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="deep" src="{{ site.baseurl }}/assets/images/color_palettes/deep.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">muted</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="muted" src="{{ site.baseurl }}/assets/images/color_palettes/muted.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">pastel</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="pastel" src="{{ site.baseurl }}/assets/images/color_palettes/pastel.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">bright</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="bright" src="{{ site.baseurl }}/assets/images/color_palettes/bright.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">dark</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="dark" src="{{ site.baseurl }}/assets/images/color_palettes/dark.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">colorblind</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="colorblind" src="{{ site.baseurl }}/assets/images/color_palettes/colorblind.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">tab20</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="tab20" src="{{ site.baseurl }}/assets/images/color_palettes/tab20.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">tab20b</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="tab20b" src="{{ site.baseurl }}/assets/images/color_palettes/tab20b.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">tab20c</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="tab20c" src="{{ site.baseurl }}/assets/images/color_palettes/tab20c.png" /> 
    </div>
</div>
<div id="cb_vs_mpl"></div>
<br>
What about the rest of the `matlab` palettes?
There are several Color Brewer and `matplotlib` palettes that share the same name such as `Set2` and `Accent`. 
There is an option to use the original `matplotlib` functionality by using the `mpl_palette` function instead of `color_palette`. 
The colors for both are the same, but they handle the palette length differently. 
For lengths longer than the original list, the **Color Brewer** option will **repeat colors** to return the size requested. 
The `matplotlib` function will return the original list, without any repetitions.


#### Circular palettes
As the name would suggest, this type of palettes is made out of evenly spaced colors that create a full spectrom, by changing the hue while keeping the brightness and saturation constant.
This means larger palettes can be generated, and therefor it is good to use in the case of an arbitrary (possibly large) number of categories.
These palettes are: `hls` and `husl`.

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">hls</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="hls" src="{{ site.baseurl }}/assets/images/color_palettes/hls.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">husl</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="husl" src="{{ site.baseurl }}/assets/images/color_palettes/husl.png" /> 
    </div>
</div>
<br>

#### Qualitative Color Brower palettes
As [mentioned previously]({{ post.url }}#cb_vs_mpl), the default behavior for these palettes is a bit different - unless length is specified, the full list will be returned, which is of varying sizes. This is why I usually use the `n` argument, just to be on the safe side.
The palettes in this category are: `Set1`, `Set2`, `Set3`, `Paired`, `Accent`, `Pastel1`, `Pastel2` and `Dark2`. 
For all of these, there are reversed (add `_r` to the original name) and dark (`_d`) variations as well.
**Note where the colors repeat due to the palette containing less than ten colors**. If you need many distinct colors - go with a circular palette instead.
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Set1</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Set1" src="{{ site.baseurl }}/assets/images/color_palettes/Set1.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Set2</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Set2" src="{{ site.baseurl }}/assets/images/color_palettes/Set2.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Set3</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Set3" src="{{ site.baseurl }}/assets/images/color_palettes/Set3.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Paired</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Paired" src="{{ site.baseurl }}/assets/images/color_palettes/Paired.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Accent</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Accent" src="{{ site.baseurl }}/assets/images/color_palettes/Accent.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Pastel1</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Pastel1" src="{{ site.baseurl }}/assets/images/color_palettes/Pastel1.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Pastel2</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Pastel2" src="{{ site.baseurl }}/assets/images/color_palettes/Pastel2.png" /> 
    </div>
</div>

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Dark2</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Dark2" src="{{ site.baseurl }}/assets/images/color_palettes/Dark2.png" /> 
    </div>
</div>
<br>



### Sequential color palettes
Large palettes, best for big data ranges. Note that all of the palettes in this category can also be given as a `cmap` (using the `as_cmap=True` argument).

#### Perceptually uniform palettes
This category includes the original Seaborn palettes `rocket`, `mako`, `flare`, and `crest`, as well as the `matplotlib` palettes `viridis`, `plasma`, `inferno`, `magma` and `cividis`. 
All of these palettes also have a reveresed (`_r`) version.

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">rocket</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="rocket" src="{{ site.baseurl }}/assets/images/color_palettes/rocket.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">mako</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="mako" src="{{ site.baseurl }}/assets/images/color_palettes/mako.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">flare</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="flare" src="{{ site.baseurl }}/assets/images/color_palettes/flare.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">crest</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="crest" src="{{ site.baseurl }}/assets/images/color_palettes/crest.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">viridis</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="viridis" src="{{ site.baseurl }}/assets/images/color_palettes/viridis.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">plasma</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="plasma" src="{{ site.baseurl }}/assets/images/color_palettes/plasma.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">inferno</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="inferno" src="{{ site.baseurl }}/assets/images/color_palettes/inferno.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">magma</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="magma" src="{{ site.baseurl }}/assets/images/color_palettes/magma.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">cividis</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="cividis" src="{{ site.baseurl }}/assets/images/color_palettes/cividis.png" /> 
    </div>
</div>
<br>


#### Sequential Color Brewer palettes
Single-hue and multi-hue (up to three) options, which are: `Greys`, `Reds`, `Greens`, `Blues`, `Oranges`, `Purples`,
`BuGn`, `BuPu`, `GnBu`, `OrRd`, `PuBu`, `PuRd`, `RdPu`, `YlGn`, `PuBuGn`, `YlGnBu`, `YlOrBr` and `YlOrRd`. 
The options here include reversed (`_r`) and dark (`_d`).


<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Greys</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Greys" src="{{ site.baseurl }}/assets/images/color_palettes/Greys.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Reds</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Reds" src="{{ site.baseurl }}/assets/images/color_palettes/Reds.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Greens</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Greens" src="{{ site.baseurl }}/assets/images/color_palettes/Greens.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Blues</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Blues" src="{{ site.baseurl }}/assets/images/color_palettes/Blues.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Oranges</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Oranges" src="{{ site.baseurl }}/assets/images/color_palettes/Oranges.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Purples</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Purples" src="{{ site.baseurl }}/assets/images/color_palettes/Purples.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">BuGn</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="BuGn" src="{{ site.baseurl }}/assets/images/color_palettes/BuGn.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">BuPu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="BuPu" src="{{ site.baseurl }}/assets/images/color_palettes/BuPu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">GnBu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="GnBu" src="{{ site.baseurl }}/assets/images/color_palettes/GnBu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">OrRd</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="OrRd" src="{{ site.baseurl }}/assets/images/color_palettes/OrRd.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">PuBu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="PuBu" src="{{ site.baseurl }}/assets/images/color_palettes/PuBu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">RdPu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="RdPu" src="{{ site.baseurl }}/assets/images/color_palettes/RdPu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">YlGn</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="YlGn" src="{{ site.baseurl }}/assets/images/color_palettes/YlGn.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">PuBuGn</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="PuBuGn" src="{{ site.baseurl }}/assets/images/color_palettes/PuBuGn.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">YlGnBu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="YlGnBu" src="{{ site.baseurl }}/assets/images/color_palettes/YlGnBu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">YlOrBr</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="YlOrBr" src="{{ site.baseurl }}/assets/images/color_palettes/YlOrBr.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">YlOrRd</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="YlOrRd" src="{{ site.baseurl }}/assets/images/color_palettes/YlOrRd.png" /> 
    </div>
</div>

<br>

### Diverging color palettes
Best used for a wide range data which has a (if there are multiple, these palettes can be manipulated to accomodate that) categorical bound - typically 0, but not always.

#### Perceptually uniform diverging palettes
Seaborn provides us with the original `vlag` and `icefire` palettes and their reveresed (`_r`) counterparts, as well as the `matplotlib` palettes `coolwarm`, `bwr`, and `seismic` (again see the remark above about the ColorBrewer and `matplotlib` counterparts).
I personally like to use `vlag` when plotting diverging data (with TwoSlopeNorm! Mental note, write about that too sometime).

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">vlag</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="vlag" src="{{ site.baseurl }}/assets/images/color_palettes/vlag.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">icefire</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="icefire" src="{{ site.baseurl }}/assets/images/color_palettes/icefire.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">coolwarm</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="coolwarm" src="{{ site.baseurl }}/assets/images/color_palettes/coolwarm.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">bwr</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="bwr" src="{{ site.baseurl }}/assets/images/color_palettes/bwr.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">seismic</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="seismic" src="{{ site.baseurl }}/assets/images/color_palettes/seismic.png" /> 
    </div>
</div>
<br>

#### Diverging Color Brewer palettes
These include `RdBu`, `RdGy`, `PRGn`, `PiYG`, `BrBG`, `RdYlBu`, `RdYlGn` and `Spectral`, and their reversed (`_r`) variations.

<div class="row image-text-row">
    <div class="col-md-2 image-text-left">RdBu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="RdBu" src="{{ site.baseurl }}/assets/images/color_palettes/RdBu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">RdGy</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="RdGy" src="{{ site.baseurl }}/assets/images/color_palettes/RdGy.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">PRGn</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="PRGn" src="{{ site.baseurl }}/assets/images/color_palettes/PRGn.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">PiYG</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="PiYG" src="{{ site.baseurl }}/assets/images/color_palettes/PiYG.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">BrBG</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="BrBG" src="{{ site.baseurl }}/assets/images/color_palettes/BrBG.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">RdYlBu</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="RdYlBu" src="{{ site.baseurl }}/assets/images/color_palettes/RdYlBu.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">RdYlGn</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="RdYlGn" src="{{ site.baseurl }}/assets/images/color_palettes/RdYlGn.png" /> 
    </div>
</div>
<div class="row image-text-row">
    <div class="col-md-2 image-text-left">Spectral</div>
    <div class="col-md-10 image">
        <img class="image-right" alt="Spectral" src="{{ site.baseurl }}/assets/images/color_palettes/Spectral.png" /> 
    </div>
</div>

<br>


### Miscellaneous Colormaps
These are `matplotlib` colormaps that are available in `seaborn`, but as they were not classified as any type, but rather, each created for a specific task. 
For example, `gist_earth`, `ocean`, and `terrain` are all for topological plotting. While we can technically use these as `List` color palettes, they were not really intended for this usage.
This category includes the following, and their reversed (`_r`) counterparts: `flag`, `prism`, `ocean`, `gist_earth`, `terrain`, `gist_stern`, `gnuplot`, `gnuplot2`, `CMRmap`,`cubehelix`, `brg`, `gist_rainbow`, `rainbow`, `jet`, `turbo`, `nipy_spectral` and `gist_ncar`.
For the colors, see [`matplotlib`'s documentation](https://matplotlib.org/stable/tutorials/colors/colormaps.html#miscellaneous){:target="_blank"}.


## Creating a Customized Color Palette
We can also create our own color palette, either based on colors from existing palettes, or by defining them on our own. 
I personally prefer to create a custom color theme for each project, and use it throughout, not only when ploting, but in related papers, presentations, and so on.

In this example, we'll use my current favorite free online tool, [Coolors](https://coolors.co/){:target="blank"}, to select the colors for our new color palette, then recreate it in `seaborn`.
For those of you who don't want to spend too much time on that, Coolors has a [trending palettes](https://coolors.co/palettes/trending){:target="_blank"} section, from which I chose the following:

[![Custom color palette]({{ site.baseurl }}/assets/images/color_palettes/coolors.png)](https://coolors.co/palette/f72585-7209b7-3a0ca3-4361ee-4cc9f0){:target="_blank"}

By default, the colors are displayed in HEX format, though you can select other formats as well. 
I personally prefer to use it, as `seaborn` palettes can be created as a list of HEX values, and generally it is an easy to use across multiple technical decks (Python / HTML / PowerPoint / ...).
Note that the HEX representation provided by Coolers is **missing a starting `#`**, so be sure to add that character to every color code.

```python
import seaborn as sns
from matplotlib import pyplot as plt

tips = sns.load_dataset("tips") # some example data
palette = ["#F72585", "#7209B7", "#3A0CA3", "#4361EE", "#4CC9F0"]
sns.set()
# or: sns.set_palette(palette), then the palette argument below is not needed
sns.catplot(x="day", y="total_bill", data=tips, palette=palette)
plt.tight_layout()
```

And here is the resulting graph:
![seaborn plot with custom palette]({{ site.baseurl }}/assets/images/color_palettes/coolors_fig.png)


### A bit about colorblind palettes
A few months back a friend asked how to make a graph more grayscale friendly and colorblind friendly.
The first thing that came to mind was using [hatches for bar plots]({% post_url 2022-07-27-bars_1 %}).
Seaborn does have a colorblind palette (mentioned above), but I wondered if there's anything else I'll be able to use to adjust my own palettes.
I am still looking for more resources on the topic, but in the meantime, I found a really cool free feature on [Coolors](https://coolors.co/){:target="blank"}, aptly named 'color blindness':

![Custom color palette]({{ site.baseurl }}/assets/images/color_palettes/colorblindness_1.png)

Clicking the button will reveal a list of types of colorblindness. Clicking each will allow you to have a hint of how color blind people will see your palette, and hopefully avoid pitfalls:

![Custom color palette]({{ site.baseurl }}/assets/images/color_palettes/colorblindness_2.png)
<br>



## Using Your Color Palette
We can use the palette as shown above. 
The thing is, that way we are not really defining a specific color for each `hue` category, which is fine if there is no need in highlighting specific data, but the color assignment still relies on the order of the data. 
If we were diligent enough to [define an order]({% post_url 2022-07-22-dataframe_ordering %}) to all of our `dataframe` columns, the order, and the subsequent coloring, would remain the same, but what if we plot only a portion of the data? 
In that case, the color assignment for the remaining data may be inconsistent with other plots.

That is why we are going to use the `palette` argument, but instead of just passing the initial colors, we are going to use a dictionary (which I implement as a global variable on actual projects), mapping each dataset/category to a specific color from the color palette. 
This is an incredibly simple trick to have in your arsenal, so much so I feel stupid even typing it, but it has really simplified my entire workflow. 
I ardently use it in every new project, not only for color palettes, but also for markers, hatches and line types. 

```python
import seaborn as sns
from matplotlib import pyplot as plt

tips = sns.load_dataset("tips") # some example data
# hand picking each colors per category
palette = {'Fri': "#F72585", 'Sun':  "#4CC9F0", 'Sat': "#7209B7", 'Thur': "#3A0CA3"}
sns.set_palette(palette)
sns.catplot(x="day", y="total_bill", data=tips)
plt.tight_layout()
```

This way, the order of the categories stays the same (since we have not defined a new order on the `day` column), but we can control the color assignment:
![seaborn plot with custom palette]({{ site.baseurl }}/assets/images/color_palettes/coolors_fig_2.png)
