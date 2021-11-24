import { ResponseBase } from "./base";

export interface UpdateCardholderOptions {
  /**
   * 卡片識別字串
   */
  cardToken: string;
  /**
   * 姓名
   */
  name?: number;
  /**
   * 手機號碼，可為 09 開頭的電話或是包含加號之 E.164 格式(“+886923456789”)
   */
  phoneNumber?: string;
  /**
   * 電子信箱
   */
  email?: string;
  /**
   * 郵遞區號
   */
  zipCode?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 身份證字號
   */
  nationalId?: string;
  /**
   * 持卡人或購買人會員編號
   *
   * 用於 TapPay 詐欺檢測、會員資料管理時使用。
   *
   * 支援 : Direct Pay
   */
  memberId?: string;
}

export interface UpdateCardholderResponse extends ResponseBase {
  /**
   * 卡片識別字串
   */
  cardToken: string;
  /**
   * 更新時間
   */
  updateMillis: number;
  /**
   * 此次修改後的持卡人或購買人的最新資訊
   */
  cardholder: {
    /**
     * 姓名
     */
    name: string;
    /**
     * 手機號碼
     */
    phoneNumber: string;
    /**
     * 電子信箱
     */
    email: string;
    /**
     * 郵遞區號
     */
    zipCode: string;
    /**
     * 地址
     */
    address: string;
    /**
     * 身份證字號
     */
    nationalId: string;
    /**
     * 持卡人或購買人會員編號
     *
     * 用於 TapPay 詐欺檢測、會員資料管理時使用。
     *
     * 支援 : Direct Pay
     */
    memberId: string;
  };
}
