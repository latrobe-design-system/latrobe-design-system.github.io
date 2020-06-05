---
title: "Alert"
status: ready
---

Alerts are used to notify users of important information or changes on a page, in a way that attracts the user's attention without interrupting the user's task. Typically they appear at the top of a page or form following a submit action.
{: .intro}

**Note:** These alerts should not be confused with [Callouts](callout.html) which are for use on standard content pages to draw attention to a particular piece of content. 

Alerts on the other hand are typically used to provide feedback to user interaction such as submitting a form or making a selection.

## Info alerts

Info alerts may be present on page load or injected to provide information pertinent to a specific user selection.

{% include sample-iframe.html snippet="src/alert/snippets/alert-info/alert-info.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-info/alert-info-with-heading.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-info/alert-info-with-read-more.html" %}

## Other alerts

Success, error and warning alerts are usually not present on the page on load but injected upon user action (unless submit action takes user to new page where alert is loaded - eg success alert to say "Your application has been submitted").

Use modifiers `ds-alert--success`, `ds-alert--error`, `ds-alert--warning` and swap out icon svg for these versions.


{% include sample-iframe.html snippet="src/alert/snippets/alert-success/alert-success.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-success/alert-success-with-content.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-error/alert-error.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-error/alert-error-with-content.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-warning/alert-warning.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-warning/alert-warning-with-content.html" %}

## Optional close button

You can add a close button to alerts to allow user to dismiss them. 

**Note:** The standard JS only removes the alert from the DOM. So if you place this alert on page load it will reappear.

{% include sample-iframe.html snippet="src/alert/snippets/alert-info/alert-info-close.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-success/alert-success-close.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-error/alert-error-close.html" %}

{% include sample-iframe.html snippet="src/alert/snippets/alert-warning/alert-warning-close.html" %}

## Page alert

Use modifier `ds-block--full-width` on the `ds-block` container and `ds-alert--full-width` on `ds-alert` component for a full width version.

The full width version is a special version for page/site alerts that site immeadiately below the site header. 

Or they could be used for applications at top or bottom of viewport.

{% include sample-iframe.html snippet="src/alert/snippets/alert-info/alert-info-full-width.html" %}