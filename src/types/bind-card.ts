import { ResponseBase, Card } from "./base";

interface BindCardBaseOptions {
  /**
   * 用卡號所換得的字串
   *
   * 由 createToken 成功時回傳
   */
  prime: string;
  /**
   * 貨幣種類
   */
  currency: string;
  /**
   * 是否開啟 3D 驗證
   *
   * 預設為 false
   */
  threeDomainSecure?: boolean;
  /**
   * 使用 LINE Pay, 悠遊付或 three_domain_secure 為 true 時必填
   */
  resultUrl?: {
    /**
     * 使用 LINE Pay、街口支付、悠遊付或者 3D 驗證交易時，
     * 當消費者在 LINE Pay、街口支付、悠遊付或 3D 驗證完成交易程序後，導轉回到商戶網頁前端的交易結果頁面 URL。
     *
     * 必須以 https 開頭
     */
    frontendRedirectUrl?: string;
    /**
     * 商戶 Server 接收交易結果的 URL
     *
     * 必須以 https 開頭，僅支援 443 port。
     */
    backendNotifyUrl?: string;
    /**
     * 3D 驗證交易時，當消費者因不當操作而被導到 TapPay Error 頁面時，頁面上「Go back」按鈕連結。
     */
    goBackUrl?: string;
  };
  cardholder: {
    /**
     * 手機號碼
     *
     * 可為 09 開頭的電話或是包含加號之 E.164 格式(“+886923456789”)
     */
    phoneNumber: string;
    /**
     * 姓名
     */
    name: string;
    /**
     * 電子信箱
     */
    email: string;
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
    /**
     * 持卡人或購買人編號
     *
     * 屬於商戶與銀行或是錢包串接方交換或約定之消費者編號。
     *
     * 當使用此 API 執行悠遊付錢包綁定時，此欄位為必填。
     *
     * 支援：悠遊付
     */
    bankMemberId?: string;
  };
  /**
   * 身份驗證欄位
   */
  cardholderVerify?: {
    /**
     * 是否驗證電話號碼
     */
    phoneNumber?: boolean;
    /**
     * 是否驗證身分證字號
     */
    nationalId?: string;
  };
  /**
   * 此欄位請填入僅供身份驗證，無授權功能的merchant ID。
   *
   * 支援銀行：財團法人聯合信用卡處理中心
   *
   * 支援產業：電支產業/ 產壽險業
   */
  kycVerificationMerchantId?: string;
}

export interface BindCardByMerchantIdOptions extends BindCardBaseOptions {
  /**
   * 於 Portal 登錄商家時所產生的識別碼
   */
  merchantId: string;
}

export interface BindCardByMerchantGroupIdOptions extends BindCardBaseOptions {
  /**
   * 於 Portal 設置的商家管理設置，交易時會依據 portal 的支付配置進行交易不可與 merchant_id 同時使用
   */
  merchantGroupId: string;
}

export type BindCardOptions = BindCardByMerchantIdOptions | BindCardByMerchantGroupIdOptions;

export interface BindCardResponse extends ResponseBase {
  /**
   * 交易識別碼
   */
  recTradeId: string;
  /**
   * 銀行端的訂單編號。
   */
  orderId: string;
  /**
   * 貨幣種類
   *
   * 不支援: LINE Pay, JKOPAY, 悠遊付
   */
  currency: string;
  /**
   * 銀行授權碼。
   *
   * 不支援: LINE Pay, JKOPAY, 悠遊付
   */
  authCode: string;
  /**
   * 於 Portal 登錄商家時所產生的識別碼
   */
  merchantId: string;
  /**
   * 收單銀行/金流處理器
   */
  acquirer: string;
  /**
   * 卡片保管資訊。
   *
   * 透過 LINE Pay 獲得的 card key 與 card token，若在 180 天內無成功交易，將會過期導致交易失敗。
   *
   * 不支援:Apple Pay, Google Pay, Samsung Pay, JKOPAY, 悠遊付
   */
  cardSecret: {
    /**
     * 卡片識別字串
     */
    cardToken: string;
    /**
     * 卡片安全金鑰
     */
    cardKey: string;
  };
  /**
   * 卡片資訊。
   *
   * 不支援: LINE Pay, JKOPAY, 悠遊付
   */
  cardInfo: Card;
  /**
   * 交易時間
   */
  millis: number;
  /**
   * 銀行處理時間
   */
  bankTransactionTime: {
    /**
     * 開始時間
     */
    startTimeMillis: number;
    /**
     * 結束時間
     */
    endTimeMillis: number;
  };
  /**
   * 銀行結果代碼
   */
  bankResultCode: string;
  /**
   * 銀行結果訊息
   */
  bankResultMsg: string;
  /**
   * 信用卡識別碼
   *
   * 每張信用卡只會對到一組識別碼。
   *
   * 不支援: Apple Pay, Google Pay, Samsung Pay, LINE Pay, JKOPAY, 悠遊付
   */
  cardIdentifier: string;
  /**
   * 付款頁面網址，將此網址回傳至前端跳轉
   *
   * 不支援: Apple Pay, Google Pay, Samsung Pay
   */
  paymentUrl: string;
  /**
   * 該交易有無取得 RBA 評估的風險分數RBA 可以為每筆交易評估風險，以辨認和防止偽冒交易發生
   */
  isRbaVerified: boolean;
  /**
   * 交易方式細節
   */
  transaction_method_details: {
    /**
     * THREE_DOMAIN_SECURE: 表示訂單以 3D 驗證的規格送往銀行做交易
     *
     * FRICTIONLESS: 表示訂單以一般授權的規格送往銀行做交易
     */
    transaction_method: string;
    /**
     * RBA : 該訂單最後的交易方式，是由 RBA 風險分數規則決定
     *
     * REQUEST : 訂單最後的交易方式，是由商戶交易時帶來的 Request 規格決定
     */
    transaction_method_reference: string;
  };
}
