import React from 'react';
import { Card } from '../components/Card';
import { StatCard } from '../components/Card';
import { Package, TrendingUp, AlertTriangle } from 'lucide-react';

const productStats = [
  { id: 1, title: 'Active SKUs', value: '1,240', change: '+3.1%', isPositive: true, icon: Package, bgColor: 'bg-indigo-50 dark:bg-indigo-900/20', textColor: 'text-indigo-600 dark:text-indigo-400' },
  { id: 2, title: 'Low Stock', value: '32', change: '-4.0%', isPositive: true, icon: AlertTriangle, bgColor: 'bg-amber-50 dark:bg-amber-900/20', textColor: 'text-amber-600 dark:text-amber-400' },
  { id: 3, title: 'Top Growth', value: 'Gaming', change: '+12.5%', isPositive: true, icon: TrendingUp, bgColor: 'bg-emerald-50 dark:bg-emerald-900/20', textColor: 'text-emerald-600 dark:text-emerald-400' },
];

const ProductRow = ({ name, sku, price, stock, status }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 py-3 px-3 sm:px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
    <div className="font-medium text-slate-900 dark:text-white truncate">{name}</div>
    <div className="text-sm text-slate-500 dark:text-slate-400 truncate">{sku}</div>
    <div className="text-sm font-semibold text-slate-900 dark:text-white">{price}</div>
    <div className="text-sm text-slate-600 dark:text-slate-300">{stock} • {status}</div>
  </div>
);

export const Products = () => {
  const products = [
    { name: 'Noise-Canceling Headphones', sku: 'SKU-8831', price: '$199', stock: '142', status: 'In Stock' },
    { name: 'Mechanical Keyboard', sku: 'SKU-7712', price: '$129', stock: '58', status: 'Low Stock' },
    { name: '4K Monitor 27"', sku: 'SKU-6621', price: '$329', stock: '87', status: 'In Stock' },
    { name: 'Ergonomic Chair', sku: 'SKU-9904', price: '$259', stock: '31', status: 'Reorder' },
  ];

  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Products</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Monitor inventory health and catalog performance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        {productStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Catalog Snapshot</h3>
          <button className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">Add product</button>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 py-3 px-3 sm:px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <span>Name</span>
            <span>SKU</span>
            <span>Price</span>
            <span>Stock</span>
          </div>
          {products.map((p) => (
            <ProductRow key={p.sku} {...p} />
          ))}
        </div>
      </Card>
    </>
  );
};
