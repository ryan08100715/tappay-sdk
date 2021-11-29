import * as baseTypes from "./base";

export interface Options {
  recordsPerPage?: number;
  page?: number;
  startTimeMillis: number;
  endTimeMillis: number;
  transactionActions: string[];
  merchantIds?: string[];
  acquirers?: string[];
}

export interface Response extends baseTypes.ResponseBase {
  recordsPerPage: number;
  page: number;
  totalPageCount: number;
  numberOfTransactions: number;
  reconciliationDatas: {
    merchantId: string;
    merchantDescription: string;
    acquirer: string;
    paymentMethod: string;
    recTradeId: string;
    bankTransactionId: string;
    bankOrderNumber: string;
    bankRefundOrderNumber: string;
    orderNumber: string;
    millis: number;
    bankTransactionMillis: number;
    transactionAction: string;
    transactionResult: boolean;
    tradeAmount: number;
    authMillis: number;
    authAmount: number;
    currency: string;
    partialCardNumber: string;
    cardType: number;
    authCode: string;
    isKycVerified: boolean;
    instalmentInfo: Pick<baseTypes.InstalmentInfo, "numberOfInstalments">;
    redeemInfo: Pick<baseTypes.RedeemInfo, "offsetAmount">;
    payInfo: Omit<baseTypes.PayInfo, "method" | "maskedCreditCardNumber">;
  }[];
}
