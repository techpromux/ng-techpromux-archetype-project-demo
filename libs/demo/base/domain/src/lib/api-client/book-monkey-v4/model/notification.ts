/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * BookMonkey 4 API
 * **DEMO**  This is a demo backend for serving books. All data is erased after some inactivity.
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * A notifications subscription object (PushSubscriptionJSON), see: https://www.w3.org/TR/push-api/#dom-pushsubscriptionjson
 */
export interface Notification {
  /**
   * A USVString as defined here https://heycam.github.io/webidl/#idl-USVString
   */
  endpoint: string;
  /**
   * A DOMHighResTimeStamp as defined here https://www.w3.org/TR/hr-time-2/#dom-domhighrestimestamp
   */
  expirationTime?: string;
  /**
   * An Object which contains neccessary keys, see: https://www.w3.org/TR/push-api/#dom-pushencryptionkeyname
   */
  keys: any;
}
