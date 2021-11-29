import * as baseTypes from "./base";

export interface Options {
  recTradeId: string;
  bankRefundId?: string;
  amount?: number;
  additionalData?: string;
}

export interface Response extends baseTypes.ResponseBase {
  refundId: string;
  bankREfundOrderNumber: string;
  refundAmount: number;
  isCaptured: boolean;
  bankResultCode: string;
  bankResultMsg: string;
  currency: string;
}
