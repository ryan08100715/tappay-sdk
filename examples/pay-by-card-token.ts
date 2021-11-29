import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: types.Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      cardKey: "21872b4dd1d36f636f7ee94a3b72abb9a0a09630de447e8c8f00607df0094c8c",
      cardToken: "c07de2942b785fc1cff403c6fbaffc0220ee41d3a18cf18d3c95d8a0a1a8be77",
      merchantId: process.env.MERCHANT_ID!,
      amount: 100,
      currency: "TWD",
      details: "測試商品",
    };

    const response = await tapPaySDK.payByCardToken(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
