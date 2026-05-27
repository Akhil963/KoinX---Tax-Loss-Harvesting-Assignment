import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const CapitalGainsCard = ({ title, gains, netGain, savings, isAfterHarvesting }) => {
  const isPositive = netGain >= 0;
  const displayGain = Math.abs(netGain).toFixed(2);

  return (
    <div
      className={`rounded-lg p-6 ${
        isAfterHarvesting
          ? 'bg-blue-600 text-white'
          : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800'
      }`}
    >
      <h3 className="text-lg font-semibold mb-6">{title}</h3>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Short-term */}
        <div>
          <p className={`text-xs font-medium mb-3 ${isAfterHarvesting ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
            Short-term
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Profits</span>
              <span className="font-semibold">₹{gains.stcg.profits.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Losses</span>
              <span className={`font-semibold ${isAfterHarvesting ? 'text-red-200' : 'text-red-600 dark:text-red-400'}`}>
                -₹{gains.stcg.losses.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-300 dark:border-gray-700">
              <span className="text-sm font-semibold">Net Capital Gains</span>
              <span className="font-semibold">
                ₹{(gains.stcg.profits - gains.stcg.losses).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Long-term */}
        <div>
          <p className={`text-xs font-medium mb-3 ${isAfterHarvesting ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
            Long-term
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Profits</span>
              <span className="font-semibold">₹{gains.ltcg.profits.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Losses</span>
              <span className={`font-semibold ${isAfterHarvesting ? 'text-red-200' : 'text-red-600 dark:text-red-400'}`}>
                -₹{gains.ltcg.losses.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-300 dark:border-gray-700">
              <span className="text-sm font-semibold">Net Capital Gains</span>
              <span className="font-semibold">
                ₹{(gains.ltcg.profits - gains.ltcg.losses).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Realised Capital Gains */}
      <div
        className={`rounded-lg p-4 flex items-center justify-between ${
          isAfterHarvesting ? 'bg-blue-500/40' : 'bg-gray-100 dark:bg-gray-800'
        }`}
      >
        <span className="font-semibold">Realised Capital Gains:</span>
        <span className={`text-lg font-bold flex items-center space-x-1 ${!isPositive ? 'text-red-600 dark:text-red-400' : ''}`}>
          {!isPositive && <TrendingDown size={18} />}
          {isPositive && <TrendingUp size={18} className={isAfterHarvesting ? 'text-green-300' : 'text-green-600'} />}
          <span>₹{displayGain}</span>
        </span>
      </div>

      {/* Savings Message */}
      {isAfterHarvesting && savings > 0 && (
        <div className="mt-4 bg-yellow-400 text-yellow-900 rounded-lg px-4 py-3 flex items-center space-x-2">
          <span className="text-xl">🚀</span>
          <span className="font-semibold">You are going to save upto ₹{savings.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default CapitalGainsCard;
