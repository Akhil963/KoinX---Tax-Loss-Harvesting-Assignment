# KoinX Tax Loss Harvesting Interface

A responsive React-based tax loss harvesting tool that helps cryptocurrency investors calculate and visualize potential tax savings by strategically harvesting losses from their portfolio.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [How to Run](#how-to-run)
- [API Documentation](#api-documentation)
- [Usage Guide](#usage-guide)
- [Key Calculations](#key-calculations)
- [Assumptions](#assumptions)
- [Browser Support](#browser-support)
- [Design Features](#design-features)
- [Screenshots](#screenshots)

---

## Features

### Core Functionality
- ✅ **Pre-Harvesting Card** - Displays current capital gains/losses breakdown
- ✅ **After-Harvesting Card** - Real-time updates based on selected holdings
- ✅ **Capital Gains Calculations** - Separate short-term (ST) and long-term (LT) tracking
- ✅ **Tax Savings Calculation** - Displays potential tax savings when losses are harvested
- ✅ **Holdings Table** - Interactive table with all cryptocurrency holdings
- ✅ **Interactive Selection** - Checkboxes to select/deselect holdings for harvesting
- ✅ **Select All / Deselect All** - Bulk selection functionality
- ✅ **Amount to Sell Column** - Shows quantities of selected holdings to harvest
- ✅ **Real-time UI Updates** - All calculations update instantly on selection

### Additional Features
- ✅ **Dark Mode / Light Mode** - Toggle theme in header
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **Important Notes & Disclaimers** - Expandable accordion with tax information
- ✅ **Loading States** - Skeleton/spinner during API calls
- ✅ **Error Handling** - Graceful error messages if data fails to load
- ✅ **Visual Feedback** - Color-coded gains (green) and losses (red)
- ✅ **Currency Formatting** - Displays values in Indian Rupees (₹)
- ✅ **Crypto Logos** - Shows coin icons from CoinGecko
- ✅ **View All Holdings** - Expandable table to see all holdings

---

## Tech Stack

### Frontend
- **React** (18.x) - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript (ES6+)** - Core language

### Development Tools
- **npm** - Package manager
- **Vite** - Fast build tool with hot reload
- **PostCSS** - CSS processing

### APIs
- **Mock APIs** - Custom promises returning static data
  - `fetchHoldings()` - Returns 10 cryptocurrency holdings
  - `fetchCapitalGains()` - Returns aggregated capital gains/losses

---

## Project Structure

```
koinx-tax-loss-harvesting/
├── src/
│   ├── api/
│   │   └── mockApi.js              # Mock API data and fetch functions
│   ├── components/
│   │   ├── Header.jsx              # Top header with logo and dark mode toggle
│   │   ├── ImportantNotes.jsx       # Expandable disclaimer accordion
│   │   ├── CapitalGainsCard.jsx     # Pre/After harvesting cards
│   │   ├── HoldingsTable.jsx        # Main holdings table with checkboxes
│   │   ├── LoadingSpinner.jsx       # Loading indicator
│   │   └── CryptoLogo.jsx           # Reusable crypto logo component
│   ├── hooks/
│   │   └── useCapitalGains.js       # State management for capital gains
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── public/
│   └── [static assets]
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.js                   # Vite configuration
└── README.md                        # This file
```

---

## Setup Instructions

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation Steps

1. **Clone or navigate to the project**
   ```bash
   cd d:\Projects\KoinX\ -\ Tax\ Loss\ Harvesting\ Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run dev
   ```

   The dev server should start successfully without errors.

---

## How to Run

### Development Mode
```bash
npm run dev
```

The application will start on `http://localhost:3000` (or `http://localhost:3001` if port 3000 is in use).

**Features in Dev Mode:**
- Hot module replacement (HMR) - changes reflect instantly
- Full error messages in console
- Source maps for debugging

### Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build Locally
```bash
npm run preview
```

Preview the production build on your local machine before deployment.

---

## API Documentation

### Mock Holdings API

**Endpoint:** `fetchHoldings()`

**Response Format:**
```javascript
[
  {
    coin: "BTC",                    // Coin ticker symbol
    coinName: "Bitcoin",             // Full coin name
    logo: "https://...",             // CoinGecko logo URL
    currentPrice: 45320.15,          // Current market price in USD
    totalHolding: 0.63776,           // Total quantity held
    averageBuyPrice: 32150.25,       // Average purchase price per coin
    stcg: {                          // Short-term capital gains
      balance: 0.63776,              // Quantity with short-term gains
      gain: -1200                    // Total short-term gain/loss
    },
    ltcg: {                          // Long-term capital gains
      balance: 0,                    // Quantity with long-term gains
      gain: 2400                     // Total long-term gain/loss
    }
  },
  // ... more holdings
]
```

### Mock Capital Gains API

**Endpoint:** `fetchCapitalGains()`

**Response Format:**
```javascript
{
  capitalGains: {
    stcg: {                          // Short-term capital gains
      profits: 70200.88,             // Total short-term profits
      losses: 1548.53                // Total short-term losses
    },
    ltcg: {                          // Long-term capital gains
      profits: 5020.00,              // Total long-term profits
      losses: 3050.00                // Total long-term losses
    }
  }
}
```

---

## Usage Guide

### Step 1: View Pre-Harvesting Status
When the app loads, the left card ("Pre Harvesting") shows your current capital gains situation:
- **Short-term**: Profits vs. Losses
- **Long-term**: Profits vs. Losses
- **Realised Capital Gains**: Net total

### Step 2: Select Holdings to Harvest
The holdings table displays all your cryptocurrency assets. You can:

**Select Individual Holdings:**
- Click the checkbox next to any asset to select it for harvesting
- The "After Harvesting" card updates in real-time
- The "Amount to Sell" column shows the quantity to harvest

**Bulk Selection:**
- Click the checkbox in the table header to select/deselect all holdings at once
- Useful for quick testing of different scenarios

### Step 3: Review After-Harvesting Gains
The right card ("After Harvesting") recalculates based on your selections:
- Updated profit/loss figures
- New realised capital gains total
- **Tax Savings** message (appears when gains reduce)

### Step 4: Execute (Conceptual)
In a real application, click "Execute Harvesting" to:
- Sell the selected holdings at current market price
- Immediately repurchase to restart cost basis
- Generate tax documents

---

## Key Calculations

### Before Selection
```
Pre Harvesting:
├─ Short-term Net = Profits - Losses
├─ Long-term Net = Profits - Losses
└─ Realised Capital Gains = ST Net + LT Net
```

### After Selecting Holdings
```
After Harvesting:
1. For each selected holding:
   ├─ If stcg.gain > 0 → Add to stcg.profits
   ├─ If stcg.gain < 0 → Add to stcg.losses (as absolute value)
   ├─ If ltcg.gain > 0 → Add to ltcg.profits
   └─ If ltcg.gain < 0 → Add to ltcg.losses (as absolute value)

2. Recalculate totals:
   ├─ Short-term Net = Updated Profits - Updated Losses
   ├─ Long-term Net = Updated Profits - Updated Losses
   └─ Realised Capital Gains = ST Net + LT Net

3. Calculate Tax Savings:
   └─ Savings = Pre-Harvesting Gain - Post-Harvesting Gain
```

### Example Calculation
**Scenario:** Harvesting an asset with ST gain of ₹500 and LT loss of ₹1000

**Before:**
- ST: ₹100 profit - ₹500 loss = -₹400 net
- LT: ₹1200 profit - ₹100 loss = ₹1100 net
- **Total: ₹700**

**After Harvesting:**
- ST: ₹600 profit - ₹500 loss = ₹100 net (added ₹500 ST gain)
- LT: ₹1200 profit - ₹1100 loss = ₹100 net (added ₹1000 LT loss)
- **Total: ₹200**

**Tax Savings:** ₹500 (reduction in taxable gains)

---

## Assumptions

### Data Assumptions
1. **Mock Data**: All data is simulated for demonstration purposes
   - Holdings API returns 10 sample cryptocurrencies
   - Capital Gains API returns static aggregated gains
   - Real implementation would connect to live APIs

2. **Currency**: All monetary values are displayed in Indian Rupees (₹)
   - Conversion rate not applied
   - Real implementation should use live exchange rates

3. **Tax Categories**: Only two categories implemented
   - Short-term capital gains (ST)
   - Long-term capital gains (LT)
   - Real implementation may include wash sale rules, holding periods, etc.

### Functional Assumptions
1. **Instant Execution**: Selection immediately reflects in calculations
   - Real implementation would require confirmation and processing time

2. **No Transaction Costs**: Harvesting assumes zero fees
   - Real implementation should account for exchange fees, slippage, etc.

3. **Same-day Repurchase**: Assumes immediate reinvestment after harvesting
   - Real implementation should handle settlement periods

4. **No Tax Advisor Consultation**: UI provides calculations only
   - Users should consult tax professionals before executing

### Technical Assumptions
1. **No Authentication**: Public access to all data
   - Real implementation requires user authentication and personal data encryption

2. **No Data Persistence**: Selection state lost on page refresh
   - Real implementation would use backend database

3. **Synchronous API Calls**: All data loads instantly
   - Real implementation would handle network latency and retry logic

4. **Single Portfolio**: Only one portfolio per session
   - Real implementation would support multiple portfolios/accounts

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| IE 11 | - | ❌ Not Supported |

### Required Browser Features
- ES6 JavaScript support
- CSS Grid & Flexbox
- LocalStorage (optional, for future enhancements)

---

## Design Features

### Color Scheme
- **Light Mode**: White background, dark text
- **Dark Mode**: Dark gray background, light text
- **Accent Colors**:
  - Blue: Primary actions and "After Harvesting" card
  - Green: Positive gains
  - Red: Losses

### Responsive Breakpoints
- **Mobile**: < 640px (single column layout)
- **Tablet**: 640px - 1024px (single column, larger text)
- **Desktop**: > 1024px (two-column layout)

### Typography
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Regular weight for readability
- **Numbers**: Monospace for values and code

---

##  Screenshots

### Light Mode - Initial State
Desktop view showing the complete interface with Pre and After Harvesting cards side-by-side, Important Notes & Disclaimers accordion, and the beginning of the Holdings table.

![Light Mode Overview](./Screenshorts/Light Mode.jpe)

**Features Visible:**
- ✅ KoinX header with dark mode toggle
- ✅ "How it works?" link
- ✅ Important Notes & Disclaimers accordion
- ✅ Pre Harvesting card (left, white background)
- ✅ After Harvesting card (right, blue background)
- ✅ Realised Capital Gains calculation
- ✅ Holdings section header

### Holdings Table - Light Mode
Detailed view of the interactive holdings table with cryptocurrency assets, their gains/losses, and selection checkboxes.

![Holdings Table](./Screenshorts/Holdings Table.jpe)

**Table Features:**
- ✅ Select All / Deselect All checkbox in header
- ✅ Individual asset selection
- ✅ Asset name with logo from CoinGecko
- ✅ Holdings quantity and average buy price
- ✅ Current market value calculation
- ✅ Short-term and Long-term gains/losses
- ✅ Amount to Sell column (updates on selection)
- ✅ Color-coded values (green for gains, red for losses)
- ✅ "View all" link to expand table

### Real-time Updates - After Selection
Shows how the "After Harvesting" card updates instantly when BTC is selected from the holdings table.

![Real-time Calculation Updates](./Screenshorts/Real%20time%20AFter%20selection.jpe)

**Real-time Changes:**
- ✅ Short-term Losses: -₹1548.53 → -₹2748.53 (BTC loss added)
- ✅ Long-term Profits: ₹5020.00 → ₹7420.00 (BTC gain added)
- ✅ Net Capital Gains updated
- ✅ Realised Capital Gains: ₹70622.35 → ₹71822.35
- ✅ Selection reflected in Holdings table
- ✅ Amount to Sell column populated with quantity

### Dark Mode - Full Interface
Complete dark mode view demonstrating the theme toggle functionality.

![Dark Mode Interface](./Screenshorts/Dark Mode.jpe)

**Dark Mode Features:**
- ✅ Dark gray background for reduced eye strain
- ✅ Light text for readability
- ✅ Sun icon in header (toggle to light mode)
- ✅ Blue "After Harvesting" card maintains contrast
- ✅ All values and gains clearly visible
- ✅ Same functionality as light mode

---

### Common Issues

**Issue:** App shows "Failed to load data"
- **Solution**: Ensure dev server is running with `npm run dev`

**Issue:** Dark mode not working
- **Solution**: Click the moon icon in top-right header

**Issue:** Table doesn't show all holdings
- **Solution**: Click "View all" link at bottom of table

**Issue:** Calculations seem wrong
- **Solution**: Ensure holdings are selected (checkboxes are blue/checked)

---

## License

This project is created as part of the KoinX Frontend Intern Assignment.

---

## Future Enhancements

- [ ] Connect to real cryptocurrency APIs (CoinGecko, Binance)
- [ ] User authentication and portfolio persistence
- [ ] Tax reports generation (PDF export)
- [ ] Multiple portfolio support
- [ ] Wash sale rules implementation
- [ ] Transaction history and audit trail
- [ ] Tax advisor integration
- [ ] Advanced filtering and sorting options
- [ ] Portfolio performance analytics
- [ ] Mobile app version

---

## Development Notes

### Key Files Modified
- `src/hooks/useCapitalGains.js` - Fixed capital gains initialization to sync with API data

### Dependencies Used
- **react**: UI framework
- **vite**: Build tool
- **tailwindcss**: Styling
- **lucide-react**: Icons

### Hot Reload
Vite supports hot module replacement. Changes to component files automatically refresh the browser without losing state.

### Debugging
- Open browser DevTools (F12)
- Check Console tab for error messages
- Use React DevTools extension for component inspection

---

## Screenshots & Demo

### Desktop View
- Pre/After harvesting cards side-by-side
- Full holdings table with all columns visible
- Dark mode toggle in header

### Mobile View
- Cards stacked vertically
- Scrollable holdings table
- Collapsible disclosure accordion

### Key Interactions
1. ✅ Select individual holdings → Real-time calculation updates
2. ✅ Select All button → Bulk select all holdings
3. ✅ Deselect All button → Clear all selections
4. ✅ Toggle dark mode → Theme switches instantly
5. ✅ View All link → Expands holdings table

---


## How It Works

1. **Pre-Harvesting View**: 
   - Displays initial capital gains/losses from the Capital Gains API
   - Shows realized capital gains = Net ST gains + Net LT gains

2. **Selection Process**:
   - Users select holdings (crypto assets) from the table
   - Each selected holding's gains/losses are added to the calculation
   - Positive gains add to profits, negative gains add to losses

3. **Post-Harvesting Update**:
   - Card updates in real-time showing adjusted capital gains
   - If new net gain is lower than pre-harvesting, "You are going to save ₹X" message appears

4. **Tax Loss Harvesting Logic**:
   - Users can strategically select assets with losses
   - This reduces overall capital gains, potentially lowering tax liability

## Key Calculations

### Net Capital Gain
```
Short-term Net = ST Profits - ST Losses
Long-term Net = LT Profits - LT Losses
Realised Capital Gains = Short-term Net + Long-term Net
```

### Savings Calculation
```
Savings = Pre-Harvesting Realised Gains - Post-Harvesting Realised Gains
```

## Features in Detail

### Dark Mode
- Toggle button in header
- Persists across sessions using localStorage
- All components fully styled for both modes

### Holdings Table
- **Select All/None**: Checkbox in header to select all visible holdings
- **Expandable View**: "View all" button to show remaining holdings
- **Amount to Sell**: Shows holding balance only when selected
- **Responsive**: Horizontal scroll on small screens
- **Sorting Ready**: Structure allows for future sorting implementations

### Important Notes Section
- Collapsible accordion with tax disclaimers
- Fully accessible with keyboard navigation
- Information helpful for users understanding tax implications

## Assumptions

1. **Tax Jurisdiction**: The interface assumes Indian tax regulations (INR currency, STCG/LTCG framework)
2. **Real-time Pricing**: Current prices are assumed to be real-time (in actual use, would connect to live API)
3. **Holding Definitions**:
   - STCG: Short-term capital gains (typically < 1-2 years depending on asset type)
   - LTCG: Long-term capital gains (typically >= 1-2 years depending on asset type)
4. **Mock Data**: All API responses are mocked client-side for demo purposes
5. **No Backend Required**: The application is fully functional without a backend server
6. **User Selection Logic**: Assumes users manually select holdings to harvest
7. **Balance Updates**: Only selected holdings are considered for harvesting

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- ✅ Component memoization ready (use React.memo for table rows if needed)
- ✅ Lazy loading structure in place
- ✅ Efficient state management with React hooks
- ✅ Tailwind CSS for minimal bundle size
- ✅ Optimized re-renders with useCallback

## Future Enhancements

- [ ] Backend API integration
- [ ] Real-time price updates via WebSocket
- [ ] Export reports as PDF/CSV
- [ ] Historical tax loss data tracking
- [ ] Tax filing integration
- [ ] Advanced filtering and sorting
- [ ] Custom harvest strategies
- [ ] Multi-portfolio support
- [ ] Authentication & user accounts
- [ ] Analytics dashboard

## Styling Notes

### Color Scheme
- **Primary**: Blue (#3b82f6) - Interactive elements
- **Success**: Green - Positive gains
- **Error**: Red - Negative gains/losses
- **Warning**: Yellow - Important messages

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, Vite will automatically use the next available port.

### Dependencies Issue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure Node.js version is 16 or higher:
```bash
node --version
```

## License

This project is for educational purposes as part of the KoinX Frontend Intern Assignment.

## Support

For issues or questions, please refer to the inline code comments or create an issue in the repository.

---

**Happy Tax Harvesting! 📊💰**
