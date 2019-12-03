---
title: Core
status: draft
info: Discover all the different components that the Design System community is working on. Here you can find design and development files for each component, findings we’ve collected from performing user research as well as documentation to help teams adopt the design system for their projects.
---

{% include colours.html snippet="core/src/html/colour/primary-colours.html" %}

{% include colours.html snippet="core/src/html/colour/accent-colours.html" %}

<!-- {% include colours.html snippet="core/src/html/colour/brand-alts.html" %} -->

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


## Designing with icons <a name="designing-with-icons"></a>

### Sizing

Wedgetail components typically use icons on 16px artboards. Icons on 20px, 24px, and 32px artboards can also be used within the UI. Be sure icon size is consistent throughout your product.

### Touch targets

All touch targets for interactive icons need to be 44px or larger. Developers can add padding to a touch target with CSS to meet the 44px requirement.

### Colour

Icons are always a solid, monochromatic color and need to pass the same color contrast ratio as typography (4.5:1). The color of the icon should reflect the importance of the icon’s action which should always be to help guide a user. For more information on color, see the Color guidelines.

### Alignment

When used next to text, icons should be center-aligned.

<a name="utility-icons"></a>

{% include sample-iframe.html snippet="core/src/html/icons/icons.html" %}


## Layout

## Containers

All block containers are wrapped with a 12% margin for larger displays and 6% for smaller displays.

## 4x grid fundamentals <a name="4x-grid-fundamentals"></a>

All spacing on the site is to be in 4px increments: font-size, line-height, margins, padding

## Alignment <a name="alignment"></a>

Alignment is an important fundamental of design.

Graphic and UI designers utilise a grid to achieve pleasing designs with well connected content and consisent vertical and horizontal rythm or spacing.

Our typography vertical spacing is based on 4px increments.

By adopting 4px increments for all vertical and horizontal spacings we can achieve a well aligned harmonious UI without working to a hard grid.

## Sizing scale <a name="sizing-scale"></a>

TODO