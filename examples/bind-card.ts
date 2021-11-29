import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: "sandbox",
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      prime: "test_3a2fb2b7e892b914a03c95dd4dd5dc7970c908df67a49527c0a648b2bc9",
      merchantId: process.env.MERCHANT_ID!,
      currency: "TWD",
      cardholder: {
        phoneNumber: "0909123456",
        name: "test",
        email: "test@test.com",
        memberId: "member1",
      },
    };

    const response = await tapPaySDK.bindCard(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
