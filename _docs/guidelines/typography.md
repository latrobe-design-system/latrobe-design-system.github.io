---
title: "Typography"
status: ready
info: Typography can help create clear hierarchies, organize information, and guide users through a product or experience.
---

- [Type tokens and sets](#type-tokens-and-sets)
- Scale
- Style
- Type colour


## Type tokens and sets

Wedgetail uses type tokens and themes to manage typography. Type tokens are pre-set configurations of typographic elements such as font size, weight, or leading (line height) that are specifically calibrated for use alongside IBM Plex in product. Selecting the appropriate type style is determined by layout or template structure. Layouts may have several levels of architecture or areas that require varying typographic hierarchies.

## Typeface: Roboto

Wedgetail uses the open-source typeface Roboto. It has been carefully designed to meet La Trobe's needs and reflect La Trobe's spirit, beliefs, and design principles. Roboto can be accessed and downloaded from Google Fonts.

{% include sample-iframe-only.html snippet="foundations/typography/roboto.html" ltulayout="home" %}
[Roboto](https://fonts.google.com/specimen/Roboto) Light is the primary font used for body copy.

{% include sample-iframe-only.html snippet="foundations/typography/roboto_medium.html" ltulayout="home" %}
[Roboto](https://fonts.google.com/specimen/Roboto) Medium is used for bold body copy.

{% include sample-iframe-only.html snippet="foundations/typography/roboto_condensed_bold.html" ltulayout="home" %}
[Roboto Condensed Bold](https://fonts.google.com/specimen/Roboto+Condensed) is used for headings and other specific treatments.

{% include sample-iframe-only.html snippet="foundations/typography/roboto_slab.html" ltulayout="home" %}
[Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) so far unused.

{% include sample-iframe-only.html snippet="foundations/typography/brioni.html" ltulayout="home" %}
A tertiary font [Brioni Light](https://www.typotheque.com/fonts/brioni) is also available.

The main CSS file only makes use of it in 4 instances:

* Pull quotes.
* Intro paragraphs in news articles section - I couldn't find an example on the web.
* Attribution paragraphs in Profiles section - I couldn't find an example on the web.
* First paragraph in cross promo  - I couldn't find an example on the web.

__!!!AJP!!! We should replace this with a system font - e.g. <span style="font-family: Georgia">Georgia</span> - the extra font download is not worth it for these four uses!__
