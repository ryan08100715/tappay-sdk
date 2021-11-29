import * as baseTypes from "./base";

interface BaseOptions {
  cardKey: string;
  cardToken: string;
  amount: number;
  currency: string;
  orderNumber?: string;
  bankTransactionId?: string;
  details: string;
  cardholderVerify?: baseTypes.CardholderVerify;
  kycVerificationMerchantId?: string;
  instalment?: number;
  delayCaptureInDays?: number;
  threeDomainSecure?: boolean;
  resultUrl?: baseTypes.ResultUrl;
  cardCcv?: string;
  redeem?: boolean;
  additionalData?: string;
  ccvPrime?: string;
  deviceId?: string;
}

export interface MerchantIdOptions extends BaseOptions {
  merchantId: string;
}

export interface MerchantGroupIdOptions extends BaseOptions {
  merchantGroupId: string;
}

export type Options = MerchantIdOptions | MerchantGroupIdOptions;

export interface Response extends baseTypes.ResponseBase {
  recTradeId: string;
  bankTransactionId: string;
  bankOrderNumber: string;
  amount: number;
  currency: string;
  authCode: string;
  cardInfo: baseTypes.CardInfo;
  orderNumber: string;
  acquirer: string;
  transactionTimeMillis: number;
  bankTransactionTime: baseTypes.BankTransactionTime;
  bankResultCode: string;
  bankResultMsg: string;
  paymentUrl: string;
  instalmentInfo: baseTypes.InstalmentInfo;
  redeemInfo: baseTypes.RedeemInfo;
  cardIdentifier: string;
  merchantReferenceInfo: string;
  isRbaVerified: boolean;
  transactionMethodDetails: baseTypes.TransactionMethodDetails;
}
