import React from 'react';
import { Bell, Search, LogOut, Settings, Menu, Moon, Sun } from 'lucide-react';

/**
 * Header Component - Top navigation bar with search and user profile
 */
export const Header = ({ onNavigate, isCollapsed, setIsCollapsed, isDark, setIsDark }) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-b-2 border-slate-200 dark:border-slate-700 shadow-3d-raised">
      <div className="h-16 px-4 md:px-8 flex items-center justify-between gap-3 md:gap-4">
        {/* Sidebar toggle for desktop */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>

        {/* Search bar */}
        <div className="flex flex-1 max-w-lg">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search orders, products..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50/80 dark:bg-slate-700/70 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-3d-inset"
            />
          </div>
        </div>

        {/* Right section - notifications and profile */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full shadow-sm"></span>
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-300">
                Alex
              </span>
            </button>

            {/* Dropdown menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="p-3 border-b border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Alex Johnson</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">alex@example.com</p>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => {
                      onNavigate?.('profile');
                      setIsProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-left"
                  >
                    <Settings className="w-4 h-4" />
                    Profile & Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors text-left">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
