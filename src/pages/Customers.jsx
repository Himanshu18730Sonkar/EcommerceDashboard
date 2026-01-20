import React from 'react';
import { Card } from '../components/Card';
import { Users, UserPlus, MessageSquare } from 'lucide-react';

const customers = [
  { name: 'John Doe', email: 'john@example.com', orders: 12, value: '$2,450', segment: 'Loyal' },
  { name: 'Jane Smith', email: 'jane@example.com', orders: 5, value: '$890', segment: 'Active' },
  { name: 'Mike Johnson', email: 'mike@example.com', orders: 2, value: '$320', segment: 'At Risk' },
  { name: 'Sarah Williams', email: 'sarah@example.com', orders: 9, value: '$1,780', segment: 'Loyal' },
];

export const Customers = () => {
  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Customers</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Understand your customers and engagement.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <Card className="p-5 sm:p-6 flex items-start gap-3">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Total Customers</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">8,240</p>
          </div>
        </Card>
        <Card className="p-5 sm:p-6 flex items-start gap-3">
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
            <UserPlus className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">New this month</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">612</p>
          </div>
        </Card>
        <Card className="p-5 sm:p-6 flex items-start gap-3">
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20">
            <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Open tickets</p>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">34</p>
          </div>
        </Card>
      </div>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Top Customers</h3>
          <button className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">Export CSV</button>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 py-3 px-3 sm:px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <span>Name</span>
            <span>Email</span>
            <span>Orders</span>
            <span>Value</span>
          </div>
          {customers.map((c) => (
            <div key={c.email} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="font-medium text-slate-900 dark:text-white truncate">{c.name}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 truncate">{c.email}</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{c.orders}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{c.value} • {c.segment}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
