import React from 'react';
import { Card } from '../components/Card';
import { RecentOrders } from '../components/RecentOrders';

export const Orders = () => {
  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Orders</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Track recent orders and fulfillment status.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
        <div className="xl:col-span-2">
          <RecentOrders />
        </div>
        <Card className="p-5 sm:p-6 h-full">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Fulfillment Tips</h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• Prioritize pending and high-value orders first.</li>
            <li>• Communicate shipping delays proactively.</li>
            <li>• Verify addresses before label printing.</li>
            <li>• Offer expedited options to reduce churn.</li>
          </ul>
        </Card>
      </div>
    </>
  );
};
