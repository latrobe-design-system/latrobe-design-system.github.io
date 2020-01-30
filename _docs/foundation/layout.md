---
title: Layout
status: draft
---

## Blocks

Each section of content on a page is contained within a block. Blocks provide consistent vertical spacing between content and centre content horizontally.

There are 4 possible maximum widths of content within a block:

| | Max width | Modifier |
|---|---|---|
| Default | 1024px | |
| Medium | 1280px | ds-block--medium |
| Wide | 1600px | ds-block--wide |
| Full width | 100% | ds-block--full-width |

The background of a block is white by default. Use the modifier <code>ds-block--grey</code> to give the block a grey background. 

{% include sample-code-only.html snippet="core/src/html/block/block.html" %}

## 4x grid fundamentals <a name="4x-grid-fundamentals"></a>

All spacing on the site is to be in 4px increments: font-size, line-height, margins, padding

## Alignment <a name="alignment"></a>

Alignment is an important fundamental of design.

Graphic and UI designers utilise a grid to achieve pleasing designs with well connected content and consisent vertical and horizontal rythm or spacing.

Our typography vertical spacing is based on 4px increments.

By adopting 4px increments for all vertical and horizontal spacings we can achieve a well aligned harmonious UI without working to a hard grid.

{% include sample-iframe.html snippet="core/src/html/grid/grid.html" %}
