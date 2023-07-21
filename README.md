# DegenToken

DegenToken is an ERC-20 token smart contract that allows users to mint, transfer, and burn tokens. Additionally, it includes functionalities for redeeming non-fungible tokens (NFTs) with the minted tokens. The contract is written in Solidity and follows version 0.8.18.

## Smart Contract Details

### License

This smart contract is released under the MIT License. The license text can be found at the beginning of the contract:

```solidity
// SPDX-License-Identifier: MIT
```

### Dependencies

The contract imports two external contracts from the OpenZeppelin library:

1. ERC20.sol: This is an ERC-20 token implementation with standard functionality.
2. Ownable.sol: This contract provides a basic access control mechanism with an owner who can perform certain restricted actions.

### Contract Structure

The DegenToken contract inherits from two imported contracts: ERC20 and Ownable.

#### ERC20

This contract implements the ERC-20 token standard, providing basic token functionality, including the `balanceOf`, `transfer`, and `transferFrom` methods.

#### Ownable

The Ownable contract is used to grant administrative control to a single owner who has the authority to perform specific actions, such as minting new tokens. Only the contract owner can execute functions with the `onlyOwner` modifier.

### Struct

The contract defines a struct named `NFT` with the following properties:

- `id`: A unique identifier for the NFT.
- `name`: A string representing the name of the NFT.
- `amount`: The amount of tokens required to redeem the NFT.

### Events

The contract defines one event:

1. `NFTRedeemed`: This event is emitted when a user redeems an NFT. It includes the `nftId`, `name`, and `amount` of the redeemed NFT.

### Constructor

The constructor initializes the DegenToken contract by setting the token name and symbol (`"Degen"` and `"DGN"`, respectively) and adding two predefined NFTs to the `NFTs` array.

### Functions

The DegenToken contract provides the following functions:

1. `mintTokens`: Allows the contract owner to mint new tokens and send them to a specified address.

2. `transferTokens`: Allows users to transfer tokens to another address.

3. `showRedeemPrizes`: Allows users to view the list of available NFTs that can be redeemed.

4. `redeemTokens`: Allows users to redeem an NFT of their choice by burning the required amount of tokens.

5. `burnTokens`: Allows users to burn their tokens.

6. `checkBalance`: Allows users to check their token balance.

7. `name` (overridden function): Returns the name of the token ("Degen").

## Usage

1. Deploy the smart contract on the Ethereum blockchain with Solidity version 0.8.18 or later.
2. The contract owner can mint new tokens using the `mintTokens` function.
3. Users can transfer tokens to other addresses using the `transferTokens` function.
4. Users can check their token balance using the `checkBalance` function.
5. Users can view the available NFTs for redemption using the `showRedeemPrizes` function.
6. To redeem an NFT, users should call the `redeemTokens` function with the appropriate choice (1 or 2) and burn the required amount of tokens.
7. Users can burn their tokens using the `burnTokens` function.

Please exercise caution when using this contract on the mainnet or any other production environment. Ensure that you have properly audited the code and considered all potential security risks before deployment.

Note: The contract uses the OpenZeppelin library, which provides well-tested implementations of ERC-20 tokens and access control mechanisms. Ensure that the correct version of the library is used during deployment.
