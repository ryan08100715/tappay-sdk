import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: "sandbox",
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      recTradeId: "D202111258vvy3O",
    };

    const response = await tapPaySDK.tradeHistory(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
