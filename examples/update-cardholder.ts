import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: "sandbox",
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      cardToken: "f7e3f7a308cba208d477eae03e20a257e44112ff33a9c5f1b3f7f6ada8836b16",
      name: "username",
    };

    const response = await tapPaySDK.updateCardholder(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
