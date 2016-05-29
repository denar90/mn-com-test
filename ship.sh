#!/bin/bash
set -o pipefail

bower i && \
npm run compile-all && \
cp CNAME dist
cd dist && \
git init && \
git add . && \
git commit -m "deploy" && \
git remote add origin git@github.com/denar90/mn-com-test.git && \
git push -f origin master:gh-pages && \
rm -rf .git && \
cd ..
