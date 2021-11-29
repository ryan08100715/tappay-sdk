import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: types.Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options: any = {
      barcode: "hq0ehbRYpeD13xb",
      merchantId: process.env.MERCHANT_ID!,
      amount: 100,
      currency: "TWD",
      details: "測試商品",
      redeem: true,
      merchantdiseDetails: {
        noRebateAmount: 10,
      },
    };

    const response = await tapPaySDK.payByBarcode(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
