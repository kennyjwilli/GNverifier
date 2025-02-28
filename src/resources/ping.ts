// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Ping extends APIResource {
  check(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/ping', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type PingCheckResponse = string;

export declare namespace Ping {
  export { type PingCheckResponse as PingCheckResponse };
}
