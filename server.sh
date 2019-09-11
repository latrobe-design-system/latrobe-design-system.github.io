#!/bin/bash

echo -e "\033[0;32mStarting sass watch and jekyll server...\033[0m"

sass --watch --style=compressed src/assets/_sass:src/assets/css & bundle exec jekyll serve && fg
