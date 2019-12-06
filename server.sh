#!/bin/bash

echo -e "\033[0;32mStarting sass watch and jekyll server...\033[0m"

sass --watch --style=compressed _ltu-patterns/packages/main.scss:_ltu-patterns/css/main.css & bundle exec jekyll serve
