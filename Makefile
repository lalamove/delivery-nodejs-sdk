build:
	npm install
	npm run build

test:
	make build
	mkdir testing && cd testing && npm init -y && npm install ..

clean:
	rm -R testing


