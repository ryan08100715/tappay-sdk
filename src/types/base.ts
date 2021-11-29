export interface ConstructorOption {
  /**
   * SDK 環境
   */
  env: "prod" | "sandbox";
  /**
   * 綁定 Portal 帳戶的驗證金鑰
   */
  partnerKey: string;
}

export interface Cardholder {
  /**
   * 手機號碼，可為 09 開頭的電話或是包含加號之 E.164 格式("+886923456789")。
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
   * 身分證字號
   */
  nationalId?: string;
  /**
   * 持卡人或購買人會員編號。
   *
   * 用於 TapPay 詐欺檢測、會員資料管理時使用。
   *
   * 支援 : Direct Pay
   */
  memberId?: string;
}

export interface CardholderVerify {
  /**
   * 是否驗證電話號碼
   */
  phoneNumber?: boolean;
  /**
   * 是否驗證身分證字號

   */
  nationalId?: boolean;
}

export interface MerchandiseDetails {
  /**
   * 不適用回饋之金額(例如:煙)
   */
  noRebateAmount: number;
}

export interface ResultUrl {
  /**
   * 使用 LINE Pay、街口支付、悠遊付或者 3D 驗證交易時，
   * 當消費者在 LINE Pay、街口支付、悠遊付或 3D 驗證完成交易程序後，
   * 導轉回到商戶網頁前端的交易結果頁面 URL。
   *
   * 必須以 https 開頭。
   */
  frontendRedirectUrl?: string;
  /**
   * 商戶 Server 接收交易結果的 URL。
   *
   * 必須以 https 開頭。
   *
   * 僅支援 443 port。
   */
  backendNotifyUrl?: string;
  /**
   * 3D 驗證交易時，當消費者因不當操作而被導到 TapPay Error 頁面時，頁面上「Go back」按鈕連結。
   *
   * 此情境僅會發生於玉山銀行, 國泰世華銀行, 台新銀行。
   *
   * 若您在交易的 Request 中有定義此參數，則消費者按下 Go back按鈕後，會導到您所指定的 URL。
   *
   * 強烈建議您在 3D 交易時定義這個欄位，避免消費者被導轉到交易錯誤頁面時，無法回到商家頁面完成交易或查看交易結果。
   *
   * 建議您此 URL 可以設定為商家首頁或是購物車頁面。
   */
  goBackUrl?: string;
}

export interface JkoPayInsurancePolicy {
  /**
   * 要保人的身分證字號或居留證
   */
  proposer: string;
  /**
   * 被保人的身分證字號或居留證
   */
  insured: string[];
  /**
   * 險種
   */
  insuranceType: string;
  /**
   * 保單識別碼
   *
   * 保險公司自定義。
   */
  policyId: string;
  /**
   * 保單繳費期限
   */
  paymentDeadline: number;
  /**
   * 繳別
   */
  paymentFrequency: number;
  /**
   * 保單金額
   *
   * 所有保單金額的加總，應該等於 Pay by Prime Request 中的 amount 金額
   */
  finalPrice: number;
}

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

export interface CardSecret {
  /**
   * 卡片識別字串
   */
  cardToken: string;
  /**
   * 卡片安全金鑰
   */
  cardKey: string;
}

export interface CardInfo {
  binCode: string;
  lastFour: string;
  issuer: string;
  issuerZhTw: string;
  bankId: string;
  funding: number;
  type: number;
  level: string;
  country: string;
  countryCode: string;
  expiryDate: string;
}

export interface BankTransactionTime {
  startTimeMillis: string;
  endTimeMillis: string;
}

export interface InstalmentInfo {
  numberOfInstalments: number;
  firstPayment: number;
  eachPayment: number;
  extraInfo: Record<string, string | number>;
}

export interface RedeemInfo {
  usedPoint: string;
  balance: string;
  offsetAmount: string;
  dueAmount: string;
  extraInfo: Record<string, string>;
}

export interface MerchantReferenceInfo {
  affiliateCodes: any[];
}

export interface TransactionMethodDetails {
  transactionMethod: string;
  transactionMethodReference: string;
}

export interface RecordFilters {
  time: {
    startTime: number;
    endTime: number;
  };
  amount?: {
    upperLimit: number;
    lowerLimit: number;
  };
  cardholder?: {
    name: string;
    phoneNumber: string;
    email: string;
  };
  merchantId?: string[];
  recordStatus?: number;
  recTradeId?: string;
  orderNumber?: any;
  bankTransactionId?: any;
  authCode?: any;
  currency?: any;
  tsp?: boolean;
  cardIdentifier?: string;
}

export interface RecordOrderBy {
  attribute: string;
  isDescending: boolean;
}

export interface PayInfo {
  method: string;
  maskedCreditCardNumber: string;
  point: string;
  discount: string;
  creditCard: number;
  balance: number;
  bankAccount: number;
}

export interface EInvoiceCarrier {
  type: number;
  number: string;
  donation: boolean;
  donationId: string;
}
