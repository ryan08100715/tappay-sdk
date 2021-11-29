import * as baseTypes from "./base";

export interface Options {
  /**
   * 卡片安全金鑰
   */
  cardKey: string;
  /**
   * 卡片識別字串
   */
  cardToken: string;
}

export interface Response extends baseTypes.ResponseBase {
  cardInfo: baseTypes.CardInfo & {
    tokenStatus: string;
  };
  cardArtInfo: {
    cardArtStatus: string;
    isRealCardFace: boolean;
    image: {
      url: string;
      width: number;
      height: number;
    };
    foregroundColor: string;
    maskedCardNumber: string;
    issuer: string;
  };
}
