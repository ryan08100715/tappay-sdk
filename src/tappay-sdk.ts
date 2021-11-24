import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import { Environment, ConstructorOption } from "./tappay-sdk-types";
import { GetBarcodeOptions, GetBarcodeResponse } from "./types/get-barcode";
import {
  UpdateCardholderOptions,
  UpdateCardholderResponse,
} from "./types/update-cardholder";
import {
  CheckAffiliateCodeByPrimeOptions,
  CheckAffiliateCodeByCardTokenOptions,
  CheckAffiliateCodeOptions,
  CheckAffiliateCodeResponse,
} from "./types/check-affiliate-code";

export class TapPaySDK {
  private env: Environment;
  private partnerKey: string;

  constructor(options: ConstructorOption) {
    this.env = options.env;
    this.partnerKey = options.partnerKey;
  }

  public payByPrime() {}

  public payByCardToken() {}

  public refund() {}

  public record() {}

  public capToday() {}

  public bindCard() {}

  public removeCard() {}

  public tradeHistory() {}

  public reconciliation() {}

  public refundCancel() {}

  public capCancel() {}

  public cardMetadata() {}

  public getMemberCard() {}

  public async getBarcode(
    options: GetBarcodeOptions
  ): Promise<GetBarcodeResponse> {
    const requestPath = "/tpc/direct-pay/get-barcode";
    const requestBody = Object.assign({}, options, {
      partnerKey: this.partnerKey,
    });

    return this.request(requestPath, requestBody);
  }

  public payByBarcode() {}

  public async updateCardholder(
    options: UpdateCardholderOptions
  ): Promise<UpdateCardholderResponse> {
    const requestPath = "/tpc/card/update-cardholder";
    const requestBody = Object.assign({}, options, {
      partnerKey: this.partnerKey,
    });

    return this.request(requestPath, requestBody);
  }

  public checkAffiliateCode(
    options: CheckAffiliateCodeByPrimeOptions
  ): Promise<CheckAffiliateCodeResponse>;
  public checkAffiliateCode(
    options: CheckAffiliateCodeByCardTokenOptions
  ): Promise<CheckAffiliateCodeResponse>;
  public checkAffiliateCode(
    options: CheckAffiliateCodeOptions
  ): Promise<CheckAffiliateCodeResponse> {
    const requestPath = "/tpc/affiliate-code/check";
    const requestBody = Object.assign({}, options, {
      partnerKey: this.partnerKey,
    });

    return this.request(requestPath, requestBody);
  }

  private async request(
    path: string,
    body: { [key: string]: any }
  ): Promise<any> {
    const requestUrl = this.getServerUrl() + path;
    const requestBody = snakecaseKeys(body, { deep: true });

    const response = await axios({
      url: requestUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.partnerKey,
      },
      data: requestBody,
      timeout: 30000,
    });

    const responseBody = camelcaseKeys(response.data, { deep: true });

    return responseBody;
  }

  private getServerUrl(): string {
    if (this.env === Environment.Prod) {
      return "https://prod.tappaysdk.com";
    } else {
      return "https://sandbox.tappaysdk.com";
    }
  }
}
