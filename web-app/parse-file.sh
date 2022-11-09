cd ../static

cat response.json| jq '.numpy' > response.html

