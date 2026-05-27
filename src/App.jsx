import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ImportantNotes from './components/ImportantNotes';
import CapitalGainsCard from './components/CapitalGainsCard';
import HoldingsTable from './components/HoldingsTable';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchHoldings, fetchCapitalGains } from './api/mockApi';
import { useCapitalGains } from './hooks/useCapitalGains';

// Default capital gains structure
const DEFAULT_GAINS = {
  capitalGains: {
    stcg: { profits: 0, losses: 0 },
    ltcg: { profits: 0, losses: 0 }
  }
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [holdings, setHoldings] = useState([]);
  const [initialCapitalGains, setInitialCapitalGains] = useState(DEFAULT_GAINS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize hook with default values
  const {
    capitalGains,
    selectedHoldings,
    toggleHolding,
    selectAll,
    deselectAll,
    getNetCapitalGain,
    getSavings,
  } = useCapitalGains(initialCapitalGains);

  // Load data from APIs
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [holdingsData, gainsData] = await Promise.all([
          fetchHoldings(),
          fetchCapitalGains(),
        ]);
        setHoldings(holdingsData);
        setInitialCapitalGains(gainsData);
      } catch (err) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 className="text-red-800 dark:text-red-200 font-semibold">Error Loading Data</h3>
            <p className="text-red-700 dark:text-red-300 text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  const preHarvestingGain = getNetCapitalGain(initialCapitalGains.capitalGains);
  const postHarvestingGain = getNetCapitalGain(capitalGains.capitalGains);
  const savings = getSavings(initialCapitalGains, capitalGains);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tax Harvesting</h1>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
              How it works?
            </a>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8">
          <ImportantNotes />
        </div>

        {/* Capital Gains Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CapitalGainsCard
            title="Pre Harvesting"
            gains={initialCapitalGains.capitalGains}
            netGain={preHarvestingGain}
            savings={0}
            isAfterHarvesting={false}
          />
          <CapitalGainsCard
            title="After Harvesting"
            gains={capitalGains.capitalGains}
            netGain={postHarvestingGain}
            savings={savings}
            isAfterHarvesting={true}
          />
        </div>

        {/* Holdings Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Holdings</h2>
          <HoldingsTable
            holdings={holdings}
            selectedHoldings={selectedHoldings}
            onToggleHolding={toggleHolding}
            onSelectAll={selectAll}
            onDeselectAll={deselectAll}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
