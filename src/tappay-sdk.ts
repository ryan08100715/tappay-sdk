import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import { Environment, ConstructorOption } from "./tappay-sdk-types";
import * as types from "./types";
import { BindCardByMerchantIdOptions, BindCardByMerchantGroupIdOptions, BindCardOptions, BindCardResponse } from "./types/bind-card";
import { RemoveCardOptions, RemoveCardResponse } from "./types/remove-card";
import { CardMetadataOptions, CardMetadataResponse } from "./types/card-metadata";
import { GetMemberCardOptions, GetMemberCardResponse } from "./types/get-member-card";
import { GetBarcodeOptions, GetBarcodeResponse } from "./types/get-barcode";
import { UpdateCardholderOptions, UpdateCardholderResponse } from "./types/update-cardholder";

export class TapPaySDK {
  private env: Environment;
  private partnerKey: string;

  constructor(options: ConstructorOption) {
    this.env = options.env;
    this.partnerKey = options.partnerKey;
  }

  /**
   * 使用 prime 進行付款
   *
   * @param options 相關參數
   */
  public payByPrime(options: any): Promise<any> {
    const requestPath = "/tpc/payment/pay-by-prime";

    return this.request(requestPath, options);
  }

  /**
   * 使用 card token 進行付款
   *
   * @param options 相關參數
   */
  public payByCardToken(options: any): Promise<any> {
    const requestPath = "/tpc/payment/pay-by-token";

    return this.request(requestPath, options);
  }

  /**
   * 退款
   *
   * @param options 相關參數
   */
  public refund(options: any): Promise<any> {
    const requestPath = "/tpc/transaction/refund";

    return this.request(requestPath, options);
  }

  /**
   * 查詢交易紀錄
   *
   * @param options 相關參數
   */
  public record(options: any): Promise<any> {
    const requestPath = "/tpc/transaction/query";

    return this.request(requestPath, options);
  }

  /**
   * 請款
   *
   * @param options 相關參數
   */
  public capToday(options: types.capToday.Options): Promise<types.capToday.Response> {
    const requestPath = "/tpc/transaction/cap";

    return this.request(requestPath, options);
  }

  /**
   * 綁定卡片
   *
   * @param options 相關參數
   */
  public bindCard(options: BindCardByMerchantIdOptions): Promise<BindCardResponse>;
  public bindCard(options: BindCardByMerchantGroupIdOptions): Promise<BindCardResponse>;
  public bindCard(options: BindCardOptions): Promise<BindCardResponse> {
    const requestPath = "/tpc/card/bind";

    return this.request(requestPath, options);
  }

  /**
   * 移除已綁定的卡片
   *
   * @param options 相關參數
   */
  public removeCard(options: RemoveCardOptions): Promise<RemoveCardResponse> {
    const requestPath = "/tpc/card/remove";

    return this.request(requestPath, options);
  }

  /**
   * 查詢該筆交易的詳細狀態
   *
   * @param options 相關參數
   */
  public tradeHistory(options: any): Promise<any> {
    const requestPath = "/tpc/transaction/trade-history";

    return this.request(requestPath, options);
  }

  /**
   * 查詢請退款後的結果
   *
   * @param options 相關參數
   */
  public reconciliation(options: any): Promise<any> {
    const requestPath = "/tpc/transaction/reconciliation";

    return this.request(requestPath, options);
  }

  /**
   * 取消退款的請求
   *
   * @param options 相關參數
   */
  public refundCancel(options: any): Promise<any> {
    const requestPath = "/tpc/transaction/refund/cancel";

    return this.request(requestPath, options);
  }

  /**
   * 取消請款的請求
   *
   * @param options 相關參數
   */
  public capCancel(options: any): Promise<any> {
    const requestPath = "/tpc/transaction/cap/cancel";

    return this.request(requestPath, options);
  }

  /**
   * 取得卡片詳細資料
   *
   * @param options 相關參數
   */
  public cardMetadata(options: CardMetadataOptions): Promise<CardMetadataResponse> {
    const requestPath = "/tpc/card/metadata";

    return this.request(requestPath, options);
  }

  /**
   * 取得會員目前已綁定的卡片資料
   *
   * @param options 相關參數
   */
  public getMemberCard(options: GetMemberCardOptions): Promise<GetMemberCardResponse> {
    const requestPath = "/tpc/direct-pay/get-member-card";

    return this.request(requestPath, options);
  }

  /**
   * 產出 barcode 資料
   *
   * @param options 相關參數
   */
  public async getBarcode(options: GetBarcodeOptions): Promise<GetBarcodeResponse> {
    const requestPath = "/tpc/direct-pay/get-barcode";

    return this.request(requestPath, options);
  }

  /**
   * 使用 barcode 進行付款
   *
   * @param options 相關參數
   */
  public payByBarcode(options: any): Promise<any> {
    const requestPath = "/tpc/payment/pay-by-barcode";

    return this.request(requestPath, options);
  }

  /**
   * 更新已綁定的持卡人資訊
   *
   * @param options 相關參數
   */
  public async updateCardholder(options: UpdateCardholderOptions): Promise<UpdateCardholderResponse> {
    const requestPath = "/tpc/card/update-cardholder";

    return this.request(requestPath, options);
  }

  /**
   * 檢查 prime 或 card token 是否隸屬於某個聯名卡
   *
   * @param options 相關參數
   */
  public checkAffiliateCode(options: types.checkAffiliateCode.PrimeOptions): Promise<types.checkAffiliateCode.Response>;
  public checkAffiliateCode(options: types.checkAffiliateCode.CardTokenOptions): Promise<types.checkAffiliateCode.Response>;
  public checkAffiliateCode(options: types.checkAffiliateCode.Options): Promise<types.checkAffiliateCode.Response> {
    const requestPath = "/tpc/affiliate-code/check";

    return this.request(requestPath, options);
  }

  /**
   * 發送請求
   *
   * @param path 請求路徑(不包含host)
   * @param options 請求參數
   */
  private async request<T>(path: string, options: { [key: string]: any }): Promise<T> {
    const requestUrl = this.getServerUrl() + path;
    const body = Object.assign({}, options, {
      partnerKey: this.partnerKey,
    });
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

  /**
   * 取得請求 host
   */
  private getServerUrl(): string {
    if (this.env === Environment.Prod) {
      return "https://prod.tappaysdk.com";
    } else {
      return "https://sandbox.tappaysdk.com";
    }
  }
}
