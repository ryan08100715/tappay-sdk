import * as baseTypes from "./base";

export interface Options {
  recTradeId: string;
  refundId?: string;
}

export interface Response extends baseTypes.ResponseBase {
  currency: string;
  recTradeId: string;
  result: {
    success: boolean;
    refundId: string;
    amount: number;
    bankResultCode: string;
    bankResultMsg: string;
  };
}
