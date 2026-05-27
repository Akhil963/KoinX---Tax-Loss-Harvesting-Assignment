import React, { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

const ImportantNotes = () => {
  const [isOpen, setIsOpen] = useState(true);

  const notes = [
    "Tax harvesting is not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
    "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
    "Price and market value data is fetched from Coingecko. Not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
    "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.",
    "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted."
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <AlertCircle size={20} className="text-blue-500 flex-shrink-0" />
          <span className="font-semibold text-gray-900 dark:text-white">Important Notes & Disclaimers</span>
        </div>
        <ChevronDown
          size={20}
          className={`text-gray-600 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-blue-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
          <ul className="space-y-3">
            {notes.map((note, index) => (
              <li key={index} className="flex space-x-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImportantNotes;
