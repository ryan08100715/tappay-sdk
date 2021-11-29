# TapPay SDK

TapPay Backend SDK

## Required

- Node >= 10

## Install

```
npm install --save tappay-sdk
```

## Getting started

```javascript
// ESM/TypeScript import
import { TapPaySDK } from "tappay-sdk";
// or Node.js require
const { TapPaySDK } = require("tappay-sdk");

const tapPaySDK = new TapPaySDK({
  env: "sandbox", // "sandbox" or "prod"
  partnerKey: "partnerKey",
});

// pay by prime options
const options = {
  prime: "test_3a2fb2b7e892b914a03c95dd4dd5dc7970c908df67a49527c0a648b2bc9",
  merchantId: "merchant id",
  amount: 100,
  details: "test item",
  cardholder: {
    phoneNumber: "0909123456",
    name: "test",
    email: "test@test.com",
  },
  remember: true,
};

const response = await tapPaySDK.payByPrime(options);
console.log(response);
```

## Examples

see: [examples](/exmaples)
