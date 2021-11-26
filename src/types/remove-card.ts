import { ResponseBase } from "./base";

export interface RemoveCardOptions {
  /**
   * 卡片安全金鑰
   */
  cardKey: string;
  /**
   * 卡片識別字串
   */
  cardToken: string;
}

export type RemoveCardResponse = ResponseBase;
