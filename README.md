## Lalamove's Delivery SDK

To install the dependencies run `npm install`

To build the SDK run `npm run build`

To test the SDK locally:

1. Make sure you have built the SDK
2. Run `mkdir testing` in project root
3. Run `cd testing`
4. Run `npm init -y`
5. Run `npm install ..`
6. Now you should be able to import the SDK to your Nodejs files in `/testing` directory (ex. `const delivery_sdk = require('delivery-nodejs-sdk');`)
