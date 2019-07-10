#!/bin/bash

#compile css for website
echo -e "\033[0;32mCompile sass...\033[0m"
sass --style=compressed ltucss/_sass:ltucss/css

#build Site
echo -e "\033[0;32mBuilding site...\033[0m"
jekyll build
