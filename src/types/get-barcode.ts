import { ResponseBase } from "./base";

export interface GetBarcodeOptions {
  /**
   * 卡片安全金鑰
   */
  cardKey: string;
  /**
   * 卡片識別字串
   */
  cardToken: string;
  /**
   * bar code長度（建議5-60個位元）
   *
   * 若沒帶，預設值為15
   */
  barcodeLength?: number;
  /**
   * bar code更新時間(秒數)
   *
   * 秒數上限為86400秒，若沒帶，預設值為90
   */
  barcodeUpdateSecs?: number;
}

export interface GetBarcodeResponse extends ResponseBase {
  /**
   * 由大小寫英數字組成的barcode
   */
  barcode: string;
  /**
   * barcode更新秒數
   */
  barcodeUpdateSecs: number;
}
