import { ResponseBase } from "./base";

export interface Options {
  /**
   * 欲取消退款的交易字串
   *
   * 任何一筆交易成功時皆會回傳
   */
  recTradeId: string;
  /**
   * 退款取得的退款識別碼
   */
  refundId?: string;
}

export interface Response extends ResponseBase {
  /**
   * 幣別
   */
  currency: string;
  /**
   * 由 TapPay 伺服器產生的交易字串
   */
  recTradeId: string;
  result: {
    /**
     * 取消退款成功或失敗
     */
    success: boolean;
    /**
     * 退款動作取得的退款識別碼
     */
    refundId: string;
    /**
     * 取消退款的金額
     */
    amount: number;
    /**
     * 銀行回傳的交易結果代碼
     */
    bankResultCode: string;
    /**
     * 銀行回傳的交易結果訊息
     */
    bankResultMsg: string;
  };
}
