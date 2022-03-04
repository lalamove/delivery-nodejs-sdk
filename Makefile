build:
	npm install
	npm run build

test:
	make build
	mkdir testing && cd testing && npm init -y && npm install ..

clean:
	rm -R testing

format:
	npx prettier --write ./src
	npm run lint ./src/**/*.ts