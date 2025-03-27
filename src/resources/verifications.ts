// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Verifications extends APIResource {
  /**
   * Verifies an array of strings against known scientific names.
   */
  create(body: VerificationCreateParams, options?: RequestOptions): APIPromise<VerificationOutput> {
    return this._client.post('/verifications', { body, ...options });
  }

  /**
   * Verifies an array of strings separated by '|' character.
   */
  retrieve(
    names: string,
    query: VerificationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VerificationOutput> {
    return this._client.get(path`/verifications/${names}`, { query, ...options });
  }
}

/**
 * Verification result for a particular input name-string.
 */
export interface Name {
  /**
   * The best curation level from matched data-sources.
   *
   * Possible values are
   *
   * - `NotCurated`
   * - `AutoCurated`
   * - `Curated`
   *
   * If this flag has a `NotCurated` value, it does not mean that original
   * data-source is not curated, rather it means the curation level is not known to
   * `gnames`.
   */
  curation: string;

  /**
   * The number of data-sources where the string had a match to a scientific name.
   */
  dataSourcesNum: number;

  /**
   * Indicates the quality and/or kind of found matches.
   *
   * - `NoMatch` (no matched name found)
   * - `PartialFuzzy` (fuzzy partial match after removing some parts)
   * - `PartialExact` (match after removing last or middle epithets)
   * - `Fuzzy` (fuzzy match to a canonical form)
   * - `Exact` (exact match to a canonical form or a verbatim string)
   * - `Virus` (literal match of Viruses, plasmids, prions and other non-cellular
   *   entities)
   * - `FacetedSearch` (match by a faceted search)
   */
  matchType: string;

  /**
   * An UUID v5 generated from the input string using "globalnames.org" DNS domain
   * name as a seed.
   *
   * This UUID can be used as a distributed global unique identifier of the string
   * and can be created independently in any popular programming language.
   */
  id?: string;

  /**
   * A successsful match of input name-string to a record in a data-source.
   * ResultData with the highest score appears as a best match. ResultData from
   * selected data-sources are aggregated into `results` array. The total score is
   * represented by `sortScore` field and is calculated by an internal algorithm.
   *
   * Scoring takes the following into account (sorted from the highest impact to the
   * least)
   *
   * - infraspecific rank (`Aus bus var. cus` vs `Aus bus f. cus`)
   * - fuzzy matching edit distance (less is better)
   * - authorship matching
   * - accepted name vs synonyms (accepted name wins)
   * - parsing quality
   */
  bestResult?: ResultData;

  /**
   * Normally an empty string.
   *
   * In case of an unexpected error, it will be shown here.
   *
   * If error is not empty, it means that matching failed because of a bug in the
   * system.
   */
  error?: string;

  /**
   * An input name-string entered for the verification, or found by search.
   */
  name?: string;

  /**
   * Sometimes there are too many records in a database corresponding to a name.
   * Usually it happens because of a large amount of surrogate names like
   * `Lepidoptera BOLD:1234` or strains like `Escherichia coli EC1856`. In such cases
   * there is a truncation of results.
   */
  overloadDetected?: string;

  /**
   * Matched records found in selected data-sources.
   */
  results?: Array<ResultData>;
}

/**
 * A successsful match of input name-string to a record in a data-source.
 * ResultData with the highest score appears as a best match. ResultData from
 * selected data-sources are aggregated into `results` array. The total score is
 * represented by `sortScore` field and is calculated by an internal algorithm.
 *
 * Scoring takes the following into account (sorted from the highest impact to the
 * least)
 *
 * - infraspecific rank (`Aus bus var. cus` vs `Aus bus f. cus`)
 * - fuzzy matching edit distance (less is better)
 * - authorship matching
 * - accepted name vs synonyms (accepted name wins)
 * - parsing quality
 */
export interface ResultData {
  /**
   * A curation level for the record's data-source.
   *
   * If data-source is known to be curated, there is less risk of misspelling of the
   * matched name.
   */
  curation: string;

  /**
   * The currently accepted name for the taxon according to the data-source.
   */
  currentName: string;

  /**
   * If the data-source allows taxonomic resolution of a name, `currentRecordId` will
   * contain the data-source record ID of the currently accepted name for the matched
   * taxon.
   */
  currentRecordId: string;

  /**
   * A simplified/abbreviated title of the data-source.
   */
  dataSourceTitleShort: string;

  /**
   * Edit distance according to Levenshtein algorithm in case of fuzzy matching.
   * Exact matches would have `editDistance` at 0.
   */
  editDistance: number;

  /**
   * A date when a record was harvested to GNames.
   *
   * It follows a pattern 'YYYY-MM-DD'.
   */
  entryDate: string;

  /**
   * `DEPRECATED:` use `taxonomicStatus` instead.
   *
   * A flag, that is true if the data-source regards matched name as an any kind of
   * synonym to the currently accepted name.
   */
  isSynonym: boolean;

  /**
   * A cardinality value of the matched name.
   *
   * Binomial names have cardinality 2, uninomials have cardinality 1 etc.
   *
   * Cardinality 0 means we cannot determine cardinality of a string.
   */
  matchedCardinality: number;

  /**
   * A verbatim scientific name matched to the input.
   */
  matchedName: string;

  /**
   * Indicates the quality and/or kind of found matches.
   *
   * - `NoMatch` (no matched name found)
   * - `PartialFuzzy` (fuzzy partial match after removing some parts)
   * - `PartialExact` (match after removing last or middle epithets)
   * - `Fuzzy` (fuzzy match to a canonical form)
   * - `Exact` (exact match to a canonical form or a verbatim string)
   * - `Virus` (literal match of Viruses, plasmids, prions and other non-cellular
   *   entities)
   * - `FacetedSearch` (match by a faceted search)
   */
  matchType: string;

  /**
   * The record ID of the `matchedName` from the data-source.
   *
   * If the data-source does not provide record ID, the ID is generated by `gnames`
   * and is prepended with a 'gn\_' prefix.
   */
  recordId: string;

  /**
   * Explains which score properties participated in sorting of the data.
   *
   * Properties located higher provide more weight in the sorting.
   *
   * All properties vary from 0 to 1, where 0 has no influence on sorting, and 1 has
   * the highest priority for sorting.
   */
  scoreDetails: ResultData.ScoreDetails;

  /**
   * SortScore is a numeric representation of the total score. It can be used to find
   * the `BestMatch` overall, as well as the best match for every data-source.
   *
   * SortScore takes data from all other scores, using the priority sequence from
   * highest to lowest.
   *
   * - InfraSpecificRankScore
   * - FuzzyLessScore
   * - CuratedDataScore
   * - AuthorMatchScore
   * - AcceptedNameScor
   * - ParsingQualityScore
   *
   * Higher priorities trump lower priorities. When the final score value is
   * calculated, it is used to sort verification or search results.
   *
   * Comparing this score between results of different verifications will not
   * necessarily be accurate. The score is used for comparison of names from the same
   * result.
   */
  sortScore: number;

  /**
   * Indicates if matched name is `accepted` or `synonym` according to the
   * data-source. If data-source deos not provide such information, returns `N/A`.
   */
  taxonomicStatus: string;

  /**
   * A classification path for the matched taxon provided by the data-source.
   */
  classificationPath?: string;

  /**
   * The ranks of the `classificationPath` entries.
   */
  classificationRanks?: string;

  /**
   * A less normalized canonical form of the matched name with more details. It does
   * not have authors and years, but does have hybrid signes and ranks (if given).
   * This canonical form is better for presentation and creating matching scores.
   */
  currentCanonicalFull?: string;

  /**
   * The most normalized canonical form of a scientific name. It does not contain
   * infraspecific ranks, hybrid signs for named hybrids, authors or years. This
   * canonical form is the best for matching names.
   */
  currentCanonicalSimple?: string;

  /**
   * Cardinality of the currently accepted name.
   */
  currentCardinality?: number;

  /**
   * An Id of the data-source where the match was found.
   *
   * This is a local Id at GlobalNames, and it has been stable for more than 10
   * years.
   */
  dataSourceId?: number;

  /**
   * Edit distance according to Levenshtein algorithm between stemmed versions of
   * canonical forms of input name and matched name.
   *
   * Stemmed versions are the most normalized forms of scientific names with stripped
   * suffixes and transformation of some characters (v->u, j->i). They are not
   * provided by the API, but can be obtained with `gnparser` app.
   */
  editDistanceStem?: number;

  /**
   * A globally unique record ID (UUID, LSID, DOI etc.).
   */
  globalId?: string;

  /**
   * An additional ID that is used internally by the data-source.
   *
   * Quite often such IDs are used by data-sources to generate URLs to their records.
   */
  localId?: string;

  /**
   * A less normalized canonical form of the matched name with more details. It does
   * not have authors and years, but does have hybrid signes and ranks (if given).
   * This canonical form is better for presentation and creating matching scores.
   */
  matchedCanonicalFull?: string;

  /**
   * The most normalized canonical form of a scientific name. It does not contain
   * infraspecific ranks, hybrid signs for named hybrids, authors or years. This
   * canonical form is the best for matching names.
   */
  matchedCanonicalSimple?: string;

  /**
   * An external URL provided by the data-source for the record.
   */
  outlink?: string;
}

export namespace ResultData {
  /**
   * Explains which score properties participated in sorting of the data.
   *
   * Properties located higher provide more weight in the sorting.
   *
   * All properties vary from 0 to 1, where 0 has no influence on sorting, and 1 has
   * the highest priority for sorting.
   */
  export interface ScoreDetails {
    /**
     * It is at maximum if matched name marked as currently accepted.
     */
    acceptedNameScore: number;

    /**
     * It is at maximum if authors and year matched completely.
     */
    authorMatchScore: number;

    /**
     * Is 1 if cardinality matches (for example if both the input and a match are
     * `trinomials`), is 0 otherwise.
     */
    cardinalityScore: number;

    /**
     * It is at maximum for data-sources marked as `curated`.
     */
    curatedDataScore: number;

    /**
     * It is at maximum for exact matches.
     */
    fuzzyLessScore: number;

    /**
     * Is at maximum if infraspecific ranks match.
     */
    infraSpecificRankScore: number;

    /**
     * It is at maximum if no name-parsing problems were detected.
     */
    parsingQualityScore: number;
  }
}

export interface VerificationOutput {
  metadata: VerificationOutput.Metadata;

  /**
   * An array of verification results.
   */
  names?: Array<Name>;
}

export namespace VerificationOutput {
  export interface Metadata {
    /**
     * The number of names in the input.
     */
    namesNumber: number;

    /**
     * The list of selected data-sources.
     *
     * This setting is ignored if `withAllSources` is true.
     */
    dataSources?: Array<number>;

    /**
     * The kingdom that contains the majority of names according to the
     * `Catalogue of Life`.
     */
    kingdom?: string;

    /**
     * The percentage of names in the main kingdom.
     */
    kingdomPercentage?: number;

    /**
     * Distribution of names over matched kingdoms.
     */
    Kingdoms?: Array<Metadata.Kingdom>;

    /**
     * The name of the lowest taxon that still contains the majority of the input
     * names. It is calculated by matching input with the `Catalogue of Life` data and
     * uses its managerial classification. Names that did not match the
     * `Catalogue of Life` are not used for the calculation.
     */
    mainTaxon?: string;

    /**
     * The percentage of names in the `mainTaxon`.
     */
    mainTaxonPercentage?: number;

    /**
     * Indicates the lowest percentage of all names that would make a taxon show as a
     * `mainTaxon` of entered names. The accepted range is 0.5-1.0, the default is 0.5.
     */
    mainTaxonThreshold?: number;

    /**
     * The number of names used for calculation of the context. Only names that can
     * match to names in the `Catalogue of Life` are used.
     */
    StatsNamesNum?: number;

    /**
     * If a data-source matched several times, returns all matched results.
     */
    withAllMatches?: boolean;

    /**
     * When `true`, all the data from all sources are used for matching.
     */
    withAllSources?: boolean;

    /**
     * Capitalizes the first letter of the input.
     */
    withCapitalization?: boolean;

    /**
     * Expand search to species group.
     */
    withSpeciesGroup?: boolean;

    /**
     * Uses the Catalogue of Life's classification to calculate the most prominent
     * kingdom. Also calculates the lowest taxon that contains the majority of input
     * names.
     */
    withStats?: boolean;

    /**
     * Allows fuzzy matching for uninomial names.
     */
    withUninomialFuzzyMatch?: boolean;
  }

  export namespace Metadata {
    export interface Kingdom {
      /**
       * Kingdom's name.
       */
      name: string;

      /**
       * The number of names, that matched the `Catalogue of Life` for the kingdom.
       */
      namesNum: number;

      /**
       * The percentage of names matched the kingdom.
       */
      percentage: number;
    }
  }
}

export interface VerificationCreateParams {
  nameStrings: Array<string>;

  dataSources?: Array<number>;

  /**
   * Sets the minimal percentage of names to calculate the `mainTaxon`, the lowest
   * taxon containing the majority of names. Can be set in the range of 0.5-1.0. If
   * not set, or is lower than 0.5, the value defaults to 0.5.
   */
  mainTaxonThreshold?: number;

  /**
   * If "true", returns all found matches sorted by `sortScore`.
   */
  withAllMatches?: boolean;

  /**
   * If this flag is "true", name-strings that start with low-case letter will be
   * capitalized.
   */
  withCapitalization?: boolean;

  /**
   * If this flag is "true", species names also get matched by their species group.
   * It means that the request will take in account botanical autonyms and zoological
   * coordinated names. For example, a search for `Aus bus` will also search for
   * `Aus bus bus` and vice versa.
   */
  withSpeciesGroup?: boolean;

  /**
   * If true, calculates the most prevalent kingdom and finds the lowest taxon that
   * contains the majority of names. Uses the Catalogue of life management
   * classification.
   */
  withStats?: boolean;

  /**
   * Allows fuzzy matching for uninomial names.
   */
  withUninomialFuzzyMatch?: boolean;
}

export interface VerificationRetrieveParams {
  /**
   * Return all found matches, not only the best one. Multiple results are returned
   * in `results`. These results are sorted by matching quality, the first result is
   * the same as `bestResult`.
   */
  all_matches?: boolean;

  /**
   * Capitalizes the first letter of a name-string.
   */
  capitalize?: boolean;

  /**
   * Array of selected data-sources IDs separated by '|'.
   */
  data_sources?: string;

  /**
   * Allows fuzzy matching for uninomial names.
   */
  fuzzy_uninomial?: boolean;

  /**
   * Takes values from 0.5 to 1, sets the minimal percentage for the `main taxon`
   * discovery.
   */
  main_taxon_threshold?: number;

  /**
   * Expands the search to species group where applicable.
   */
  species_group?: boolean;

  /**
   * Finds out a kingdom and a taxon (`main taxon`) that contain most names. It only
   * takes in account the names matched to the `Catalogue of Life` entries. This
   * option is ignored, if the `Catalogue of Life` is not included in data-sources.
   */
  stats?: boolean;
}

export declare namespace Verifications {
  export {
    type Name as Name,
    type ResultData as ResultData,
    type VerificationOutput as VerificationOutput,
    type VerificationCreateParams as VerificationCreateParams,
    type VerificationRetrieveParams as VerificationRetrieveParams,
  };
}
