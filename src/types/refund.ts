import { ResponseBase } from "./base";

export interface Options {
  /**
   * 欲退款的交易字串
   *
   * 任何一筆交易成功時皆會回傳
   */
  recTradeId: string;
  /**
   * 商戶定義的退款紀錄識別碼(需為半形的英數字)，不可重複
   *
   * 支援：玉山銀行
   */
  bankRefundId?: string;
  /**
   * 退款金額
   *
   * 全額退款可不用填此參數，部分退款才需要填
   * 外幣金額需包含兩位小數，如 100 代表 1.00
   */
  amount?: number;
  /**
   * 資料會加密保存，並在其他客製化需求時才解密做使用。
   */
  additionalData?: string;
}

export interface Response extends ResponseBase {
  /**
   * 退款紀錄的識別碼
   */
  refundId: string;
  /**
   * 銀行或錢包端於退款時回傳的退款編號
   *
   * 支援：悠遊付
   */
  bankREfundOrderNumber: string;
  /**
   * 退款金額
   *
   * 台幣以外金額為乘以 100 的值，如港幣(HKD) 1元，則值為 100
   */
  refundAmount: number;
  /**
   * 是否已請款
   */
  isCaptured: boolean;
  /**
   * 銀行回傳的交易結果代碼
   */
  bankResultCode: string;
  /**
   * 銀行回傳的交易結果訊息
   */
  bankResultMsg: string;
  /**
   * 貨幣種類(ISO 4217)
   */
  currency: string;
}
