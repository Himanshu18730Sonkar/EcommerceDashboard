import React from 'react';
import { Card } from '../components/Card';
import { SalesChart } from '../components/SalesChart';
import { RevenueDistributionChart } from '../components/RevenueDistributionChart';
import { CategoryChart } from '../components/CategoryChart';

export const Analytics = () => {
  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Analytics</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Deep dive into performance metrics and trends.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <SalesChart />
        <RevenueDistributionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <CategoryChart />
        <Card className="lg:col-span-2 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Insights</h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• Weekend revenue outperforms weekdays by 12%.</li>
            <li>• Electronics and Home drive 55% of category orders.</li>
            <li>• Conversion dip aligns with inventory gaps—prioritize restocks.</li>
          </ul>
        </Card>
      </div>
    </>
  );
};
