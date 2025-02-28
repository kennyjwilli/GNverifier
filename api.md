# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingCheckResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">check</a>() -> string</code>

# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> VersionRetrieveResponse</code>

# DataSources

Types:

- <code><a href="./src/resources/data-sources.ts">DataSource</a></code>
- <code><a href="./src/resources/data-sources.ts">DataSourceListResponse</a></code>

Methods:

- <code title="get /data_sources/{id}">client.dataSources.<a href="./src/resources/data-sources.ts">retrieve</a>(id) -> DataSource</code>
- <code title="get /data_sources">client.dataSources.<a href="./src/resources/data-sources.ts">list</a>() -> DataSourceListResponse</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">Name</a></code>
- <code><a href="./src/resources/verifications.ts">ResultData</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationOutput</a></code>

Methods:

- <code title="post /verifications">client.verifications.<a href="./src/resources/verifications.ts">create</a>({ ...params }) -> VerificationOutput</code>
- <code title="get /verifications/{names}">client.verifications.<a href="./src/resources/verifications.ts">retrieve</a>(names, { ...params }) -> VerificationOutput</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchInput</a></code>
- <code><a href="./src/resources/search.ts">SearchOutput</a></code>

Methods:

- <code title="get /search/{query}">client.search.<a href="./src/resources/search.ts">find</a>(query) -> SearchOutput</code>
- <code title="post /search">client.search.<a href="./src/resources/search.ts">run</a>({ ...params }) -> SearchOutput</code>
