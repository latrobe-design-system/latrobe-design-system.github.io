---
title: Create a new component
status: planned
info: Websites have different user needs and the Design System is constantly changing. To meet these user needs you may have to create your own components.
---

When creating new components it is important to use the inbuilt functionality of the Design System. The components, grid system, variables and functions have been created to help to simplify this process. Using the inbuilt functionality ensures changes to the system and changes you make will naturally flow into your own custom components.

### Do the research first

If you are in the process of making a new component make sure it is something your user needs. Often times simple solutions are the most usable.

We like to ask these questions before making new components:

- Is it possible to use an exisiting component?
- Is it possible to meet this user need by customising an existing component?

If you can't use or modify an existing component we ask:

- Is it possible to use components that exist to make this (grid, buttons, responsive-media, body)?
- Can we build this component in a way that other products can benefit from it in the future?
- Is there research or discussion about similar patterns on the community?
- What functions and variables in core can I use in this component?

### Lets create a component

We are going to create a card component. So lets answer the questions above.

### Is it possible to use an existing component?

We could use `callout`; however, callout should be used for bringing attention to a piece of content. We need a solution that groups content together and the content inside it can be flexible.

### Is it possible to meet this user need by customising an existing component?

We could probably customise the `callout` component to meet this user need. However, it feels a bit confusing, cards are used for grouping and callouts are used for grouping text and highlighting it to a user. In this situation we will create the component but let the community know that `card` and `callout` are very similar but meet different user needs.

### Is it possible to use components that exist to make this?

For now we will be keeping it simple and not using any components. However, we will use the functionality from `core` and in the future we can add the `headings` for the card titles as a dependency.

### Can we build this component in a way that other products can benefit from it in the future?

Yes, we will be focusing on keeping this simple so we can share it with others.

## Customize a component

Each component in the design system is customisable, through its variables or with additional code.

The patterns below are the best practice way to modify and change the components. This approach tries to retain all the hard work that was put into the components for accessibility and browser support.

### Set up

It is recommended to not touch the generated ds-ltu.scss and import it into a main.scss file. You can import the ds-ltu.scss in the main.scss file like so:

`@import "./ds-ltu.scss";`

### Customise components with SASS variables

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

### Customise components with additional code

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