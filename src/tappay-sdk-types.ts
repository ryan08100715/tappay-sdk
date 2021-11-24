export enum Environment {
  /**
   * 正式
   */
  Prod = "prod",

  /**
   * 測試
   */
  Sandbox = "sandbox",
}

export interface ServerUrl {
  /**
   * 測試服
   */
  sandbox: string;

  /**
   * 正式服
   */
  prod: string;
}

export interface ConstructorOption {
  /**
   * SDK 環境
   */
  env: Environment;
  /**
   * 綁定 Portal 帳戶的驗證金鑰
   */
  partnerKey: string;
}
