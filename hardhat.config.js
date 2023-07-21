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

    const accounts = process.env.WALLET_PRIVATE_KEY
  ? [
      process.env.WALLET_PRIVATE_KEY,
      process.env.WALLET_PRIVATE_KEY_2,
      process.env.WALLET_PRIVATE_KEY_3,
    ]
  : [process.env.WALLET_PRIVATE_KEY];

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
