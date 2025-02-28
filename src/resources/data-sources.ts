// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DataSources extends APIResource {
  /**
   * Provides metadata about a specific data-source.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<DataSource> {
    return this._client.get(path`/data_sources/${id}`, options);
  }

  list(options?: RequestOptions): APIPromise<DataSourceListResponse> {
    return this._client.get('/data_sources', options);
  }
}

/**
 * Metadata about a biodiversity data-aggregator.
 */
export interface DataSource {
  /**
   * An identifier associated with the data-source in `gnames` database.
   *
   * This ID is intended to be stable through the lifespan of the `GlobalNames`
   * project.
   */
  id: number;

  /**
   * This field indicates an approximate amount of effort spent on verification of
   * the data aggregated in the data-source. There are 3 levels
   *
   * - `NotCurated`
   * - `AutoCurated`
   * - `Curated`
   *
   * If this flag has a `NotCurated` value, it does not mean that original
   * data-source is not curated, rather it means the curation level is not known to
   * `GNames`.
   */
  curation: string;

  /**
   * The number of records harvested from the data-source.
   */
  recordCount: number;

  /**
   * The name of the data-source.
   */
  title: string;

  /**
   * A simplified/abbreviated name of the data-source.
   *
   * It can be used in outputs without worrying about excessively long names of
   * data-sources.
   */
  titleShort: string;

  /**
   * A timestamp of the last data-source harvest by `GNames`.
   */
  updatedAt: string;

  /**
   * Authors of the data-source.
   */
  authors?: string;

  /**
   * A citation representing the data-source.
   */
  citation?: string;

  /**
   * A summary describing the resource.
   */
  description?: string;

  /**
   * Digital Object Identifier
   */
  doi?: string;

  /**
   * A website of the data-source.
   */
  homeURL?: string;

  /**
   * The flag is true if the data-source has enough data and metadata to be
   * recommended for out-linking.
   *
   * If the flag is false, it does not mean that the original data-source is not
   * good, it means that its representation at `GNames` is not complete/recent
   * enough.
   */
  isOutlinkReady?: boolean;

  /**
   * An information when the data-source was updated according to the data-provider.
   *
   * The value would follow one of the following formats
   *
   * - year-month-day
   * - year-month
   * - year
   */
  revisionDate?: string;

  /**
   * UUID v4 that is associated with the data-source.
   *
   * This UUID is a global identifier of the data-source in the context of
   * `GlobalNames`.
   */
  uuid?: string;

  /**
   * The version of a data-source according to data-provider.
   */
  version?: string;
}

/**
 * A list of biodiversity data-sources aggregated in `GNames`.
 */
export type DataSourceListResponse = Array<DataSource>;

export declare namespace DataSources {
  export { type DataSource as DataSource, type DataSourceListResponse as DataSourceListResponse };
}
