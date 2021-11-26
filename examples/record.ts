import { TapPaySDK, Environment } from "../src";

const tappaySDK = new TapPaySDK({
  env: Environment.Sandbox,
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
    console.log("發生錯誤：");
    console.log(err);
  }
}
main();
