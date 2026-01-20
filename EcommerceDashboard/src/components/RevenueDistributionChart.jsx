import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from './Card';
import { dashboardData } from '../data/dashboardData';

/**
 * RevenueDistributionChart Component - Pie chart showing revenue distribution
 */
export const RevenueDistributionChart = React.memo(() => {
  const COLORS = React.useMemo(() => ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'], []);
  const chartData = React.useMemo(() => dashboardData.revenueDistribution, []);

  return (
    <Card className="h-full">
      <div className="p-5 sm:p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">Revenue Distribution</h3>

        <div className="flex-1">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                innerRadius={55}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '12px',
                  padding: '12px',
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
});

RevenueDistributionChart.displayName = 'RevenueDistributionChart';
