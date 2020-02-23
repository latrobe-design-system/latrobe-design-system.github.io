#!/bin/bash

echo -e "\033[0;32mStarting sass watch and jekyll server...\033[0m"

sass --watch --style=compressed _ltu-components/src/main.scss:_ltu-components/dist/css/main.css & bundle exec jekyll serve
