import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
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

    const response = await tappaySDK.bindCard(options);
    console.log(response);
  } catch (err) {
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
