---
title: "Button"
status: ready
info: Buttons are used to help users perform common actions more easily and direct them through a workflow.
---

## Types

**Link buttons:** use the `<a>` tag for buttons that direct the user to a new page, ie. for buttons that are links. They should also be used for buttons that default to a link when javascript fails or is switched off, eg. a play video button that opens a YouTube video in a modal or if JS fails takes vistor to the YouTube video page.

**Button tag:** use the `<button>` tag for buttons that will be used to make changes on a page via javascript and do not take the viewer to a new page.

**Form buttons:** use standard form buttons `<input type="">` in forms.

## Styles

- Buttons have an underline on hover in order to address [WCAG2.0 Criterion 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- Buttons are sentence case for best readability.

## Icons

Any of the icons in the [icon set](/foundations/icons/) can be used with a button by including the class `icon-[icon-name]`. Where icon-name is the name listed on the [icons page](/foundations/icons/).

To place the icon on the left also include the class `icon-before`

{% include sample-iframe.html snippet="button/snippets/button.html" %}

{% include sample-iframe.html snippet="button/snippets/primary_button.html" %}

{% include sample-iframe.html snippet="button/snippets/secondary_button.html" %}

{% include sample-iframe.html snippet="button/snippets/link-button.html" %}

{% include sample-iframe.html snippet="button/snippets/round_button.html" %}

## Button modifiers

{% include sample-iframe.html snippet="button/snippets/small_button.html" %}

{% include sample-iframe.html snippet="button/snippets/small_icon_button.html" %}

{% include sample-iframe.html snippet="button/snippets/light_button.html" bgcolor="#363636" %}

## Form buttons

{% include sample-iframe.html snippet="button/snippets/form_button.html" %}
