---
title: Typography
status: draft
---

## Type tokens and sets <a name="type-tokens-and-sets"></a>

Wedgetail uses type tokens and themes to manage typography. Type tokens are pre-set configurations of typographic elements such as font size, weight, or leading (line height) that are specifically calibrated for use alongside IBM Plex in product. Selecting the appropriate type style is determined by layout or template structure. Layouts may have several levels of architecture or areas that require varying typographic hierarchies.

## Typescale <a name="typescale"></a>

Wedgetail uses a modular type scale to help achieve a harmonious values that are both pleasing for users and scalable for feature development.
Our website headings use the 1.33 sizing scale.

## Typeface: Roboto <a name="typeface"></a>

Wedgetail uses the open-source typeface Roboto. It can be accessed and downloaded from Google Fonts.

<!-- {% include sample-iframe-only.html snippet="foundations/typography/roboto_light.html" ltulayout="home" %}
[Roboto](https://fonts.google.com/specimen/Roboto) Light is the primary font used for body copy. -->

{% include sample-iframe-only.html snippet="foundations/typography/roboto_regular.html" ltulayout="home" %}
[Roboto](https://fonts.google.com/specimen/Roboto) Regular is the primary font used for body copy.

{% include sample-iframe-only.html snippet="foundations/typography/roboto_medium.html" ltulayout="home" %}
[Roboto](https://fonts.google.com/specimen/Roboto) Medium is used for bold body copy.

{% include sample-iframe-only.html snippet="foundations/typography/roboto_slab.html" ltulayout="home" %}
[Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) so far unused.

The main CSS file only makes use of it in 4 instances:

* Pull quotes.
* Intro paragraphs in news articles section - I couldn't find an example on the web.
* Attribution paragraphs in Profiles section - I couldn't find an example on the web.
* First paragraph in cross promo  - I couldn't find an example on the web.

__!!!AJP!!! We should replace this with a system font - e.g. <span style="font-family: Georgia">Georgia</span> - the extra font download is not worth it for these four uses!__

{% include sample-iframe.html snippet="text/src/html/heading.html" %}