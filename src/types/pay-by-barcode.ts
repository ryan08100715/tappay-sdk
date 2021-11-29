import * as baseTypes from "./base";

interface BaseOptions {
  barcode: string;
  amount: number;
  currency: string;
  orderNumber?: string;
  bankTransactionId?: string;
  details: string;
  delayCaptureInDays?: number;
  retryMode?: string;
  redeem?: boolean;
  additionalData?: string;
  merchandiseDetails?: baseTypes.MerchandiseDetails;
  branchInfo?: {
    branchCode?: string;
    branchName?: string;
    posId?: string;
  };
  paymentMethod?: number;
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
  merchantId: string;
  currency: string;
  authCode: string;
  cardInfo: baseTypes.CardInfo;
  orderNumber: string;
  acquirer: string;
  transactionTimeMillis: number;
  bankTransactionTime: baseTypes.BankTransactionTime;
  bankResultCode: string;
  bankResultMsg: string;
  redeemInfo: baseTypes.RedeemInfo;
  cardIdentifier: string;
  merchantReferenceInfo: string;
  cardholder: Pick<baseTypes.Cardholder, "memberId">;
  payInfo: Omit<baseTypes.PayInfo, "method">;
  eInvoiceCarrier: baseTypes.EInvoiceCarrier;
}
