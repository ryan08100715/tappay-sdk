import { ResponseBase } from "./base";

export interface Options {
  /**
   * 欲請款的交易字串
   *
   * 任何一筆交易成功時皆會回傳
   */
  recTradeId: string;
}

export interface Response extends ResponseBase {
  /**
   * 該交易將會被請款的時間
   */
  capMillis: number;
  /**
   * 貨幣種類(ISO 4217)
   */
  currency: string;
}
