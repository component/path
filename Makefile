test:
	@./node_modules/.bin/mocha\
		--reporter spec\
		test/path.js

test/built.js: test/* index.js
	@node_modules/.bin/sourcegraph.js test/browser.js \
		--plugins mocha,nodeish \
		 | node_modules/.bin/bigfile.js \
		 	--export null \
		 	-p nodeish,javascript > test/built.js

.PHONY: test