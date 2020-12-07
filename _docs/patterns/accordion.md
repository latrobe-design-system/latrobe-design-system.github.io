---
title: "Accordion"
status: ready
 
---
Accordions help users see only the content they need. Accordions expand and collapse sections of content.
{: .intro}

Accordions should be used sparingly! Content should only be hidden for well considered reasons.
{: .alert .alert--info}

Accordions are good for:
* **Selective content:** i.e. there may be many sections under a given topic but only a few sections apply to a given individual at a time.
* **Complex process overviews:** with the detail of each step hidden. See the [Sample 2](#accordion-sample-2) below.

## Accessibilty

Accordion has been built in accordance with https://www.w3.org/TR/wai-aria-practices-1.1/#accordion

The heading level for each accordion heading should fit correctly within the outline of the page. Headings within the content of each accordion should follow from there.

## Patterns

Note: Accordions have a special class for `ds-block` container `ds-block-accordion`. This is to cater for Squiz Matrix implementation limitations. Each accordion is wrapped in its own `ds-block ds-block-accordion` container and stacked on top of each other - this allows a content template to made for a single accordion and stacking containers for mutiple accodions. 

For non-matrix implementations where it is more praticle to add, remove and reorder accordions in a group you may forgo the `ds-block-accordion` class on the `ds-block` container and have only one `ds-block` 

{% include sample-iframe.html snippet="src/accordion/snippets/accordion.html" %}

{% include sample-iframe.html snippet="src/accordion/snippets/accordion-numbered.html" %}
