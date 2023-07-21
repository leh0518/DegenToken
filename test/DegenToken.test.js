const { expect } = require("chai");
const { ethers } = require("hardhat");
require('dotenv').config();
const readline = require('readline');
const { promisify } = require("util");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

describe("DegenToken", function () {
    let DegenToken;
    let degentoken;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        DegenToken = await ethers.getContractFactory("DegenToken");

        // Deploy or attach contract based on the network
        if (network.name === "hardhat") {
            degentoken = await DegenToken.deploy();
        } else if (network.name === "fuji") {
            const contractAddress = "0xfe845f00a44030652725ab3334c0e3Fa2b759f9f";
            degentoken = await DegenToken.attach(contractAddress);
        }

        // Get signers for owner and two other addresses
        [owner, addr1, addr2] = await ethers.getSigners();
    });

    it("Should allow only the owner to mint tokens", async function () {
        // Test logic for minting tokens by the owner
        // Test logic for trying to mint tokens by addr1 (should fail with revert)
    });

    it("Should transfer tokens between accounts", async function () {
        // Mint tokens to addr1 and then transfer to addr2
        // Check balances after transfer
    });

    it("Should allow anyone to redeem tokens", async function () {
        // Mint tokens to addr1 and then let addr1 redeem a prize
        // Show redeem prizes, get user input, redeem, and check balances
    });

    it("Should allow anyone to burn tokens they own", async function () {
        // Mint tokens to addr1 and then burn them
        // Check balance after burning
    });

    it("Should return the correct token balance", async function () {
        // Mint and burn tokens for the owner and check the balance
    });
});
