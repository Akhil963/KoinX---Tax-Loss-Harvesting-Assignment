# KoinX - Tax Loss Harvesting Interface

A responsive React-based Tax Loss Harvesting tool that helps users manage and visualize their cryptocurrency portfolio's capital gains/losses before and after tax-loss harvesting.

## Features

✨ **Core Features:**
- **Pre & Post Harvesting Comparison**: Side-by-side view of capital gains before and after harvesting
- **Real-time Updates**: Capital gains update instantly when holdings are selected/deselected
- **Interactive Holdings Table**: 
  - Select/deselect individual holdings or all at once
  - View detailed gain/loss information for each asset
  - Responsive table with scrolling on smaller screens
- **Tax Savings Calculation**: Shows potential tax savings when losses offset gains
- **Dark Mode Support**: Toggle between light and dark themes for comfortable viewing
- **Mobile Responsive**: Fully responsive design for all device sizes
- **Loading States**: Smooth loading indicators while data is being fetched

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript ES6+** - Programming language

## Project Structure

```
src/
├── api/
│   └── mockApi.js           # Mock API endpoints and dummy data
├── components/
│   ├── Header.jsx            # Header with dark mode toggle
│   ├── ImportantNotes.jsx    # Collapsible disclaimer section
│   ├── CapitalGainsCard.jsx  # Pre/Post harvesting cards
│   ├── HoldingsTable.jsx     # Interactive holdings table
│   └── LoadingSpinner.jsx    # Loading indicator
├── hooks/
│   └── useCapitalGains.js    # Custom hook for state management
├── App.jsx                   # Main app component
├── main.jsx                  # React entry point
├── index.css                 # Global styles & Tailwind directives
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── index.html                # HTML entry point
```

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "d:\Projects\KoinX - Tax Loss Harvesting Assignment"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized build will be in the `dist/` folder.

5. **Preview production build**
   ```bash
   npm run preview
   ```

## API Structure

### Holdings API Response
```json
[
  {
    "coin": "BTC",
    "coinName": "Bitcoin",
    "logo": "https://...",
    "currentPrice": 45320.15,
    "totalHolding": 0.63776,
    "averageBuyPrice": 32150.25,
    "stcg": { "balance": 0.63776, "gain": -1200 },
    "ltcg": { "balance": 0, "gain": 2400 }
  },
  ...
]
```

### Capital Gains API Response
```json
{
  "capitalGains": {
    "stcg": { "profits": 70200.88, "losses": 1548.53 },
    "ltcg": { "profits": 5020, "losses": 3050 }
  }
}
```

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
