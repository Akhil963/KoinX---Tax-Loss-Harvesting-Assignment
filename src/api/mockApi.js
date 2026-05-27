// Mock Holdings API data
const holdingsData = [
  {
    coin: "BTC",
    coinName: "Bitcoin",
    logo: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    currentPrice: 45320.15,
    totalHolding: 0.63776,
    averageBuyPrice: 32150.25,
    stcg: {
      balance: 0.63776,
      gain: -1200
    },
    ltcg: {
      balance: 0,
      gain: 2400
    }
  },
  {
    coin: "ETH",
    coinName: "Ethereum",
    logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    currentPrice: 2450.50,
    totalHolding: 5.6736,
    averageBuyPrice: 1850.75,
    stcg: {
      balance: 5.6736,
      gain: -1200
    },
    ltcg: {
      balance: 0,
      gain: 58239.29
    }
  },
  {
    coin: "USDT",
    coinName: "Tether",
    logo: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    currentPrice: 1.00,
    totalHolding: 3096.54,
    averageBuyPrice: 1.005,
    stcg: {
      balance: 3096.54,
      gain: -1200
    },
    ltcg: {
      balance: 0,
      gain: 2400
    }
  },
  {
    coin: "MATIC",
    coinName: "Polygon",
    logo: "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    currentPrice: 0.95,
    totalHolding: 2210,
    averageBuyPrice: 0.68,
    stcg: {
      balance: 2210,
      gain: -1200
    },
    ltcg: {
      balance: 0,
      gain: 2400
    }
  },
  {
    coin: "SOL",
    coinName: "Solana",
    logo: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    currentPrice: 142.50,
    totalHolding: 15.5,
    averageBuyPrice: 95.30,
    stcg: {
      balance: 15.5,
      gain: 0
    },
    ltcg: {
      balance: 0,
      gain: 0
    }
  },
  {
    coin: "XRP",
    coinName: "Ripple",
    logo: "https://coin-images.coingecko.com/coins/images/14480/large/xrp-symbol-white-128.png?1696514009",
    currentPrice: 2.45,
    totalHolding: 500,
    averageBuyPrice: 1.50,
    stcg: {
      balance: 500,
      gain: 475
    },
    ltcg: {
      balance: 0,
      gain: -250
    }
  },
  {
    coin: "ADA",
    coinName: "Cardano",
    logo: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    currentPrice: 0.85,
    totalHolding: 1000,
    averageBuyPrice: 0.50,
    stcg: {
      balance: 1000,
      gain: 350
    },
    ltcg: {
      balance: 0,
      gain: -150
    }
  },
  {
    coin: "DOGE",
    coinName: "Dogecoin",
    logo: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    currentPrice: 0.38,
    totalHolding: 5000,
    averageBuyPrice: 0.25,
    stcg: {
      balance: 5000,
      gain: 650
    },
    ltcg: {
      balance: 0,
      gain: -300
    }
  },
  {
    coin: "LTC",
    coinName: "Litecoin",
    logo: "https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
    currentPrice: 85.50,
    totalHolding: 10,
    averageBuyPrice: 60.25,
    stcg: {
      balance: 10,
      gain: 255
    },
    ltcg: {
      balance: 0,
      gain: -120
    }
  },
  {
    coin: "BCH",
    coinName: "Bitcoin Cash",
    logo: "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501468",
    currentPrice: 425.75,
    totalHolding: 5,
    averageBuyPrice: 300,
    stcg: {
      balance: 5,
      gain: 630
    },
    ltcg: {
      balance: 0,
      gain: -280
    }
  },
  {
    coin: "LINK",
    coinName: "Chainlink",
    logo: "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    currentPrice: 28.50,
    totalHolding: 100,
    averageBuyPrice: 18.75,
    stcg: {
      balance: 100,
      gain: 975
    },
    ltcg: {
      balance: 0,
      gain: -425
    }
  }
];

// Mock Capital Gains API data
const capitalGainsData = {
  capitalGains: {
    stcg: {
      profits: 70200.88,
      losses: 1548.53
    },
    ltcg: {
      profits: 5020,
      losses: 3050
    }
  }
};

// Simulate async API calls with promises
export const fetchHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holdingsData);
    }, 500);
  });
};

export const fetchCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capitalGainsData);
    }, 500);
  });
};

// Get the raw data directly
export const getHoldingsData = () => holdingsData;
export const getCapitalGainsData = () => capitalGainsData;
