import * as baseTypes from "./base";

export interface Options {
  recTradeId: string;
}

export interface Response extends baseTypes.ResponseBase {
  recTradeId: string;
  bankOrderNumber: string;
  currency: string;
  tradeHistory: {
    amount: number;
    action: number;
    millis: number;
    success: boolean;
    bankTransactionMillis: number;
    canRefundCancelMillis: number;
    refundId: string;
    bankRefundOrderNumber: string;
    bankRefundId: string;
    isPending: boolean;
    bankResultCode: string;
    bankResultMsg: string;
  }[];
}
