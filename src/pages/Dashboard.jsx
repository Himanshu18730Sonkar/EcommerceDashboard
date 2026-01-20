import React from 'react';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/Card';
import { SalesChart } from '../components/SalesChart';
import { CategoryChart } from '../components/CategoryChart';
import { RevenueDistributionChart } from '../components/RevenueDistributionChart';
import { RecentOrders } from '../components/RecentOrders';
import { GaugeChart } from '../components/GaugeChart';
import { dashboardData } from '../data/dashboardData';

// Icon mapping for dynamic icon rendering
const iconMap = {
  DollarSign: DollarSign,
  ShoppingCart: ShoppingCart,
  Users: Users,
  TrendingUp: TrendingUp,
};

/**
 * Dashboard Page - Main dashboard with all widgets and charts
 */
export const Dashboard = () => {
  return (
    <>
      {/* Page header */}
      <div className="mb-8 lg:mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">Dashboard</h1>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 ml-5">Welcome back! Here's your sales performance overview.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {dashboardData.stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            isPositive={stat.isPositive}
            icon={iconMap[stat.icon]}
            bgColor={stat.bgColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {/* Sales chart - spans 2 columns on large screens */}
        <SalesChart />

        {/* Revenue distribution pie chart */}
        <RevenueDistributionChart />
      </div>

      {/* Category chart and recent orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {/* Category chart */}
        <CategoryChart />

        {/* Recent orders table - spans 2 columns on large screens */}
        <RecentOrders />
      </div>

      {/* Gauge charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <GaugeChart 
          title="Monthly Goal"
          subtitle="Revenue target progress"
          value={78500}
          maxValue={100000}
          color="#3b82f6"
        />
        <GaugeChart 
          title="Customer Satisfaction"
          subtitle="Average rating score"
          value={4.6}
          maxValue={5}
          color="#10b981"
        />
        <GaugeChart 
          title="Order Fulfillment"
          subtitle="Completed orders"
          value={1186}
          maxValue={1500}
          color="#f59e0b"
        />
      </div>
    </>
  );
};
