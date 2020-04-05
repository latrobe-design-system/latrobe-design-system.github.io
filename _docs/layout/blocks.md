---
title: "Blocks"
status: draft
---
Blocks are used to stack content sections on a page and to center content horizontally. 

All components and elements are placed within a block.

Blocks have an optional header for optional introuctory content - e.g. heading and description.

Blocks are always <code>&lt;div&gt;</code> elements. We are NOT using the <code>&lt;section&gt;</code> element as we are using implicit sectioning (i.e. sectioning based on heading hierarchy).

## Block widths

There are 4 possible maximum widths of content within a block:

| | Max width | Modifier |
|---|---|---|
| Default | 1024px | |
| Medium | 1280px | ds-block--medium |
| Wide | 1600px | ds-block--wide |
| Full width | 100% | ds-block--full-width |

## Block background color

The background of a block is white by default. 

Use the modifier `ds-block--grey` to give the block a grey background. 

{% include sample-code-only.html snippet="core/snippets/block/block.html" %}