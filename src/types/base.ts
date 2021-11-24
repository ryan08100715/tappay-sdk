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
