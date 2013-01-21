test:
	@./node_modules/.bin/mocha\
		--reporter spec\
		test/path.js

test/built.js: test/path.js index.js
	@node_modules/.bin/sourcegraph.js test/browser.js\
		--plugins mocha,nodeish,javascript\
		 | node_modules/.bin/bigfile\
		 	--leave-paths\
		 	--export null\
		 	--plug nodeish > test/built.js

.PHONY: test