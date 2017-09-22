#!/bin/sh

aws s3 sync . s3://vihinen.net/ --delete --exclude="*.git/*"
