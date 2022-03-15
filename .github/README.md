## Lalamove's Delivery SDK

Prerequisites:

1. NodeJs
2. NPM
3. Typescript

**To install the dependencies and build the SDK run `make build`**

**To test the SDK locally:**

1. Run `make test`
2. Now you should be able to import the SDK to your Nodejs files in `/testing` directory (ex. `const delivery_sdk = require('delivery-nodejs-sdk');`)

**To format code and show the styling problems run `make format`**

**To publish to NPM registry:**

1. Login to NPM registry from terminal
2. Run `npm version patch`
3. Run `npm publish`