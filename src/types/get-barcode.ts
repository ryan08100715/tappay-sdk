import * as baseTypes from "./base";

export interface Options {
  cardKey: string;
  cardToken: string;
  barcodeLength?: number;
  barcodeUpdateSecs?: number;
}

export interface Response extends baseTypes.ResponseBase {
  barcode: string;
  barcodeUpdateSecs: number;
}
