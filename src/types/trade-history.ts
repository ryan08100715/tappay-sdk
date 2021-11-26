import { ResponseBase, Card } from "./base";

export interface TradeHistoryOptions {
  /**
   * 欲請款的交易字串
   *
   * 任何一筆交易成功時皆會回傳
   */
  recTradeId: string;
}

export interface TradeHistoryResponse extends ResponseBase {
  /**
   * 欲請款的交易字串
   *
   * 任何一筆交易成功時皆會回傳
   */
  recTradeId: string;
  /**
   * 銀行或錢包端於授權時回傳的訂單編號
   *
   * 支援：悠遊付
   *
   * 各支援銀行或錢包回傳長度限制
   */
  bankOrderNumber: string;
  /**
   * 貨幣種類(ISO 4217)
   */
  currency: string;
  tradeHistory: {
    amount: string;
    action: string;
    millis: number;
    success: boolean;
    bankTransactionMillis: number;
    canRefundCancelMillis: number;
    refundId: string;
    bankRefundOrderNumber: string;
    bankRefundId: string;
    isPending: boolean;
    bankResultCode: string;
    bankResultMsg: string;
  }[];
}
