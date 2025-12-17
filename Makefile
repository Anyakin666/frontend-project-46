.PHONY: install test lint test-coverage check

install:
	npm install

test:
	npm test

lint:
	npm run lint

test-coverage:
	npm run test-coverage

check: lint test

help:
	@echo "Доступные команды:"
	@echo "  make install       - установить зависимости"
	@echo "  make test          - запустить тесты"
	@echo "  make lint          - запустить линтер"
	@echo "  make test-coverage - запустить тесты с покрытием"
	@echo "  make check         - запустить линтер и тесты"
