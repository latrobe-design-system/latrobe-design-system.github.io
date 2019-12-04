---
title: Create a new component
status: planned
info: Websites have different user needs and the Design System is constantly changing. To meet these user needs you may have to create your own components.
---

When creating new components it is important to use the inbuilt functionality of the Design System. The components, grid system, variables and functions have been created to help to simplify this process. Using the inbuilt functionality ensures changes to the system and changes you make will naturally flow into your own custom components.

## Do the research first

If you are in the process of making a new component make sure it is something your user needs. Often times simple solutions are the most usable.

We like to ask these questions before making new components:

- Is it possible to use an exisiting component?
- Is it possible to meet this user need by customising an existing component?

If you can't use or modify an existing component we ask:

- Is it possible to use components that exist to make this (grid, buttons, responsive-media, body)?
- Can we build this component in a way that other products can benefit from it in the future?
- Is there research or discussion about similar patterns on the community?
- What functions and variables in core can I use in this component?

## Lets create a component

We are going to create a card component. So lets answer the questions above.

### Is it possible to use an existing component?

We could use `callout`; however, callout should be used for bringing attention to a piece of content. We need a solution that groups content together and the content inside it can be flexible.

### Is it possible to meet this user need by customising an existing component?

We could probably customise the `callout` component to meet this user need. However, it feels a bit confusing, cards are used for grouping and callouts are used for grouping text and highlighting it to a user. In this situation we will create the component but let the community know that `card` and `callout` are very similar but meet different user needs.

### Is it possible to use components that exist to make this?

For now we will be keeping it simple and not using any components. However, we will use the functionality from `core` and in the future we can add the `headings` for the card titles as a dependency.

### Can we build this component in a way that other products can benefit from it in the future?

Yes, we will be focusing on keeping this simple so we can share it with others.

## Submitting your component pull request