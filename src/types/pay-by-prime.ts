import * as baseTypes from "./base";

interface BaseOptions {
  /**
   * 用卡號所換得的字串，由 getPrime 成功時回傳，prime 的時效為 90秒。
   *
   * 若您有開啟 Apple Pay 延後授權，請自行保管 Prime(預設 Prime 有效期限為 30 天)，呼叫 Pay By Prime 。
   */
  prime: string;
  /**
   * 交易金額
   *
   * 目前支援台幣、港幣、馬幣、美金，台幣以外金額需乘以 100後帶入。
   */
  amount: number;
  /**
   * 交易商品明細
   *
   * 支援: JKOPAY、悠遊付
   */
  merchandiseDetails?: baseTypes.MerchandiseDetails;
  /**
   * 貨幣種類，預設為 TWD。
   */
  currency?: string;
  /**
   * 您自定義的訂單編號，用於 TapPay 做訂單識別，可重複帶入。
   *
   * 若有帶入此欄位，則不能為空。
   */
  orderNumber?: string;
  /**
   * 銀行端的訂單編號
   *
   * 強烈建議商戶可在此自訂，但不能與之前的重複，若您沒有自訂則會自動幫您產生一組。
   *
   * 但若您沒自訂，當發生421 Gateway 操作逾時（發生機率低），則無法反查該筆交易。
   */
  bankTransactionId?: string;
  /**
   * 交易品項內容
   */
  details: string;
  /**
   * 持卡人或購買人資訊。
   *
   * 以下資料將為「詐欺檢測器」，資料越詳細，可獲得越完整的保護，
   * 若無此資料，則該對應的 Key 值，可以帶空字串。
   */
  cardholder: baseTypes.Cardholder;
  /**
   * 身份驗證欄位
   */
  cardholderVerify?: baseTypes.CardholderVerify;
  /**
   * 此欄位請填入僅供身份驗證，無授權功能的merchant ID。
   *
   * 支援銀行：財團法人聯合信用卡處理中心
   *
   * 支援 : 產壽險業 / 電支產業
   */
  kycVerificationMerchantId?: string;
  /**
   * 分期付款其數，預設為0。
   */
  instalment?: number;
  /**
   * 定義交易授權後銀行要過多久才會請款。(單位為天)、(預設為0(當天請款)
   *
   * 若您想要自行手動請款，可帶入 -1 表示暫時不請款
   * 收單銀行皆設有請款期限，請向您的收單銀行確認。若您採取手動請款模式，請留意如果該筆交易的請款日超過銀行請款期限，可能會導致請款失敗。
   */
  delayCaptureInDays?: number;
  /**
   * 是否開啟3D驗證。
   *
   * 預設為 false
   *
   * 支援: 台新銀行、中國信託銀行、財團法人聯合信用卡處理中心、玉山銀行、永豐(New)、藍新金流、富邦、RAZER PAY、彰化銀行、國泰世華銀行
   * 3DS2.0 驗證目前只支援National Credit Card Center of R.O.C AE 卡
   * 不支援: Apple Pay, Google Pay, Samsung Pay, LINE Pay, JKOPAY, 悠遊付
   */
  threeDomainSecure?: boolean;
  /**
   * 使用 LINE Pay, JKOPAY, 悠遊付 或 three_domain_secure 為 true 時必填。
   */
  resultUrl?: baseTypes.ResultUrl;
  /**
   * 是否記憶卡號。
   *
   * LINE Pay 交易 remember: true 時，只支援使用 POINT 與信用卡
   *
   * 不支援: Apple Pay, Google Pay, Samsung Pay, JKOPAY, 悠遊付
   */
  remember?: boolean;
  /**
   * 是否為紅利折抵。
   *
   * 支援: 財團法人聯合信用卡處理中心
   * 不支援: Apple Pay, Google Pay, Samsung Pay, LINE Pay, JKOPAY, 悠遊付
   */
  redeem?: boolean;
  /**
   * 資料會加密保存，並在其他客製化需求時才解密做使用。
   */
  additionalData?: string;
  /**
   * 與銀行或錢包合作之活動中，雙方協議的指定活動代碼。
   *
   * 支援 : 悠遊付
   */
  eventCode?: string;
  /**
   * 交易付款頁面上所顯示的商品或商家圖片。
   *
   * 此欄位等同於line_pay_product_image_url，
   * 若您於呼叫時同時帶入 product_image_url 與line_pay_product_image_url，
   * TapPay 將以product_image_url 欄位的內容為主。
   *
   * 格式:
   *
   * Line Pay: 長度: 500, 圖片大小: 84x84
   */
  productImageUrl?: string;
  /**
   * 街口支付產壽險交易，保單明細
   */
  jkoPayInsurancePolicy?: baseTypes.JkoPayInsurancePolicy[];
}

export interface MerchantIdOptions extends BaseOptions {
  merchantId: string;
}

export interface MerchantGroupIdOptions extends BaseOptions {
  merchantGroupId: string;
}

export type Options = MerchantIdOptions | MerchantGroupIdOptions;

export interface Response extends baseTypes.ResponseBase {
  recTradeId: string;
  bankTransactionId: string;
  bankOrderNumber: string;
  authCode: string;
  cardSecret: baseTypes.CardSecret;
  amount: number;
  currency: string;
  cardInfo: baseTypes.CardInfo;
  orderNumber: string;
  acquirer: string;
  transactionTimeMillis: number;
  bankTransactionTime: baseTypes.BankTransactionTime;
  bankResultCode: string;
  bankResultMsg: string;
  paymentUrl: string;
  instalmentInfo: baseTypes.InstalmentInfo;
  redeemInfo: baseTypes.RedeemInfo;
  cardIdentifier: string;
  merchantReferenceInfo: string;
  eventCode: string;
  isRbaVerified: boolean;
  transactionMethodDetails: baseTypes.TransactionMethodDetails;
}
