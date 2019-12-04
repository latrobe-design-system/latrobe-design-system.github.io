---
title: Installation and setup
status: planned
info:
---

We have created a starter kit with templates that can get you up and running with the design system. You can view the live version or go to the starter kit GitHub repository to download the code.

The starter kit requires Node.js version 8 or higher. See the Node.js/npm installation guides if you require assistance installing node.

### 1. Download the starter kit

### 2. To install Jekyll**

1. Install Jekyll `gem install jekyll bundler`
2. If Ruby is not installed follow the instructions here: https://jekyllrb.com/docs/installation/
3. gem update github-pages


### 3. In terminal open this folder and run npm install. This will install dependencies necessary for the local development environment.

### 4. You can now start your local server by running npm run watch. This will check for file changes, when it occurs the server will build your site refresh the browser.


## How it works

<!-- In your directory you have a package.json file. This file points to dependencies that are installed when npm install is run. When you run npm install all of the design system components and additional packages related to the local development environment are added to the node_modules/ folder.

When the user runs npm run build or npm run watch we use node-sass to convert the src/sass/main.scss file into the docs/css/main.css file. Autoprefixer is run after compilation to add vendor prefixes to the main.css file. -->

This set up allows you to modify the variables in the design system file from the main.scss file. You can add your own colour scheme, or change the typography and spacing. Tweaks to the components or additional ones should be added below the import of _auds.scss in the main.scss file. Changes to these files will be injected into your browser so you don’t even need to refresh thanks to Browser Sync.

The docs folder contains all the files required to publish a website. The index.html file references the main.css file and script.min.js assets to generate the page. We name the folder docs because GitHub pages uses the docs folder to host static websites.

To start using other components you can copy paste the HTML code snippets from the documentation into the index.html or other html file that you may have created.

## Packages required for local development

Now that we are set up we can install additional packages:

- browser-sync, local development server that reloads the browser when a file changes
- node-sass, compiles SASS files into CSS files
- on-change, watches for changes to the files
- postcss-cli, library for transforming styles, used by autoprefixer
- autoprefixer, adds vendor prefixes to the CSS file automatically