#!/bin/sh
s3cmd sync \
--exclude '.DS_Store' \
--exclude '.git/*' \
--exclude 'deploy.sh' \
--exclude '.gitignore' \
--exclude '.idea/*' \
--add-header=Expires:max-age=604800 ./ \
s3://cjt-w205