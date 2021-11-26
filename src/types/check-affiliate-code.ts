import { ResponseBase } from "./base";

interface BaseOptions {
  /**
   * 聯名卡群組
   */
  affiliateCodeGroupName?: string;
  /**
   * 聯名卡
   */
  affiliateCodeName: string;
}

export interface PrimeOptions extends BaseOptions {
  /**
   * 用卡號所換得的字串
   *
   * 由 getPrime 成功時回傳，不可與cardToken/cardKey 同時帶入
   */
  prime: string;
}

export interface CardTokenOptions extends BaseOptions {
  /**
   * 卡片識別字串
   *
   * 需和 card_key 同時帶入，但不可與 prime 同時帶入
   */
  cardToken: string;
  /**
   * 卡片安全金鑰
   *
   * 需和 card_token 同時帶入，但不可與 prime 同時帶入
   */
  cardKey: string;
}

export type Options = PrimeOptions | CardTokenOptions;

export interface Response extends ResponseBase {
  /**
   * 是否符合查詢條件
   *
   * - 0 代表符合
   * - 1 代表不符合
   */
  resultCode: number;
}
