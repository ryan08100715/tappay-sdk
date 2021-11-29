import * as baseTypes from "./base";

export interface Options {
  recTradeId: string;
}

export interface Response extends baseTypes.ResponseBase {
  capMillis: number;
  currency: string;
}
