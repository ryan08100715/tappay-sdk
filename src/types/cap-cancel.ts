import * as baseTypes from "./base";

export interface Options {
  recTradeId: string;
}

export interface Response extends baseTypes.ResponseBase {
  currency: string;
  recTradeId: number;
}
