import { useState, useCallback, useEffect } from 'react';

export const useCapitalGains = (initialCapitalGains) => {
  const [capitalGains, setCapitalGains] = useState(initialCapitalGains);
  const [selectedHoldings, setSelectedHoldings] = useState(new Set());

  // Update capitalGains whenever initialCapitalGains changes (e.g., after API load)
  useEffect(() => {
    setCapitalGains(initialCapitalGains);
  }, [initialCapitalGains]);

  const calculateCapitalGains = useCallback((holdings, selected) => {
    // Start with base capital gains
    const gains = JSON.parse(JSON.stringify(initialCapitalGains.capitalGains));

    // For each selected holding, add its gains to the capital gains
    selected.forEach((coinName) => {
      const holding = holdings.find(h => h.coin === coinName);
      if (holding) {
        // Add short-term gains
        if (holding.stcg.gain > 0) {
          gains.stcg.profits += holding.stcg.gain;
        } else {
          gains.stcg.losses += Math.abs(holding.stcg.gain);
        }

        // Add long-term gains
        if (holding.ltcg.gain > 0) {
          gains.ltcg.profits += holding.ltcg.gain;
        } else {
          gains.ltcg.losses += Math.abs(holding.ltcg.gain);
        }
      }
    });

    return gains;
  }, [initialCapitalGains]);

  const toggleHolding = useCallback((coinName, holdings) => {
    setSelectedHoldings((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(coinName)) {
        newSelected.delete(coinName);
      } else {
        newSelected.add(coinName);
      }

      // Update capital gains based on new selection
      const newGains = calculateCapitalGains(holdings, newSelected);
      setCapitalGains({ capitalGains: newGains });

      return newSelected;
    });
  }, [calculateCapitalGains]);

  const selectAll = useCallback((holdings) => {
    const allCoinNames = holdings.map(h => h.coin);
    setSelectedHoldings(new Set(allCoinNames));

    const newGains = calculateCapitalGains(holdings, new Set(allCoinNames));
    setCapitalGains({ capitalGains: newGains });
  }, [calculateCapitalGains]);

  const deselectAll = useCallback((holdings) => {
    setSelectedHoldings(new Set());
    const newGains = calculateCapitalGains(holdings, new Set());
    setCapitalGains({ capitalGains: newGains });
  }, [calculateCapitalGains]);

  const getNetCapitalGain = (gains) => {
    const stcgNet = gains.stcg.profits - gains.stcg.losses;
    const ltcgNet = gains.ltcg.profits - gains.ltcg.losses;
    return stcgNet + ltcgNet;
  };

  const getSavings = (preGains, postGains) => {
    const preNet = getNetCapitalGain(preGains.capitalGains);
    const postNet = getNetCapitalGain(postGains.capitalGains);
    return preNet - postNet;
  };

  return {
    capitalGains,
    selectedHoldings,
    toggleHolding,
    selectAll,
    deselectAll,
    getNetCapitalGain,
    getSavings,
  };
};
