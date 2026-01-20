import React from 'react'
import { Dashboard } from './pages/Dashboard'
import { Orders } from './pages/Orders'
import { Products } from './pages/Products'
import { Customers } from './pages/Customers'
import { Analytics } from './pages/Analytics'
import { Settings } from './pages/Settings'
import { Profile } from './pages/Profile'
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
