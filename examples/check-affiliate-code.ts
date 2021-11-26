import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    // 使用 prime
    const options1 = {
      affiliateCodeName: "",
      prime: "",
    };

    // 使用 card token
    const options2 = {
      affiliateCodeName: "",
      cardKey: "089fb5a6f8127d3fcacd5f836f5244c4b256e69fc9ce73143b0b26e0ad362853",
      cardToken: "f7e3f7a308cba208d477eae03e20a257e44112ff33a9c5f1b3f7f6ada8836b16",
    };

    const response = await tappaySDK.checkAffiliateCode(options1);
    console.log(response);
  } catch (err) {
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
