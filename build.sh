#!/bin/bash

#compile CSS for website
echo -e "\033[0;32mCompile sass...\033[0m"
sass --style=compressed _ltu-patterns/src/main.scss:_ltu-patterns/dist/css/main.css

#build site
echo -e "\033[0;32mBuilding site...\033[0m"
bundle exec jekyll build

#copy generated js file to dist/js
echo -e "\033[0;32mCopying generated js file...\033[0m"
cp -R ./_site/js/ds-ltu.js ./_ltu-patterns/dist/js
