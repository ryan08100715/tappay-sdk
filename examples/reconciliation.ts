import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: "sandbox",
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      startTimeMillis: 1637809055173,
      endTimeMillis: 1637811668000,
      transactionActions: ["CAPTURE", "REFUND"],
    };

    const response = await tapPaySDK.reconciliation(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
