test:
	@./node_modules/.bin/mocha \
		--reporter spec

test/built.js: test/path.js index.js
	@./node_modules/.bin/bigfile -e test/browser.js -w test/built.js

.PHONY: test