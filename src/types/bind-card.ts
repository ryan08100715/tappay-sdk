import * as baseTypes from "./base";

interface BaseOptions {
  prime: string;
  currency: string;
  threeDomainSecure?: boolean;
  resultUrl?: baseTypes.ResultUrl;
  cardholder: baseTypes.Cardholder & { bankMemberId?: string };
  cardholderVerify?: baseTypes.CardholderVerify;
  kycVerificationMerchantId?: string;
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
  orderId: string;
  currency: string;
  authCode: string;
  merchantId: string;
  acquirer: string;
  cardSecret: baseTypes.CardSecret;
  cardInfo: baseTypes.CardInfo;
  millis: number;
  bankTransactionTime: baseTypes.BankTransactionTime;
  bankResultCode: string;
  bankResultMsg: string;
  cardIdentifier: string;
  paymentUrl: string;
  isRbaVerified: boolean;
  transaction_method_details: baseTypes.TransactionMethodDetails;
}
