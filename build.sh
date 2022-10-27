echo "cleaning"
rm -r .parcel-cache
rm -r dist

echo "bundling"
./node_modules/.bin/esbuild src/components/bundle.mjs --bundle --minify --sourcemap --outfile=src/component_build/index.js 





echo "building"
# parcel build ./src --no-cache --no-source-maps
NODE_ENV=development parcel ./src --port 7000


