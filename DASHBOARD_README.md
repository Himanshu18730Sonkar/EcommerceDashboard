# E-commerce Admin Dashboard

A modern, production-ready e-commerce admin dashboard built with React, Vite, and Tailwind CSS. Features a professional SaaS design with responsive layout, dark mode support, and interactive charts.

## 🎯 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with Tailwind CSS
- **Interactive Charts**: 
  - Line chart for sales trends
  - Bar chart for orders by category
  - Pie chart for revenue distribution
- **Sidebar Navigation**: Collapsible sidebar with main menu items
- **Data Tables**: Recent orders table with status badges
- **Stat Cards**: Key metrics with growth indicators
- **Modern UI**: Clean spacing, soft shadows, rounded cards, smooth hover states
- **Professional SaaS Look**: Inspired by TailAdmin dashboard design

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Card.jsx         # Card and StatCard components
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── Header.jsx       # Top header with search and profile
│   ├── SalesChart.jsx   # Line chart component
│   ├── CategoryChart.jsx # Bar chart component
│   ├── RevenueDistributionChart.jsx # Pie chart component
│   ├── RecentOrders.jsx # Orders table component
│   └── index.js         # Component exports
├── layouts/
│   └── DashboardLayout.jsx # Main layout wrapper
├── pages/
│   └── Dashboard.jsx    # Main dashboard page
├── data/
│   └── dashboardData.js # Dummy data for charts and tables
├── App.jsx              # Main App component
├── index.css            # Global styles (Tailwind imports)
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd EcommerceDashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Already includes:
   - React 19
   - Vite 7
   - Tailwind CSS (modern version with @tailwindcss/vite)
   - Recharts for charts
   - Lucide-react for icons

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173` (or next available port)

4. **Build for production**
   ```bash
   npm run build
   ```

### Configuration Files

- **`vite.config.js`** - Vite configuration with React and Tailwind plugins
- **`tailwind.config.js`** - Tailwind CSS configuration with custom colors and shadows
- **`index.html`** - HTML entry point
- **`package.json`** - Project dependencies

## 🎨 Component Overview

### Card Components
- **`Card`** - Wrapper with consistent styling (shadow, border, rounded)
- **`StatCard`** - Displays metric with icon, value, and growth indicator

### Layout Components
- **`Sidebar`** - Left navigation with collapsible mobile support
- **`Header`** - Top bar with search, notifications, and user profile
- **`DashboardLayout`** - Main layout container managing sidebar and header

### Chart Components
- **`SalesChart`** - Line chart showing sales and revenue trends
- **`CategoryChart`** - Bar chart showing orders by category
- **`RevenueDistributionChart`** - Pie chart showing revenue distribution
- **`RecentOrders`** - Table displaying recent orders with status badges

## 📊 Data Structure

All dummy data is located in `src/data/dashboardData.js`:

```javascript
{
  stats: [...],                        // 4 stat cards
  salesData: [...],                    // Weekly sales data
  categoryData: [...],                 // Orders by category
  revenueDistribution: [...],          // Revenue breakdown
  recentOrders: [...],                 // Recent orders table
  navigationItems: [...]               // Sidebar navigation
}
```

## 🎭 Dark Mode

Dark mode is toggled via the button in the sidebar. Uses Tailwind's `dark:` prefix for styling:

```jsx
<div className="bg-white dark:bg-slate-800">
  Light and dark variants
</div>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Sidebar collapses, single column layout
- **Tablet**: 768px - 1024px - Sidebar visible, 2-column grid
- **Desktop**: > 1024px - Full layout, 3-4 column grids

## 🔧 Customization

### Modify Data
Edit `src/data/dashboardData.js` to change dashboard data.

### Change Colors
Update `tailwind.config.js` to modify the color palette.

### Add Routes
Extend the navigation by updating `dashboardData.navigationItems` and creating new page components.

### Modify Charts
Customize chart colors, tooltips, and data in the chart components (e.g., `SalesChart.jsx`).

## 📦 Dependencies

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (modern version)
- **Recharts** - Chart library
- **Lucide-react** - Icon library

## 🎯 Best Practices Implemented

✅ Functional components with React hooks
✅ Reusable component structure
✅ Separation of concerns (components, layouts, pages, data)
✅ Responsive design with Tailwind CSS
✅ Dark mode support
✅ Clean code with comments
✅ Dummy data in separate file
✅ Modern React patterns
✅ Professional SaaS design

## 📄 License

MIT

## 🤝 Contributing

Feel free to extend this dashboard with additional features like:
- Real API integration
- Authentication
- More pages (Orders, Products, Customers)
- Export functionality
- Real-time notifications
- Advanced filtering and search

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
