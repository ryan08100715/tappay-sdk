import * as baseTypes from "./base";

export type Options = {
  cardToken: string;
} & Partial<baseTypes.Cardholder>;

export interface Response extends baseTypes.ResponseBase {
  cardToken: string;
  updateMillis: number;
  cardholder: Required<baseTypes.Cardholder>;
}
