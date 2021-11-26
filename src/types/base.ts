export interface ResponseBase {
  /**
   * 交易代碼，成功的話為0
   */
  status: number;
  /**
   * 錯誤訊息
   */
  msg: string;
}

export interface Card {
  /**
   * 卡片前六碼。
   */
  binCode: string;
  /**
   * 卡片後四碼。
   */
  lastFour: string;
  /**
   * 發卡銀行。
   */
  issuer: string;
  /**
   * 發卡銀行中文名稱。
   */
  issuerZhTw: string;
  /**
   * 發卡銀行代碼。
   */
  bankId: string;
  /**
   * 卡片類別
   *
   * - -1 = Unknown
   * - 0 = 信用卡 (Credit Card)
   * - 1 = 簽帳卡 (Debit Card)
   * - 2 = 預付卡 (Prepaid Card)
   */
  funding: number;
  /**
   * 卡片種類
   *
   * - -1 = Unknown
   * - 1 = VISA
   * - 2 = MasterCard
   * - 3 = JCB
   * - 4 = Union Pay
   * - 5 = AMEX
   */
  type: number;
  /**
   * 卡片等級
   */
  level: string;
  /**
   * 發卡行國家
   */
  country: string;
  /**
   * 發卡行國家碼
   */
  countryCode: string;
  /**
   * 卡片到期時間
   *
   * 格式: YYYYMM
   *
   * 不支援: Apple Pay、Google Pay、LINE Pay、Samsung Pay
   */
  expiryDate?: string;
}
