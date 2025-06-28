// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { GNverifier } from '../client';

export abstract class APIResource {
  protected _client: GNverifier;

  constructor(client: GNverifier) {
    this._client = client;
  }
}
