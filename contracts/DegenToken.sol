// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {

    struct NFT {
        uint256 id;
        string name;
        uint256 amount;
    }

    NFT[] public NFTs;
    mapping(uint256 => bool) public redeemedNFTs;
    event NFTRedeemed(uint256 indexed nftId, string name, uint256 amount);

    constructor() ERC20("Degen", "DGN") {
        NFTs.push(NFT(1, "Micro NFT", 50));
        NFTs.push(NFT(2, "Golden Spyglass", 100));
    }

    function mintTokens(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function transferTokens(address recipient, uint256 amount) external {
        _transfer(_msgSender(), recipient, amount);
    }

    function showRedeemPrizes() external view returns (NFT[] memory) {
        return NFTs;
    }

    function redeemTokens(uint256 choice) external {
        require(choice >= 1 && choice <= NFTs.length, "Invalid");
        require(!redeemedNFTs[choice], "NFT already redeemed");

        uint256 prizeAmount = NFTs[choice - 1].amount;
        require(balanceOf(_msgSender()) >= prizeAmount, "Insufficient balance");

        _burn(_msgSender(), prizeAmount);
        emit NFTRedeemed(NFTs[choice - 1].id, NFTs[choice - 1].name, prizeAmount);
        redeemedNFTs[choice] = true;
    }

    function burnTokens(uint256 amount) external {
        _burn(_msgSender(), amount);
    }

    function checkBalance() external view returns (uint256) {
        return balanceOf(_msgSender());
    }

    // Override the name function to return the name of the token
    function name() public view virtual override returns (string memory) {
        return "Degen";
    }
}
