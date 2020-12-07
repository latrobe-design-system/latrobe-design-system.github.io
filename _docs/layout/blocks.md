---
title: "Blocks"
status: ready
---
Blocks are used to stack content sections on a page and to center content horizontally. 

All components and elements are placed within a block.

Blocks are always `<div>` elements. We are NOT using the `<section>` element as we are using implicit sectioning (i.e. sectioning based on heading hierarchy).

## Block widths

There are 4 possible maximum widths of content within a block:

| | Max width | Modifier |
|---|---|---|
| Default | 1280px | |
| Narrow | 1024px | `ds-block--narrow` |
| Wide | 1600px | `ds-block--wide` |
| Full width | 100% | `ds-block--full-width` |


{% include sample-iframe.html snippet="src/core/snippets/block/block.html" codeonly="yes" %}

{% include sample-iframe.html snippet="src/core/snippets/block/blocks.html" iframeonly="yes" %}