# Changelog

## 0.1.0-alpha.6 (2025-04-11)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/kennyjwilli/GNverifier/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#40](https://github.com/kennyjwilli/GNverifier/issues/40)) ([71ee2af](https://github.com/kennyjwilli/GNverifier/commit/71ee2af5969ac1e15486d54b22a403ab4abed2f7))
* **client:** send all configured auth headers ([#43](https://github.com/kennyjwilli/GNverifier/issues/43)) ([17f507f](https://github.com/kennyjwilli/GNverifier/commit/17f507f217d046061504becc7d16b66b6890bbe5))
* **internal:** fix file uploads in node 18 jest ([1c5cb0c](https://github.com/kennyjwilli/GNverifier/commit/1c5cb0ccab8baf57e070b92a323183a0730bdbe4))
* **mcp:** remove unused tools.ts ([#42](https://github.com/kennyjwilli/GNverifier/issues/42)) ([62b5707](https://github.com/kennyjwilli/GNverifier/commit/62b57079642b235e78c0aab5326cc6329d5399bf))


### Chores

* **internal:** improve node 18 shims ([7df4462](https://github.com/kennyjwilli/GNverifier/commit/7df4462dd4f943a6eda87c4681b980595092a4d1))
* **internal:** reduce CI branch coverage ([707a8f8](https://github.com/kennyjwilli/GNverifier/commit/707a8f8182842ee48b426a3a698ac968f4dae1ab))
* **internal:** upload builds and expand CI branch coverage ([d36750b](https://github.com/kennyjwilli/GNverifier/commit/d36750ba0d027cd3020a8e5ed74eb808df52ff54))

## 0.1.0-alpha.5 (2025-04-03)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/kennyjwilli/GNverifier/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#37](https://github.com/kennyjwilli/GNverifier/issues/37)) ([9a10d82](https://github.com/kennyjwilli/GNverifier/commit/9a10d82c93d1efabfb0cfa6bbcabad3d57550bc5))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#35](https://github.com/kennyjwilli/GNverifier/issues/35)) ([0d3249c](https://github.com/kennyjwilli/GNverifier/commit/0d3249c907b9ed6e212061398bdf0b5af2e13588))
* **internal:** add aliases for Record and Array ([#38](https://github.com/kennyjwilli/GNverifier/issues/38)) ([55303c1](https://github.com/kennyjwilli/GNverifier/commit/55303c1b558860341474028a41019dd1dd595858))

## 0.1.0-alpha.4 (2025-03-20)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/kennyjwilli/GNverifier/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Chores

* **exports:** cleaner resource index imports ([#31](https://github.com/kennyjwilli/GNverifier/issues/31)) ([89adb98](https://github.com/kennyjwilli/GNverifier/commit/89adb98528ea67c3ca4afcfeabd272b0aaf1f1d3))
* **exports:** stop using path fallbacks ([#33](https://github.com/kennyjwilli/GNverifier/issues/33)) ([598fda8](https://github.com/kennyjwilli/GNverifier/commit/598fda89f4f07c78fc69eda3938755f3f35f8d41))

## 0.1.0-alpha.3 (2025-03-19)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/kennyjwilli/GNverifier/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* **internal:** minor client file refactoring ([#28](https://github.com/kennyjwilli/GNverifier/issues/28)) ([8b69383](https://github.com/kennyjwilli/GNverifier/commit/8b69383ae8d3423ec5c651fe347ae2a204639f25))

## 0.1.0-alpha.2 (2025-03-15)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/kennyjwilli/GNverifier/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Bug Fixes

* **internal:** add mts file + crypto shim types ([#26](https://github.com/kennyjwilli/GNverifier/issues/26)) ([9dd53d6](https://github.com/kennyjwilli/GNverifier/commit/9dd53d6ee3a546e4d826e8cfe8f95cd51a74209a))


### Chores

* **internal:** remove extra empty newlines ([#24](https://github.com/kennyjwilli/GNverifier/issues/24)) ([9713840](https://github.com/kennyjwilli/GNverifier/commit/971384040c41524a8d0228992b41b45db2d2142f))

## 0.1.0-alpha.1 (2025-03-11)

Full Changelog: [v0.0.1-alpha.4...v0.1.0-alpha.1](https://github.com/kennyjwilli/GNverifier/compare/v0.0.1-alpha.4...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#20](https://github.com/kennyjwilli/GNverifier/issues/20)) ([6b56804](https://github.com/kennyjwilli/GNverifier/commit/6b56804c5e85e171213ac4047e8e70e59bf0231c))
* **client:** accept RFC6838 JSON content types ([#22](https://github.com/kennyjwilli/GNverifier/issues/22)) ([0e8dbaa](https://github.com/kennyjwilli/GNverifier/commit/0e8dbaa95977edd3f4a806c1d419e139bbe66d9c))

## 0.0.1-alpha.4 (2025-03-05)

Full Changelog: [v0.0.1-alpha.3...v0.0.1-alpha.4](https://github.com/kennyjwilli/GNverifier/compare/v0.0.1-alpha.3...v0.0.1-alpha.4)

### Chores

* **docs:** improve docs for withResponse/asResponse ([#18](https://github.com/kennyjwilli/GNverifier/issues/18)) ([4a630b6](https://github.com/kennyjwilli/GNverifier/commit/4a630b69c2543bc79d7b2cf4d5b2f1f6ece6afd8))
* **types:** improved go to definition on fetchOptions ([#16](https://github.com/kennyjwilli/GNverifier/issues/16)) ([e47b48c](https://github.com/kennyjwilli/GNverifier/commit/e47b48cf7f8166359f3afdaf526aef2197cc9535))

## 0.0.1-alpha.3 (2025-03-04)

Full Changelog: [v0.0.1-alpha.2...v0.0.1-alpha.3](https://github.com/kennyjwilli/GNverifier/compare/v0.0.1-alpha.2...v0.0.1-alpha.3)

### Bug Fixes

* **client:** fix TypeError with undefined File ([#12](https://github.com/kennyjwilli/GNverifier/issues/12)) ([d4a35aa](https://github.com/kennyjwilli/GNverifier/commit/d4a35aabbbddfcaddf0a4b62e3571b4a151b681a))
* **internal:** clean up undefined File test ([#13](https://github.com/kennyjwilli/GNverifier/issues/13)) ([518ddcd](https://github.com/kennyjwilli/GNverifier/commit/518ddcd8e1e48e439e5fb12b6923e8bcfec8b4d2))
* **tests:** manually reset node:buffer File ([#14](https://github.com/kennyjwilli/GNverifier/issues/14)) ([5fb4643](https://github.com/kennyjwilli/GNverifier/commit/5fb4643bb4e23ba8d8223b7c9b7b4757826b225b))


### Chores

* **client:** only accept standard types for file uploads ([#8](https://github.com/kennyjwilli/GNverifier/issues/8)) ([db8d5c7](https://github.com/kennyjwilli/GNverifier/commit/db8d5c71817bbc874d2a84d3b5798dbca43d5789))
* **internal:** constrain synckit dev dependency ([#11](https://github.com/kennyjwilli/GNverifier/issues/11)) ([1e7ebf6](https://github.com/kennyjwilli/GNverifier/commit/1e7ebf6aeea7eecb77f29c58185803197e1f0788))
* **internal:** fix tests failing on node v18 ([#10](https://github.com/kennyjwilli/GNverifier/issues/10)) ([4bcbc01](https://github.com/kennyjwilli/GNverifier/commit/4bcbc0187196b51e232d267e3196f6c1105f7dd0))

## 0.0.1-alpha.2 (2025-02-28)

Full Changelog: [v0.0.1-alpha.1...v0.0.1-alpha.2](https://github.com/kennyjwilli/GNverifier/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)

### Chores

* update SDK settings ([#5](https://github.com/kennyjwilli/GNverifier/issues/5)) ([a280712](https://github.com/kennyjwilli/GNverifier/commit/a2807129a5659158e4671b2da27c23f5f9145baa))

## 0.0.1-alpha.1 (2025-02-28)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/kennyjwilli/GNverifier/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* go live ([#1](https://github.com/kennyjwilli/GNverifier/issues/1)) ([b3eed6e](https://github.com/kennyjwilli/GNverifier/commit/b3eed6e7d704e016c679304bfc7b679d020a2a73))
* update SDK settings ([#3](https://github.com/kennyjwilli/GNverifier/issues/3)) ([b8059f6](https://github.com/kennyjwilli/GNverifier/commit/b8059f6e78e76dae637a82ace9e730c393c6314b))
