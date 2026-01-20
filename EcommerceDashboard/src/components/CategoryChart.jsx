import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from './Card';
import { dashboardData } from '../data/dashboardData';

/**
 * CategoryChart Component - Bar chart showing orders by category
 */
export const CategoryChart = React.memo(() => {
  const chartData = React.useMemo(() => dashboardData.categoryData, []);

  return (
    <Card className="h-full">
      <div className="p-5 sm:p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">Orders by Category</h3>

        <div className="flex-1">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
              <XAxis dataKey="name" stroke="#94a3b8" className="dark:stroke-slate-600" angle={-25} textAnchor="end" height={70} tickMargin={6} />
              <YAxis stroke="#94a3b8" className="dark:stroke-slate-600" tickMargin={6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '12px',
                  padding: '12px',
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Bar dataKey="value" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
});

CategoryChart.displayName = 'CategoryChart';
