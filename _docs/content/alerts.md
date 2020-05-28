---
title: "Alert"
status: draft
---

Alerts are used to notify users of important information or changes on a page, in a way that attracts the user's attention without interrupting the user's task. Typically they appear at the top of a page following a submit action.
{: .intro}

**Note:** These alerts should not be confused with [Callouts](callout) which are for use on standard content pages to draw attention to a particular piece of content. 

Alerts on the other hand are typically used to provide feedback to user interaction such as completing a form.

## Info alerts

Info alerts may be present on page load or injected to provide information pertinent to a user selection.

{% include sample-iframe.html snippet="alert/snippets/alert-info/alert-info.html" %}

{% include sample-iframe.html snippet="alert/snippets/alert-info/alert-info-with-heading.html" %}

{% include sample-iframe.html snippet="alert/snippets/alert-info/alert-info-with-read-more.html" %}

## Other alerts

Success, error and warning alerts are usually not present on the page on load but injected upon user action (unless submit action takes user to new page where alerts loaded).

Use modifiers `ds-alert--success`, `ds-alert--error`, `ds-alert--warning` and swap out icon svg for these versions.

**Note:** The design system does not provide an action for optional close button this is dependant on specific application senario and logic.

{% include sample-iframe.html snippet="alert/snippets/alert-success/alert-success-group.html" %}

{% include sample-iframe.html snippet="alert/snippets/alert-error/alert-error-group.html" %}

{% include sample-iframe.html snippet="alert/snippets/alert-warning/alert-warning-group.html" %}

## Page alert

Use modifier `ds-block--full-width` on the `ds-block` container and `ds-alert--full-width` on `ds-alert` component for a full width version.

The full width version is a special version for page/site alerts that site immeadiately below the site header.

{% include sample-iframe.html snippet="alert/snippets/alert-info/alert-info-full-width.html" %}