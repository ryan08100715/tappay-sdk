import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: types.Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      recTradeId: "D20211125tplFXk",
    };

    const response = await tapPaySDK.refund(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
