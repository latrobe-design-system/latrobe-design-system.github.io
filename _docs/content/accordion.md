---
title: "Accordion"
status: ready
info: Accordions help users see only the content they need. Accordions expand and collapse sections of content.
---

Accordions should be used sparingly! Content should only be hidden for good reason.

Accordions are good when content is selective i.e. there may be many sections under a give topic but only a few sections apply to a given individual at a time.

Accordions can also be used to provide a process overview with the detail of each step hidden. See the [numbered accordion example](#accordion-numbered) below.

## Accessibilty

Accordion has been built in accordance with https://www.w3.org/TR/wai-aria-practices-1.1/#accordion

The heading level for each accordion heading should fit correctly within the outline of the page. Headings within the content of each accordion should follow from there.

## Patterns

{% include sample-iframe.html snippet="accordion/snippets/accordion.html" %}

{% include sample-iframe.html snippet="accordion/snippets/accordion-numbered.html" %}
