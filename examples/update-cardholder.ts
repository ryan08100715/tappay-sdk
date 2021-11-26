import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      cardToken: "f7e3f7a308cba208d477eae03e20a257e44112ff33a9c5f1b3f7f6ada8836b16",
      name: "username",
    };

    const response = await tappaySDK.updateCardholder(options);
    console.log(response);
  } catch (err) {
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
