import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      cardKey: "711dac48bf262cfe1ff56e12d00699c03bf19404ff54c1a1372bc96a0d121e67",
      cardToken: "fdd2b2badc849b1f6e8f618a15f7d842e9986346aef33366be333079791d525d",
    };

    const response = await tappaySDK.removeCard(options);
    console.log(response);
  } catch (err) {
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
