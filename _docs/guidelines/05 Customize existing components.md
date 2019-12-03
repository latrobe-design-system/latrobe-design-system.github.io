---
title: Customize existing assets
status: planned
info: Rapidly build beautiful and accessible experiences. The Wedgetail kit contains all resources you need to get started.
---

Each component in the design system is customisable, through its variables or with additional code.

The patterns below are the best practice way to modify and change the components. This approach tries to retain all the hard work that was put into the components for accessibility and browser support.

## Set up

It is recommended to not touch the generated ds-ltu.scss and import it into a main.scss file. You can import the ds-ltu.scss in the main.scss file like so:

`@import "./ds-ltu.scss";`

## Customise components with SASS variables

Any SASS variable on a line that ends with `!default` can be changed.

When you change a variable above the import of variables.scss it flows throughout all of the components in the system. In this ds-ltu.scss example you can see customisations to the colours and grid:


```
// Variable overrides
$color-1: #e2231b;
$color-2: #242424;
$color-2a: #414141;
$color-3a: #eee;
$color-3b: #ccc;
$color-3c: #999;
$color-3d: #6C6C6C;

// Design System
@import "ds-ltu.scss";
```

## Customise components with additional code

Often times we may need a bigger button or a larger header component. In these cases we do not need to create our own components we can modify existing ones.
To customise components that already exist we recommend using block element modifier (BEM) to modify styles on existing components.
If you were going to make a large button with an icon you could add some additional classes and html to the existing `.btn`.

```
<a class="btn btn--lg" href="#">Button</a>
```

The system doesn't come with .btn--lg however you can add your own styles at the bottom of the ds-ltu.scss file.

```
// Variable Overrides
$color-1: #e2231b;
$color-2: #242424;
$color-2a: #414141;
$color-3a: #eee;
$color-3b: #ccc;
$color-3c: #999;
$color-3d: #6C6C6C;

// Design System
@import "ds-ltu.scss";

// Larger button variation
.btn--large {
    padding: 30px;
}
```

When adding your own styles it is important to use the functions and variables that exist in the Design System. This will make it easier to change the styles throughout the system and share your work with the wider community.