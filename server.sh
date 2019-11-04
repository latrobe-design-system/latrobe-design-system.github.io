#!/bin/bash

echo -e "\033[0;32mStarting sass watch and jekyll server...\033[0m"

sass --watch --style=compressed _ltu-patterns/assets/_sass:_ltu-patterns/assets/css & bundle exec jekyll serve
