---
title: Layout
status: draft
---


Alignment is an important fundamental of UI design.
{: .intro}

Graphic and UI designers utilise a grid to achieve pleasing designs with well connected content and consisent vertical and horizontal rhythm or spacing.

## The 0.25rem soft grid

The Wedgetail design system is built on the principles of a **4pt soft grid**.

By using a spacer variable equal to 0.25rem (equals 4px when basefont size is 16px) and setting all paddings, margins, column-gaps, widths and other size attributes to multiples of this spacer; alignment to invisible grid is mainatined and vertical and horizontal rhythm is achieved.

We use 0.25rem as the spacer (rather than 4pt/px) since our basefont size changes to 18px at viewport widths >1440px. So using rem units for sizing/spacing will mean the sizing/spacing will scale up with the text.