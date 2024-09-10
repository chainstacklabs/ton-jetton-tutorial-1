# TON: How to develop fungible tokens (Jettons)

For the full breakdown, see [TON: How to develop fungible tokens (Jettons)](https://docs.chainstack.com/docs/ton-how-to-develop-fungible-tokens-jettons).

## References

This project is inspired by and based on examples from the following repositories:

- [TON Blockchain Token Contract](https://github.com/ton-blockchain/token-contract/tree/main)
- [TON Blockchain Stablecoin Contract](https://github.com/ton-blockchain/stablecoin-contract)

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`
