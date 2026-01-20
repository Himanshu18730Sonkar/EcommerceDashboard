import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from './Card';

/**
 * GaugeChart Component - Gauge chart showing performance metrics
 */
export const GaugeChart = React.memo(({ title, subtitle, value, maxValue = 100, color = '#3b82f6' }) => {
  const percentage = React.useMemo(() => (value / maxValue) * 100, [value, maxValue]);
  
  // Create data for the gauge (semi-circle)
  const data = React.useMemo(() => [
    { name: 'completed', value: percentage },
    { name: 'remaining', value: 100 - percentage },
  ], [percentage]);

  const COLORS = React.useMemo(() => [color, '#e2e8f0'], [color]);

  return (
    <Card>
      <div className="p-5 sm:p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>

        <div className="relative">
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="70%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index]} 
                    className={index === 1 ? 'dark:fill-slate-700' : ''}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ top: '35%' }}>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              {percentage.toFixed(1)}%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {value} / {maxValue}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-600 dark:text-slate-400">Progress</span>
            <span className="font-semibold text-slate-900 dark:text-white">{percentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${percentage}%`,
                backgroundColor: color
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
});

GaugeChart.displayName = 'GaugeChart';
