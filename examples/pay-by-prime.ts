import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: types.Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      prime: "test_3a2fb2b7e892b914a03c95dd4dd5dc7970c908df67a49527c0a648b2bc9",
      merchantId: process.env.MERCHANT_ID!,
      amount: 100,
      details: "測試商品",
      cardholder: {
        phoneNumber: "0909123456",
        name: "test",
        email: "test@test.com",
      },
      remember: true,
    };

    const response = await tapPaySDK.payByPrime(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
