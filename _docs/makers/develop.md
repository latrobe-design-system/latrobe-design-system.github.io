---
status: draft
menu: 3

title: "Developers"
text: "How to use the design system to create and update components"
---

## Setup local development environment

These instructions are for the Design System development team.

### Install build tools
1. Install Ruby (if required) 
2. Install Jekyll https://jekyllrb.com/docs/installation/ **Local install is best**
3. Install node js and npm https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
for MACOS you can use hombrew - https://treehouse.github.io/installation-guides/mac/node-mac.html

### Clone DS github repo
https://github.com/latrobe-design-system/latrobe-design-system.github.io

### Run local
1. In terminal run - npm start


## How to use

_ltu-components folders is where components live.

dist folder contains the CSS and JS compiled (by gulp) from the CSS and JS in the src folder as well as required static files - starter template, fonts, images.

src directory contains all the component code.

build components here.

Make use  of SCSS variables, mixins and functions to ensure consistency of layout and look and feel.

Vertical spacing is determined by top margins. Make use of spunits function for sizes, padding and margins to achieve 0.25rem grid.
