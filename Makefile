.PHONY: install test lint test-coverage check

install:
	npm install

test:
	npx jest

lint:
	npx eslint .

test-coverage:
	npx jest --coverage

check: lint test

help:
	@echo "Available commands:"
	@echo "  make install       - install dependencies"
	@echo "  make test          - run tests (npx jest)"
	@echo "  make lint          - run linter (npx eslint .)"
	@echo "  make test-coverage - run tests with coverage"
	@echo "  make check         - run linter and tests"
