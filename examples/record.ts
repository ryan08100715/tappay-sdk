import { TapPaySDK, types } from "../src";

const tappaySDK = new TapPaySDK({
  env: "sandbox",
  partnerKey: process.env.PARTNER_KEY!,
});

async function main() {
  try {
    const options = {
      filters: {
        time: {
          startTime: 1637809055173,
          endTime: 1637811055173,
        },
      },
    };

    const response = await tappaySDK.record(options);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
main();
