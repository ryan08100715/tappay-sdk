import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import * as types from "./types";

export class TapPaySDK {
  private env: types.Environment;
  private partnerKey: string;

  constructor(options: types.ConstructorOption) {
    this.env = options.env;
    this.partnerKey = options.partnerKey;
  }

  /**
   * 使用 prime 進行付款
   *
   * @param options 相關參數
   */
  public payByPrime(options: types.payByPrime.MerchantIdOptions): Promise<types.payByPrime.Response>;
  public payByPrime(options: types.payByPrime.MerchantGroupIdOptions): Promise<types.payByPrime.Response>;
  public payByPrime(options: types.payByPrime.Options): Promise<types.payByPrime.Response> {
    const requestPath = "/tpc/payment/pay-by-prime";

    return this.request(requestPath, options);
  }

  /**
   * 使用 card token 進行付款
   *
   * @param options 相關參數
   */
  public payByCardToken(options: types.payByCardToken.MerchantIdOptions): Promise<types.payByCardToken.Response>;
  public payByCardToken(options: types.payByCardToken.MerchantGroupIdOptions): Promise<types.payByCardToken.Response>;
  public payByCardToken(options: types.payByCardToken.Options): Promise<types.payByCardToken.Response> {
    const requestPath = "/tpc/payment/pay-by-token";

    return this.request(requestPath, options);
  }

  /**
   * 產出 barcode 資料
   *
   * @param options 相關參數
   */
  public async getBarcode(options: types.getBarcode.Options): Promise<types.getBarcode.Response> {
    const requestPath = "/tpc/direct-pay/get-barcode";

    return this.request(requestPath, options);
  }

  /**
   * 使用 barcode 進行付款
   *
   * @param options 相關參數
   */
  public payByBarcode(options: types.payByBarcode.MerchantIdOptions): Promise<types.payByBarcode.Response>;
  public payByBarcode(options: types.payByBarcode.MerchantGroupIdOptions): Promise<types.payByBarcode.Response>;
  public payByBarcode(options: types.payByBarcode.Options): Promise<types.payByBarcode.Response> {
    const requestPath = "/tpc/payment/pay-by-barcode";

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
   * 取消請款的請求
   *
   * @param options 相關參數
   */
  public capCancel(options: types.capCancel.Options): Promise<types.capCancel.Response> {
    const requestPath = "/tpc/transaction/cap/cancel";

    return this.request(requestPath, options);
  }

  /**
   * 退款
   *
   * @param options 相關參數
   */
  public refund(options: types.refund.Options): Promise<types.refund.Response> {
    const requestPath = "/tpc/transaction/refund";

    return this.request(requestPath, options);
  }

  /**
   * 取消退款的請求
   *
   * @param options 相關參數
   */
  public refundCancel(options: types.refundCancel.Options): Promise<types.refundCancel.Response> {
    const requestPath = "/tpc/transaction/refund/cancel";

    return this.request(requestPath, options);
  }

  /**
   * 取得會員目前已綁定的卡片資料
   *
   * @param options 相關參數
   */
  public getMemberCard(options: types.getMemberCard.Options): Promise<types.getMemberCard.Response> {
    const requestPath = "/tpc/direct-pay/get-member-card";

    return this.request(requestPath, options);
  }

  /**
   * 綁定卡片
   *
   * @param options 相關參數
   */
  public bindCard(options: types.bindCard.MerchantIdOptions): Promise<types.bindCard.Response>;
  public bindCard(options: types.bindCard.MerchantGroupIdOptions): Promise<types.bindCard.Response>;
  public bindCard(options: types.bindCard.Options): Promise<types.bindCard.Response> {
    const requestPath = "/tpc/card/bind";

    return this.request(requestPath, options);
  }

  /**
   * 移除已綁定的卡片
   *
   * @param options 相關參數
   */
  public removeCard(options: types.removeCard.Options): Promise<types.removeCard.Response> {
    const requestPath = "/tpc/card/remove";

    return this.request(requestPath, options);
  }

  /**
   * 查詢交易紀錄
   *
   * @param options 相關參數
   */
  public record(options: types.record.Options): Promise<types.record.Response> {
    const requestPath = "/tpc/transaction/query";

    return this.request(requestPath, options);
  }

  /**
   * 查詢該筆交易的詳細狀態
   *
   * @param options 相關參數
   */
  public tradeHistory(options: types.tradeHistory.Options): Promise<types.tradeHistory.Response> {
    const requestPath = "/tpc/transaction/trade-history";

    return this.request(requestPath, options);
  }

  /**
   * 查詢請退款後的結果
   *
   * @param options 相關參數
   */
  public reconciliation(options: types.reconciliation.Options): Promise<types.reconciliation.Response> {
    const requestPath = "/tpc/transaction/reconciliation";

    return this.request(requestPath, options);
  }

  /**
   * 取得卡片詳細資料
   *
   * @param options 相關參數
   */
  public cardMetadata(options: types.cardMetadata.Options): Promise<types.cardMetadata.Response> {
    const requestPath = "/tpc/card/metadata";

    return this.request(requestPath, options);
  }

  /**
   * 更新已綁定的持卡人資訊
   *
   * @param options 相關參數
   */
  public async updateCardholder(options: types.updateCardholder.Options): Promise<types.updateCardholder.Response> {
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
  private async request<T>(path: string, options: Record<string, any>): Promise<T> {
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
    if (this.env === types.Environment.Prod) {
      return "https://prod.tappaysdk.com";
    } else {
      return "https://sandbox.tappaysdk.com";
    }
  }
}
