// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SearchAPI from './search';
import * as VerificationsAPI from './verifications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Search extends APIResource {
  /**
   * Search allows finding names by a specific epithet, genus, author, year.
   *
   * For the query language description see the `SearchQuery` docs below.
   */
  find(query: string, options?: RequestOptions): APIPromise<SearchOutput> {
    return this._client.get(path`/search/${query}`, options);
  }

  /**
   * Takes SearchInput object and runs faceted search.
   */
  run(body: SearchRunParams, options?: RequestOptions): APIPromise<SearchOutput> {
    return this._client.post('/search', { body, ...options });
  }
}

export interface SearchInput {
  /**
   * Author's name, can be abbreviated.
   */
  author?: string;

  /**
   * Limits search data to results from the given data-sources.
   */
  dataSourceIds?: Array<number>;

  /**
   * Genus data, can be abbreviated.
   */
  genus?: string;

  /**
   * A convenience field that allows to enter several fields as a one string. Instead
   * of providing genus, species in separate fields, they can be given in a
   * `nameString`. Data from `nameString` will overwrite corresponding data fields.
   * For example `B. bubo` name string will overwrite `genus` and `species` fields.
   */
  nameString?: string;

  /**
   * Limits search data to records containing the given clade in the classification
   * field.
   */
  parentTaxon?: string;

  /**
   * Query for advanced search. Query can include the following components.
   *
   * - name is a shortcut that allows to put together several elements
   *   `n:B. bubo Linn. 1750-1800`
   * - genus `g:B.`, `g:Bub.`, `g:Bubo`
   * - species `sp:bubo`, `sp:gallop.`
   * - infraspecies `isp:bubo`, `isp:interp.`
   * - either species or infraspecies (all sp) `asp:bubo`
   * - data-sources IDs `ds:1,2,3`
   * - parent taxon `tx:Aves`. Uses classification of the first data-source from
   *   `d s:`. If data-sources are not set, uses Catalogue of Life.
   * - author `au:Linnaeus`, `au:Linn.`, `au:L.`
   * - year `y:1888`, `y:1888-1900`, `y:1888-`, `y:-1888`
   *
   * The query must contain the species or infraspecies data
   */
  query?: string;

  /**
   * Specific epithet, can be abbreviated.
   */
  species?: string;

  /**
   * Either specific, or infraspecific epithet.
   */
  speciesAny?: string;

  /**
   * An infraspecific epithet, can be abbreviated.
   */
  speciesInfra?: string;

  /**
   * Warnings about discrepancies in the input.
   */
  warnings?: Array<string>;

  /**
   * Provide all found results, not only `bestResult`
   */
  withAllResults?: boolean;

  /**
   * Name's year. Ignored if there is a `yearRange`.
   */
  year?: number;

  /**
   * Limits search to names within the range. If range does not have one of the
   * values, range is open on that side. At least one value has to be present. If
   * range is given, `year` field is ignored.
   */
  yearRange?: SearchInput.YearRange;
}

export namespace SearchInput {
  /**
   * Limits search to names within the range. If range does not have one of the
   * values, range is open on that side. At least one value has to be present. If
   * range is given, `year` field is ignored.
   */
  export interface YearRange {
    /**
     * The higher border of the range.
     */
    yearEnd?: number;

    /**
     * The lower border of the range.
     */
    yearStart?: number;
  }
}

export interface SearchOutput {
  metadata: SearchOutput.Metadata;

  names?: Array<VerificationsAPI.Name>;
}

export namespace SearchOutput {
  export interface Metadata {
    input: SearchAPI.SearchInput;

    /**
     * The number of found names.
     */
    namesNumber: number;

    /**
     * Provides an error of a search, if it happens.
     */
    error?: string;
  }
}

export interface SearchRunParams {
  /**
   * Author's name, can be abbreviated.
   */
  author?: string;

  /**
   * Limits search data to results from the given data-sources.
   */
  dataSourceIds?: Array<number>;

  /**
   * Genus data, can be abbreviated.
   */
  genus?: string;

  /**
   * A convenience field that allows to enter several fields as a one string. Instead
   * of providing genus, species in separate fields, they can be given in a
   * `nameString`. Data from `nameString` will overwrite corresponding data fields.
   * For example `B. bubo` name string will overwrite `genus` and `species` fields.
   */
  nameString?: string;

  /**
   * Limits search data to records containing the given clade in the classification
   * field.
   */
  parentTaxon?: string;

  /**
   * Query for advanced search. Query can include the following components.
   *
   * - name is a shortcut that allows to put together several elements
   *   `n:B. bubo Linn. 1750-1800`
   * - genus `g:B.`, `g:Bub.`, `g:Bubo`
   * - species `sp:bubo`, `sp:gallop.`
   * - infraspecies `isp:bubo`, `isp:interp.`
   * - either species or infraspecies (all sp) `asp:bubo`
   * - data-sources IDs `ds:1,2,3`
   * - parent taxon `tx:Aves`. Uses classification of the first data-source from
   *   `d s:`. If data-sources are not set, uses Catalogue of Life.
   * - author `au:Linnaeus`, `au:Linn.`, `au:L.`
   * - year `y:1888`, `y:1888-1900`, `y:1888-`, `y:-1888`
   *
   * The query must contain the species or infraspecies data
   */
  query?: string;

  /**
   * Specific epithet, can be abbreviated.
   */
  species?: string;

  /**
   * Either specific, or infraspecific epithet.
   */
  speciesAny?: string;

  /**
   * An infraspecific epithet, can be abbreviated.
   */
  speciesInfra?: string;

  /**
   * Warnings about discrepancies in the input.
   */
  warnings?: Array<string>;

  /**
   * Provide all found results, not only `bestResult`
   */
  withAllResults?: boolean;

  /**
   * Name's year. Ignored if there is a `yearRange`.
   */
  year?: number;

  /**
   * Limits search to names within the range. If range does not have one of the
   * values, range is open on that side. At least one value has to be present. If
   * range is given, `year` field is ignored.
   */
  yearRange?: SearchRunParams.YearRange;
}

export namespace SearchRunParams {
  /**
   * Limits search to names within the range. If range does not have one of the
   * values, range is open on that side. At least one value has to be present. If
   * range is given, `year` field is ignored.
   */
  export interface YearRange {
    /**
     * The higher border of the range.
     */
    yearEnd?: number;

    /**
     * The lower border of the range.
     */
    yearStart?: number;
  }
}

export declare namespace Search {
  export {
    type SearchInput as SearchInput,
    type SearchOutput as SearchOutput,
    type SearchRunParams as SearchRunParams,
  };
}
