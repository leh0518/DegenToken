require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const NETWORK_IDS = {
  HARDHAT: 43112,
  FUJI: 43113,
  MAINNET: 43114,
};

const forkingData = process.env.FORK_FUJI === "true"
  ? {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  }
  : process.env.FORK_MAINNET === "true"
    ? {
      url: "https://api.avax.network/ext/bc/C/rpc",
    }
    : undefined;

    const accounts = forkingData
    ? [
        "0xa74213ac35d69353e12f3e1dbd15de26c78e7309442ca35a421f536810763de5",
        "0x5d5f20db3364d83f527fee23a45ce3251cb050c47c656e650fff31df58238d22",
        "0x605c61e5fa66504067692e5c4d5915ff3fd89ccef2621b8d27bc67a0efbf2e5f",
      ]
    : ["a74213ac35d69353e12f3e1dbd15de26c78e7309442ca35a421f536810763de5"];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: process.env.SNOWTRACE_API_KEY,
  },
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 25000000000,
      chainId: NETWORK_IDS.HARDHAT,
      forking: forkingData,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 25000000000,
      chainId: NETWORK_IDS.FUJI,
      accounts: accounts,
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      gasPrice: 25000000000,
      chainId: NETWORK_IDS.MAINNET,
      accounts: accounts,
    },
  },
};
