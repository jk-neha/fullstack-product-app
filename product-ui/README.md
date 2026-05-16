# StockVault UI — Product Inventory Frontend

A modern, dark-themed React frontend for your FastAPI product management backend.

## Setup

```bash
cd product-ui
npm install
npm start
```

The app runs on **http://localhost:3000** and proxies API calls to your backend at **http://localhost:8000**.

## Project Structure

```
src/
├── App.js                    # Root component, state management, API calls
├── index.js                  # React entry point
├── components/
│   ├── ProductTable.js       # Sortable table with skeleton loader
│   ├── ProductModal.js       # Add / Edit form modal with validation
│   ├── SearchBar.js          # Live search with clear button
│   ├── StatsBar.js           # Dashboard stats (total, value, low stock)
│   └── Toast.js              # Animated success/error notifications
└── styles/
    ├── global.css            # CSS variables, fonts, reset
    ├── App.css               # Layout, header, overlays, dialogs
    ├── ProductTable.css      # Table, skeleton, badges
    ├── ProductModal.css      # Modal form styles
    ├── StatsBar.css          # Stat cards
    ├── SearchBar.css         # Search input
    └── Toast.css             # Toast notifications
```

## Features
- **Dashboard stats** — total products, units, inventory value, low-stock count
- **Sortable table** — click any column header to sort ascending/descending
- **Live search/filter** — search by name, description, or ID
- **Add / Edit modal** — form with inline validation
- **Delete confirmation** — confirm dialog before deletion
- **Loading skeletons** — animated placeholders while fetching
- **Toast notifications** — success/error feedback on every action
- **Error state** — clear UI when backend is unreachable
- **Fully responsive** — works on mobile, tablet, desktop
