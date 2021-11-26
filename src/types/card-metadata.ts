import { ResponseBase, Card } from "./base";

export interface CardMetadataOptions {
  /**
   * 卡片安全金鑰
   */
  cardKey: string;
  /**
   * 卡片識別字串
   */
  cardToken: string;
}

export interface CardMetadataResponse extends ResponseBase {
  /**
   * 卡片資訊
   *
   * 不支援: LINE Pay, JKOPAY
   */
  cardInfo: Card & {
    /**
     * - 未支援(卡片不支援 Tokenization):NOT_SUPPORT
     * - 請求處理中(與銀行確認中):REQUEST_PROCESSING
     * - 啟用中:ACTIVE
     * - 已暫停:SUSPENDED
     * - 已刪除:DELETED
     */
    tokenStatus: string;
  };
  /**
   * 卡面資料
   */
  cardArtInfo: {
    /**
     * - 未支援(卡片不支援真實卡面):NOT_SUPPORT
     * - 請求處理中(與銀行取得卡面資料中):REQUEST_PROCESSING
     * - 支援原卡面(已取得真實卡面):SUPPORT
     */
    cardArtStatus: string;
    /**
     * 判斷是否為真實卡面
     *
     * 當以下情況時皆會回傳假卡片：
     * 1. 卡片為不支援的卡種時（ 目前為 JCB 卡、AE 卡、銀聯卡等 )
     * 2. 卡片為 Visa、MasterCard 但發卡銀行不支援時
     * 3. 卡片為 Visa、MasterCard 但發卡銀行註冊時並未提供國際組織卡面(極少發生)
     */
    isRealCardFace: boolean;
    image: {
      /**
       * 連結網址，由 “https://” 開頭
       */
      url: string;
      /**
       * 卡面寬度, 單位 : px
       */
      width: number;
      /**
       * 卡面高度, 單位 : px
       */
      height: number;
    };
    /**
     * 卡面上字的顏色
     */
    foregroundColor: string;
    /**
     * 遮蔽後卡號後四碼
     * (e.g. : **** **** **** 1234)
     */
    maskedCardNumber: string;
    /**
     * 卡面上顯示的發卡銀行
     *
     * (若未顯示即為發卡行未提供)
     *
     * (建議 Is_real_card_face 若為 false 可將發卡銀行名稱加入在卡面上)
     */
    issuer: string;
  };
}
