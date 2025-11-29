---
layout: post
title: "ICLR, LLM-Generated Reviews, and What the Data Shows"
categories: [ commentary ]
tags: [ machine learning, peer review, llms, research community, iclr ]
image: "assets/images/llm_generated_reviews_iclr/llm_reviews_meme.png"
description: "A look at ICLR’s new policy response, recent analyses of LLM-generated reviews, and what the community has uncovered."
featured: true
comments: false
beforetoc: "
Over the past week, the machine learning community has been poring over the newly released ICLR reviews, and many of the concerns people have been talking about for years suddenly became very concrete. 
LLM generated reviews, unverified model hallucinations treated as reviewer feedback, and even reports of LLM assisted duplicate submissions all surfaced, sometimes in ways that directly harmed authors.
"
tldr: |
  - The latest ICLR review cycle showed what many have worried about for years: AI generated reviews, hallucinated feedback, and real harm to authors. 
  - ICLR has begun responding with new policies
  - New data gives the first large scale picture of AI use in reviews and submissions
  - The deeper issues run beyond LLMs, and the field may need to rethink how peer review is structured
toc: true
---
Before getting into the specifics, a bit of context. None of these issues are entirely new. Like many people in the field, I have been thinking about the role of LLMs in peer review for a while: where they genuinely help, where they quietly distort judgment, and where they introduce entirely new ways for things to go wrong. 
But this was the first time I saw such a concentrated, public snapshot of the problem.

As these conversations circulated, ICLR released its official policy response.
Around the same time, I wrote two LinkedIn summaries reflecting on the unfolding situation: 
one highlighting concrete examples of flawed, likely LLM-generated reviews, and another summarizing the new Pangram Labs dataset and the ICLR policy update.

This post brings everything together. It weaves the anecdotes, the data, and the broader question of what responsible use of LLMs in peer review should look like going forward.

My original LinkedIn posts:
- [My first LinkedIn post on concrete review issues](https://www.linkedin.com/feed/update/urn:li:activity:7395517194413154304/){:target="_blank"}  
- [My follow‑up on the Pangram Labs analysis and ICLR’s response](https://www.linkedin.com/feed/update/urn:li:activity:7397273264907157504/){:target="_blank"}


## Reviewing the Anecdotes: What Sparked the Conversation

A number of widely shared examples made the issue impossible to ignore. These cases weren't subtle: they showed LLMs failing to parse figures, hallucinating missing information, or generating reviews wholesale—preamble and all. A few of the most widely circulated examples include:

**1. The "empty space" complaint** \[[Source](https://x.com/kotekjedi_ml/status/1988610442718241178){:target="_blank"}\]<br>
A reviewer criticized "too much empty space" in the submitted paper. The likely cause was that the LLM used to generate the review failed to parse the graphics at all, flagging them as "white space" instead.  

**2. The "missing information" review** \[[Source](https://x.com/peter_richtarik/status/1988935677736546622){:target="_blank"}\]<br>
Another review insisted key information was missing, even though it was present. The authors ultimately withdrew the submission.  

**3. The "reviewer‑style questions" copy‑paste** \[[Source](https://x.com/_onionesque/status/1988643422228648076){:target="_blank"}\]<br>
A reviewer pasted the model's output verbatim, preamble included.  

These point to a growing pattern: relying on "paste the paper in, paste the output out" workflows without real engagement.


## ICLR’s New Policy Response

As the community began sharing examples of problematic reviews, ICLR released a detailed policy update outlining the actions it is taking for ICLR 2026. 
The update reinforces two core rules:

1. **If authors or reviewers use an LLM, they must disclose it and remain responsible for its output.**
2. **Regardless of LLM use, false claims, hallucinated references, misrepresentations, or fabricated content are violations of the Code of Ethics.**

The new actions cover three main areas:

### **LLM-generated or hallucinated papers**
Papers that show extensive or careless LLM use without disclosure, especially when this leads to false claims, misrepresented results, or hallucinated references, may be desk rejected. ACs and SACs will review flagged papers, and detection tools will be used only as a triage signal rather than standalone evidence.

### **Duplicate or paraphrased submissions**
The policy update also highlights cases where authors submitted multiple slightly different versions of the same paper, sometimes LLM-paraphrased, without disclosure or cross-citation. Consequences for this practice are being finalized and will be outlined in a later post.
### **Low-quality or LLM-generated reviews**
Reviewers are responsible for what they submit. Reviews containing false claims, hallucinated references, or signs of careless LLM use may trigger consequences, including **desk rejection of the reviewer’s own submitted papers** (a previously announced policy). ACs and SACs will review problematic cases, and authors are encouraged to confidentially flag egregious reviews.

**Full policy:** [ICLR 2026 Response to LLM‑Generated Papers and Reviews](https://blog.iclr.cc/2025/11/19/iclr-2026-response-to-llm-generated-papers-and-reviews/){:target="_blank"}

This is an important and encouraging step. It both acknowledges real community concerns and commits to enforcing the policies ICLR had already defined. And given how quickly other conferences are now encountering similar issues, it seems increasingly likely that more venues will need to adopt comparable policies in the near future.

## Pangram Labs’ Analysis of All ICLR Reviews

Pangram Labs analyzed every ICLR review and categorized each into five levels:

* Fully AI‑generated  
* Heavily AI‑edited  
* Moderately AI‑edited  
* Lightly AI‑edited  
* Fully human‑written  

This distinction matters. Using an LLM to polish a sentence is fundamentally different from outsourcing an entire review.

This dataset is one of the first large-scale attempts at quantifying how much AI assistance shows up in ICLR reviews. It’s important to note that these classifiers are early-stage and imperfect. 
Some clearly LLM-generated reviews appear to have slipped through unflagged, and earlier analyses have reached different conclusions about the relationship between AI use and review scores.

Even with these caveats, the findings help establish consistent trends. 
They reinforce broad patterns the community has suspected for a while and highlight a growing mismatch between AI use by authors and by reviewers. 
Like security auditing, AI detection is adversarial by nature: classifiers improve, people adapt, and the cycle repeats. 
The point is not to treat this snapshot as definitive, but as evidence of a systemic issue that requires intentional norms and policy.

### Headline Result

**21 percent of all reviews appear fully AI‑generated.**  
Full results: [iclr.pangram.com](https://iclr.pangram.com){:target="_blank"}


### AI in Submissions: A More Nuanced Picture

Pangram Labs also examined AI‑generated text in submissions. 
Despite long-standing fears, heavily AI-generated papers are uncommon:

* **61 percent** of submissions contain **0–10 percent** AI‑generated text.  
* Heavily AI‑generated papers are **rare**.  
* Papers with more AI‑generated content tend to receive **lower scores**.

### Review-Submission Asymmetry

A key insight:

* AI‑generated **reviews** tend to give **higher scores**.  
* AI‑generated **submissions** tend to **receive lower scores**.

This asymmetry complicates fairness and calibration. Earlier community analyses suggested that AI-generated reviews tended to score papers more harshly, while the Pangram data indicates the opposite. 
These contradictions show how early and unsettled this space still is, and why clearer norms matter more than relying on any single classifier’s output.

## A Real Example of Harm

A reviewer highlighted a case where a promising paper was withdrawn after receiving two very negative reviews ([source](https://x.com/kahnchana/status/1989724534061043918){:target="_blank"}). 
Pangram’s classifier marked both reviews as **100 percent AI‑generated**. 

This is exactly the kind of failure mode many in the community have been worried about: AI-generated reviews producing confidently incorrect judgments that directly affect authors.

## Broader Reflections: The Strain on Conference Reviewing

Many of the problems showing up in this review cycle did not begin with LLMs. Review quality has been strained for years due to:

* Reviewer overload
* Explosive growth in submissions 
* Hype‑driven publication pressure
* Limited accountability for reviewers
* Resetting review context every conference cycle

LLMs did not create these pressures, but they can amplify them. <br>
A rushed or overloaded reviewer is exactly the person most likely to lean on an LLM in a one-shot, unverified way.

Although the situation is especially acute in ML, the same structural pressures are increasingly visible across other areas of computer science. 
This has revived a broader question for the field:

**Should we continue relying so heavily on conferences rather than journals?**

Most scientific disciplines lean on journals with rolling deadlines, multi-round reviews, and continuity. 
In contrast, computer science funnels most peer review through large conferences with short reviewing windows, one-round evaluations, and little follow-up.

Some venues are beginning to experiment with alternatives. 
A few conferences now offer multiple submission windows throughout the year, and in ML, where these issues are exacerbated by the sheer number of submissions, hybrid journal-conference tracks have started to appear. 
These are promising steps, but the underlying pressures are not limited to ML either. 
The entire field may need to reconsider whether the conference-centric model still serves us well in an era where LLMs can accelerate both good and bad reviewing practices.

## Moving Forward

LLMs can (and should) still play a constructive role in peer review when used with intention. They can help:

* rephrase or clarify language, especially for reviewers whose first language is not English
* make the tone more constructive and less harsh
* surface inconsistencies or missing citations
* highlight technical details that deserve extra attention

These are assistive uses.<br>
What they cannot replace is the core of reviewing: reading the paper, understanding the contribution, and engaging with the work.

Automatic LLM-detection tools can help triage problematic content, but they are not enough on their own. 
These systems will always face adversarial dynamics: once a detector becomes widely used, people adapt around it, and the cycle continues.
False positives and false negatives are unavoidable. 
The real solution requires clearer norms, stronger accountability, and institutional structures that reward careful reviewing rather than one-click shortcuts.

The encouraging part is that the community is beginning to treat this more seriously.
ICLR’s willingness to adapt policies in real time shows that conferences can act rather than ignore the problem, and that transparency around reviews can meaningfully shape policy. 
Other venues experimenting with new submission models and accountability mechanisms suggest that the field as a whole is ready for change.

We are still early in understanding how LLMs should fit into peer review, but this cycle makes one thing clear: responsible use will require both individual judgment and institutional structure. 
The tools will keep evolving. Our norms need to evolve with them.

