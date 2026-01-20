import React from 'react';
import { Card } from './Card';
import { dashboardData } from '../data/dashboardData';

/**
 * RecentOrders Component - Table displaying recent orders with status badges
 */
export const RecentOrders = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'Shipped':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      case 'Pending':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'Processing':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400';
      default:
        return 'bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400';
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Orders</h3>
          <button className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
            View all orders →
          </button>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/60">
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-slate-600 dark:text-slate-400">Order ID</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-slate-600 dark:text-slate-400">Customer</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-slate-600 dark:text-slate-400">Amount</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-slate-600 dark:text-slate-400">Status</th>
                <th className="text-left py-3 px-3 sm:px-4 font-semibold text-slate-600 dark:text-slate-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/60 transition-colors">
                  <td className="py-3 px-3 sm:px-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{order.id}</td>
                  <td className="py-3 px-3 sm:px-4 min-w-45">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{order.customer}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-3 px-3 sm:px-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{order.amount}</td>
                  <td className="py-3 px-3 sm:px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 sm:px-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};
