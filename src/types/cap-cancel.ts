import { ResponseBase } from "./base";

export interface Options {
  /**
   * 欲取消請款的交易字串
   *
   * 任何一筆交易成功時皆會回傳
   */
  recTradeId: string;
}

export interface Response extends ResponseBase {
  /**
   * 幣別
   */
  currency: string;
  /**
   * 由 TapPay 伺服器產生的交易字串
   */
  recTradeId: number;
}
