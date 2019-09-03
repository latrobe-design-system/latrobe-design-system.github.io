---
title: "Buttons"
---

Buttons are used to help users perform common actions more easily and direct them through a workflow.

## Button types

**Link buttons:** use the `<a>` tag for buttons that direct the user to a new page, ie. for buttons that are links. They should also be used for buttons that default to a link when javascript fails or is switched off, eg. a play video button that opens a YouTube video in a modal or if JS fails takes vistor to the YouTube video page.</p>

**Button tag:** use the `<button>` tag for buttons that will be used to make changes on a page via javascript and do not take the viewer to a new page.

**Form buttons:** use standard form buttons `<input type="">` in forms.

## Button styles

Buttons have an underline on hover in order to address [WCAG2.0 Criterion 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)

Buttons are sentence case for best readability.

| Class                 | Font                 | Size / Line height \(< 1400px viewport\) | Size / Line height \(>1400px viewport\) | Weight |
|-----------------------|----------------------|------------------------------------------|-----------------------------------------|--------|
| btn                   | RobotoCondensed Bold | 16px / 24px                              | 18px / 28px                             | Normal |
| btn\-secondary        | RobotoCondensed Bold | 16px / 24px                              | 18px / 28px                             | Normal |
| btn\-light            | RobotoCondensed Bold | 16px / 24px                              | 18px / 28px                             | Normal |
| btn\-secondary\-light | RobotoCondensed Bold | 16px / 24px                              | 18px / 28px                             | Normal |

### Icons

Any of the icons in the [icon set](/foundations/icons/) can be used with a button by including the class `<icon-[icon-name]>`. Where icon-name is the name listed on the [icons page](/foundations/icons/).

To place the icon on the left also include the class `<icon-before>` See examples below.

### Primary buttons

The primary button style is used for primary actions. Only one of these types of buttons should be used in each view (ie block).
{% include sample-iframe.html snippet="button-primary.html" %}

### Secondary buttons

The secondary button style is used for secondary actions. They are often used next to primary buttons or elsewhere on a page for secondary actions.
{% include sample-iframe.html snippet="button-secondary.html" %}

### Light buttons

Light buttons can be used on dark or image backgrounds.

Add -light to button classes to use light versions.

Primary light button `<class="btn-light">` should only be used on red backgrounds or backgrounds where the white provides better contrast than red.

{% include sample-iframe.html snippet="button-light.html" %}

### Filter buttons

These butons are used for filters. They have a `<selected>` class.

{% include sample-iframe.html snippet="button-filter.html" %}

### Round buttons

These butons are used for f
{% include sample-iframe.html snippet="button-round.html" %}

### Small button

{% include sample-iframe.html snippet="button-small.html" %}

### Small button with icon

{% include sample-iframe.html snippet="button-small-icon.html" %}

### Form buttons

**_Yet to look at restyling these_**

Use `<input>` buttons in forms.

{% include sample-iframe.html snippet="button-input.html" %}

## Legacy classes

### Ltu buttons

Buttons using `<a class="ltu-button">` have been aligned in style with secondary button.

{% include sample-iframe.html snippet="buttons.html" ltulayout="standard_page" %}
