import { ResponseBase, Card } from "./base";

export interface GetMemberCardOptions {
  /**
   * 綁定卡片時所帶入的會員編號
   */
  memberId: string;
}

export interface GetMemberCardResponse extends ResponseBase {
  /**
   * 綁定卡片時所帶入的會員編號
   */
  memberId: string;
  /**
   * 卡片資訊
   */
  cards: (Card & {
    /**
     * 綁定卡片後得到的card token，在Pay by Prime API中remember帶“true”或Bind Card API後可取得
     */
    cardToken: string;
    /**
     * 信用卡識別碼
     *
     * 每張信用卡只會對到一組識別碼
     *
     * 不支援: Apple Pay, Google Pay, Samsung Pay, LINE Pay, JKOPAY, 悠遊付
     */
    cardIdentifier?: string;
  })[];
}
