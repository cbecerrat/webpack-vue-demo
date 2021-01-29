#!/bin/bash
{ echo '<script>'; cat ./dist/bundle.js; echo -e '\n</script>'; } > ./dist/bundle.html
rm ./dist/bundle.js
sed -i 's/<script src="bundle.js"><\/script>/<?!=include("bundle")?>\n/g' ./dist/index.html