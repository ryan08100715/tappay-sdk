import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      barcode: "7LC2xjydgsYHLAb",
      merchantId: process.env.MERCHANT_ID!,
      amount: 100,
      currency: "TWD",
      details: "測試商品",
    };

    const response = await tappaySDK.payByBarcode(options);
    console.log(response);
  } catch (err) {
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
