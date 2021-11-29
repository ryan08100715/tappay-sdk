import * as baseTypes from "./base";

export interface Options {
  recordsPerPage?: number;
  page?: number;
  filters: baseTypes.RecordFilters;
  orderBy?: string;
}

export interface Response extends baseTypes.ResponseBase {
  recordsPerPage: number;
  page: number;
  totalPageCount: number;
  numberOfTransactions: number;
  tradeRecords: {
    recTradeId: string;
    authCode: string;
    merchantId: string;
    merchantName: string;
    appName: string;
    time: number;
    amount: number;
    refundedAmount: number;
    recordStatus: number;
    bankTransactionId: string;
    bankOrderNumber: string;
    capMillis: number;
    originalAmount: number;
    bankTransactionStartMillis: number;
    bankTransactionEndMillis: number;
    isCaptured: boolean;
    bankResultCode: string;
    bankResultMsg: string;
    partialCardNumber: string;
    paymentMethod: string;
    details: string;
    cardholder: baseTypes.Cardholder & { bankMemberId: string };
    merchandiseDetails: baseTypes.MerchandiseDetails;
    currency: string;
    merchantReferenceInfo: baseTypes.MerchantReferenceInfo & { memberUid: string };
    eInvoiceCarrier: baseTypes.EInvoiceCarrier;
    threeDomainSecure: boolean;
    payByInstalment: boolean;
    instalmentInfo: Pick<baseTypes.InstalmentInfo, "numberOfInstalments" | "firstPayment" | "eachPayment">;
    orderNumber: string;
    payInfo: baseTypes.PayInfo;
    payByRedeem: boolean;
    redeemInfo: Omit<baseTypes.RedeemInfo, "extraInfo">;
    kycInfo: {
      isKycVerified: boolean;
      kycVerificationMerchantId: string;
    };
    cardIdentifier: string;
    cardInfo: Omit<baseTypes.CardInfo, "expiryDate">;
    isRbaVerified: boolean;
    transactionMethodDetails: baseTypes.TransactionMethodDetails;
  }[];
}
