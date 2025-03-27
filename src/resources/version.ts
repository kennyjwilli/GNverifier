// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Version extends APIResource {
  retrieve(options?: RequestOptions): APIPromise<VersionRetrieveResponse> {
    return this._client.get('/version', options);
  }
}

/**
 * The version number and build time of the `gnames` app.
 */
export interface VersionRetrieveResponse {
  /**
   * The compilation timestamp.
   */
  build: string;

  /**
   * The version number.
   */
  version: string;
}

export declare namespace Version {
  export { type VersionRetrieveResponse as VersionRetrieveResponse };
}
