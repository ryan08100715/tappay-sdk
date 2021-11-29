import { TapPaySDK, types } from "../src";

const tapPaySDK = new TapPaySDK({
  env: "sandbox",
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      memberId: "member1",
    };

    const response = await tapPaySDK.getMemberCard(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
