import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      startTimeMillis: 1637809055173,
      endTimeMillis: 1637811668000,
      transactionActions: ["CAPTURE", "REFUND"],
    };

    const response = await tappaySDK.reconciliation(options);
    console.log(response);
  } catch (err) {
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
