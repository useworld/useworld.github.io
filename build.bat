@echo off
cd _site
git add .
git commit -a -m 'blog'
git push
cd ..
