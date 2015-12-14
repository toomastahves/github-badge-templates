REPORTER = spec
test:
	@$(MAKE) lint
	@NODE_ENV=test ./node_modules/.bin/mocha -b --reporter $(REPORTER) --recursive

lint:
	./node_modules/.bin/jshint ./public ./test ./index.js

test-cov:
	$(MAKE) lint
	@NODE_ENV=test ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha -- -R spec

test-codecov.io:
	@NODE_ENV=test ./node_modules/.bin/istanbul cover \
	./node_modules/mocha/bin/_mocha -- -R spec && \
		cat ./coverage/coverage.json | ./bin/codecov.io.js --verbose
