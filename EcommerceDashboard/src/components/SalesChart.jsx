import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, LineChart as LineChartIcon } from 'lucide-react';
import { Card } from './Card';
import { dashboardData } from '../data/dashboardData';

/**
 * SalesChart Component - Chart showing sales and revenue trends (Line or Bar)
 */
export const SalesChart = React.memo(() => {
  const [timePeriod, setTimePeriod] = React.useState('weekly');
  const [chartType, setChartType] = React.useState('bar');

  const chartData = React.useMemo(() => dashboardData.salesData[timePeriod], [timePeriod]);

  const handleTimePeriodChange = React.useCallback((e) => {
    setTimePeriod(e.target.value);
  }, []);

  const handleChartTypeChange = React.useCallback((type) => {
    setChartType(type);
  }, []);

  return (
    <Card className="col-span-1 lg:col-span-2">
      <div className="p-6 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Sales Overview</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Revenue vs sales trend</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Chart Type Toggle */}
            <div className="flex gap-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => handleChartTypeChange('bar')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  chartType === 'bar' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md scale-105' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
                title="Bar Chart"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleChartTypeChange('line')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  chartType === 'line' 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-md scale-105' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
                title="Line Chart"
              >
                <LineChartIcon className="w-4 h-4" />
              </button>
            </div>
            
            {/* Time Period Select */}
            <select 
              value={timePeriod}
              onChange={handleTimePeriodChange}
              className="text-sm font-medium bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={320}>
          {chartType === 'bar' ? (
            <BarChart data={chartData} margin={{ left: 4, right: 8, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
              <XAxis dataKey="name" stroke="#94a3b8" className="dark:stroke-slate-600" tickMargin={8} />
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
              <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="sales" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={chartData} margin={{ left: 4, right: 8, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
            <XAxis dataKey="name" stroke="#94a3b8" className="dark:stroke-slate-600" tickMargin={8} />
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
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ fill: '#10b981', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
          )}
        </ResponsiveContainer>

        <div className="flex flex-wrap gap-5 mt-6 pt-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-linear-to-br from-blue-400 to-blue-600 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Revenue</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-linear-to-br from-green-400 to-green-600 rounded-full shadow-sm"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Sales</span>
          </div>
        </div>
      </div>
    </Card>
  );
});

SalesChart.displayName = 'SalesChart';
