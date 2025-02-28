// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GNverifier from 'GNverifier';

const client = new GNverifier({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource verifications', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.verifications.create({
      nameStrings: ['Pomatomus soltator', 'Bubo bubo (Linnaeus, 1758)', 'Isoetes longissimum'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.verifications.create({
      nameStrings: ['Pomatomus soltator', 'Bubo bubo (Linnaeus, 1758)', 'Isoetes longissimum'],
      dataSources: [1, 12, 170],
      mainTaxonThreshold: 0.6,
      withAllMatches: false,
      withCapitalization: false,
      withSpeciesGroup: false,
      withStats: true,
      withUninomialFuzzyMatch: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.verifications.retrieve('Pomatomus soltator|Bubo bubo|Isoetes longissimum');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.verifications.retrieve(
        'Pomatomus soltator|Bubo bubo|Isoetes longissimum',
        {
          all_matches: false,
          capitalize: false,
          data_sources: '1|12',
          fuzzy_uninomial: false,
          main_taxon_threshold: 0.5,
          species_group: false,
          stats: false,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(GNverifier.NotFoundError);
  });
});
