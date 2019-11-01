---
title: "Button"
status: ready
info: Buttons are used to help users perform common actions more easily and direct them through a workflow.
---

## Types

**Link buttons:** use the `<a>` tag for buttons that direct the user to a new page, ie. for buttons that are links. They should also be used for buttons that default to a link when javascript fails or is switched off, eg. a play video button that opens a YouTube video in a modal or if JS fails takes vistor to the YouTube video page.</p>

**Button tag:** use the `<button>` tag for buttons that will be used to make changes on a page via javascript and do not take the viewer to a new page.

**Form buttons:** use standard form buttons `<input type="">` in forms.

## Styles

- Buttons have an underline on hover in order to address [WCAG2.0 Criterion 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- Buttons are sentence case for best readability.

## Icons

Any of the icons in the [icon set](/foundations/icons/) can be used with a button by including the class `<icon-[icon-name]>`. Where icon-name is the name listed on the [icons page](/foundations/icons/).

To place the icon on the left also include the class `<icon-before>`


{% include sample-iframe.html snippet="button/src/html/primary_button.html" %}
The primary button style is used for primary actions. Only one of these types of buttons should be used in each view (ie block).

{% include sample-iframe.html snippet="button/src/html/secondary_button.html" %}
The secondary button style is used for secondary actions. They are often used next to primary buttons or elsewhere on a page for secondary actions.


{% include sample-iframe.html snippet="button/src/html/light_button.html" %}
Light buttons can be used on dark or image backgrounds.

Add -light to button classes to use light versions.

Primary light button `<class="btn-light">` should only be used on red backgrounds or backgrounds where the white provides better contrast than red.

{% include sample-iframe.html snippet="button/src/html/filter_button.html" %}
These buttons are used for filters. They have a `<selected>` class.

{% include sample-iframe.html snippet="button/src/html/round_button.html" %}

{% include sample-iframe.html snippet="button/src/html/small_button.html" %}

{% include sample-iframe.html snippet="button/src/html/small_icon_button.html" %}

## Form buttons

{% include sample-iframe.html snippet="button/src/html/form_button.html" %}

**_Yet to look at restyling these_**

Use `<input>` buttons in forms.