import React from 'react'
const Dashboard = React.lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })))
const Orders = React.lazy(() => import('./pages/Orders').then(m => ({ default: m.Orders })))
const Products = React.lazy(() => import('./pages/Products').then(m => ({ default: m.Products })))
const Customers = React.lazy(() => import('./pages/Customers').then(m => ({ default: m.Customers })))
const Analytics = React.lazy(() => import('./pages/Analytics').then(m => ({ default: m.Analytics })))
const Settings = React.lazy(() => import('./pages/Settings').then(m => ({ default: m.Settings })))
const Profile = React.lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })))
import { DashboardLayout } from './layouts/DashboardLayout'

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard')
  const [isDark, setIsDark] = React.useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true // Default to dark mode
  })

  // Apply dark mode class on mount and when isDark changes
  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [isDark])

  const renderPage = React.useCallback(() => {
    return (
      <React.Suspense fallback={<div className="flex items-center justify-center h-screen"><span>Loading...</span></div>}>
        {(() => {
          switch (currentPage) {
            case 'orders':
              return <Orders />
            case 'products':
              return <Products />
            case 'customers':
              return <Customers />
            case 'analytics':
              return <Analytics />
            case 'settings':
              return <Settings />
            case 'profile':
              return <Profile />
            case 'dashboard':
            default:
              return <Dashboard />
          }
        })()}
      </React.Suspense>
    )
  }, [currentPage])

  const handleNavigate = React.useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <DashboardLayout
      isDark={isDark}
      setIsDark={setIsDark}
      currentPage={currentPage}
      onNavigate={handleNavigate}
    >
      {renderPage()}
    </DashboardLayout>
  )
}

export default App
