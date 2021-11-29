import * as baseTypes from "./base";

interface BaseOptions {
  affiliateCodeGroupName?: string;
  affiliateCodeName: string;
}

export interface PrimeOptions extends BaseOptions {
  prime: string;
}

export interface CardTokenOptions extends BaseOptions {
  cardToken: string;
  cardKey: string;
}

export type Options = PrimeOptions | CardTokenOptions;

export interface Response extends baseTypes.ResponseBase {
  resultCode: number;
}
