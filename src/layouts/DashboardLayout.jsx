import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

/**
 * DashboardLayout Component - Main layout wrapper with sidebar and header
 */
export const DashboardLayout = ({ isDark, setIsDark, currentPage, onNavigate, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-25" aria-hidden="true">
        <div className="absolute -top-32 -left-32 h-125 w-125 rounded-full bg-linear-to-br from-blue-400/40 to-blue-600/30 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-20 -right-48 h-125 w-125 rounded-full bg-linear-to-br from-purple-400/35 to-pink-500/25 blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-40 left-1/3 h-100 w-100 rounded-full bg-linear-to-br from-emerald-400/30 to-teal-500/20 blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isDark={isDark}
        setIsDark={setIsDark}
        currentPage={currentPage}
        onNavigate={onNavigate}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main content area */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-300 ${
        isSidebarCollapsed ? 'md:pl-16' : 'md:pl-64'
      }`}>
        {/* Header */}
        <Header 
          onNavigate={onNavigate} 
          isCollapsed={isSidebarCollapsed} 
          setIsCollapsed={setIsSidebarCollapsed}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {/* Page content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
};
