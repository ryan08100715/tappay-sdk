import * as baseTypes from "./base";

export interface Options {
  memberId: string;
}

export interface Response extends baseTypes.ResponseBase {
  memberId: string;
  cards: (baseTypes.CardInfo & {
    cardToken: string;
    cardIdentifier: string;
  })[];
}
