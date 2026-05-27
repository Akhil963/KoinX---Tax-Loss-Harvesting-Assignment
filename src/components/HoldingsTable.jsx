import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HoldingsTable = ({
  holdings,
  selectedHoldings,
  onToggleHolding,
  onSelectAll,
  onDeselectAll,
}) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const isAllSelected = selectedHoldings.size === holdings.length;
  const isAnySelected = selectedHoldings.size > 0;

  const handleToggleAll = () => {
    if (isAllSelected) {
      onDeselectAll(holdings);
    } else {
      onSelectAll(holdings);
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatBalance = (num) => {
    return num.toFixed(num < 1 ? 8 : 4);
  };

  const visibleHoldings = holdings.slice(0, visibleCount);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleToggleAll}
                    className="w-4 h-4 rounded cursor-pointer accent-blue-600"
                  />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Asset</span>
                </div>
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Holdings
                <div className="text-xs font-normal text-gray-500">Current Market Price</div>
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Total Current Value</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Short-Term Gain</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Long-Term Gain</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Amount to Sell</th>
            </tr>
          </thead>
          <tbody>
            {visibleHoldings.map((holding) => {
              const isSelected = selectedHoldings.has(holding.coin);
              const currentValue = holding.totalHolding * holding.currentPrice;

              return (
                <tr
                  key={holding.coin}
                  className={`border-b border-gray-200 dark:border-gray-700 transition-colors ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-900/20'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onToggleHolding(holding.coin, holdings)}
                        className="w-4 h-4 rounded cursor-pointer accent-blue-600"
                      />
                      <div className="flex items-center space-x-2">
                        <img
                          src={holding.logo}
                          alt={holding.coin}
                          className="w-8 h-8 rounded-full"
                          onError={(e) => {
                            e.target.src =
                              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23e5e7eb"/%3E%3C/svg%3E';
                          }}
                        />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{holding.coin}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{holding.coinName}</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {formatBalance(holding.totalHolding)} {holding.coin}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        ₹{formatNumber(holding.averageBuyPrice)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">
                      ₹{formatNumber(currentValue)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className={`font-medium ${holding.stcg.gain < 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                        ₹{formatNumber(holding.stcg.gain)}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {formatBalance(holding.stcg.balance)} {holding.coin}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className={`font-medium ${holding.ltcg.gain < 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                        ₹{formatNumber(holding.ltcg.gain)}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {formatBalance(holding.ltcg.balance)} {holding.coin}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {isSelected ? formatBalance(holding.totalHolding) : '-'} {isSelected ? holding.coin : ''}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {visibleCount < holdings.length && (
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
          <button
            onClick={() => setVisibleCount(holdings.length)}
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center space-x-1"
          >
            <span>View all</span>
            <ChevronDown size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default HoldingsTable;
