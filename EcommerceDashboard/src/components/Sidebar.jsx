import React from 'react';
import { Menu, X, Moon, Sun, LayoutDashboard, ShoppingCart, Package, Users, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { dashboardData } from '../data/dashboardData';

/**
 * Sidebar Component - Navigation sidebar with collapsible functionality
 */
export const Sidebar = ({ isOpen, setIsOpen, isDark, setIsDark, currentPage, onNavigate, isCollapsed, setIsCollapsed }) => {
  const handleNavClick = () => {
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const iconMap = {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    BarChart3,
    Settings,
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-950/95 backdrop-blur text-slate-900 dark:text-white transition-all duration-300 z-40 shadow-2xl shadow-slate-950/30 border-r border-slate-200 dark:border-slate-800 group ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${
          isCollapsed ? 'md:w-16 md:hover:w-64' : 'md:w-64'
        } w-64`}
      >
        {/* Logo area */}
        <div className={`border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${
          isCollapsed ? 'md:p-3 md:group-hover:p-6' : 'p-6'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold shrink-0">
                📊
              </div>
              <h1 className={`text-lg font-bold whitespace-nowrap transition-all duration-300 ${
                isCollapsed ? 'md:w-0 md:opacity-0 md:group-hover:w-auto md:group-hover:opacity-100' : 'w-auto opacity-100'
              }`}>Ecommerce</h1>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-all shrink-0 ${
                isCollapsed ? 'md:hidden md:group-hover:block' : 'hidden md:block'
              }`}
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`space-y-2 overflow-y-auto h-[calc(100vh-180px)] transition-all duration-300 ${
          isCollapsed ? 'md:p-3 md:group-hover:p-6' : 'p-6'
        }`}>
          {dashboardData.navigationItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className="relative group/tooltip">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate(item.key);
                    handleNavClick();
                  }}
                  className={`w-full flex items-center rounded-lg text-left transition-all duration-200 text-base font-medium ${
                    currentPage === item.key
                      ? 'bg-linear-to-r from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-900/30'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  } ${
                    isCollapsed ? 'md:justify-center md:px-3 md:py-3 md:group-hover:justify-start md:group-hover:px-4 md:group-hover:gap-3' : 'px-4 py-3 gap-3'
                  }`}
                >
                  {Icon ? <Icon className="w-5 h-5 shrink-0" /> : <span className="w-5 h-5 shrink-0" aria-hidden />}
                  <span className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                    isCollapsed ? 'md:w-0 md:opacity-0 md:group-hover:w-auto md:group-hover:opacity-100' : 'w-auto opacity-100'
                  }`}>{item.label}</span>
                </button>
                
                {/* Floating tooltip on hover when collapsed */}
                {isCollapsed && (
                  <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-base font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover:opacity-0 group-hover:invisible transition-all duration-200 z-50 pointer-events-none border border-slate-200 dark:border-slate-700/50">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Dark mode toggle at bottom */}
        <div className={`absolute bottom-6 left-0 right-0 transition-all duration-300 ${
          isCollapsed ? 'md:px-3 md:group-hover:px-6' : 'px-6'
        }`}>
          <div className="relative group/tooltip">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`w-full flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-base font-medium shadow-inner shadow-slate-900/30 ${
                isCollapsed ? 'md:justify-center md:px-3 md:py-3 md:group-hover:justify-center md:group-hover:px-4 md:group-hover:gap-2' : 'justify-center gap-2 px-4 py-3'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
              <span className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isCollapsed ? 'md:w-0 md:opacity-0 md:group-hover:w-auto md:group-hover:opacity-100' : 'w-auto opacity-100'
              }`}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
            
            {/* Floating tooltip on hover when collapsed */}
            {isCollapsed && (
              <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-base font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover:opacity-0 group-hover:invisible transition-all duration-200 z-50 pointer-events-none border border-slate-200 dark:border-slate-700/50">
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
