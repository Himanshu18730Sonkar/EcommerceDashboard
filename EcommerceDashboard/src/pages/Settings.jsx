import React from 'react';
import { Card } from '../components/Card';
import { Moon, Sun, Bell, Shield } from 'lucide-react';

export const Settings = () => {
  const prefs = [
    { title: 'Notifications', description: 'Order updates, low stock, and weekly summaries.', icon: Bell },
    { title: 'Security', description: '2FA, sessions, and device approvals.', icon: Shield },
    { title: 'Appearance', description: 'Switch between light and dark themes.', icon: Moon },
  ];

  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Configure your workspace preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {prefs.map((pref) => {
          const Icon = pref.icon;
          return (
            <Card key={pref.title} className="p-5 sm:p-6 flex gap-3">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                <Icon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{pref.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{pref.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5 sm:p-6 mt-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Theme</h3>
        <div className="flex items-center gap-3">
          <Sun className="w-5 h-5 text-amber-500" />
          <p className="text-sm text-slate-600 dark:text-slate-300">Use the toggle in the sidebar to switch light/dark modes.</p>
        </div>
      </Card>
    </>
  );
};
