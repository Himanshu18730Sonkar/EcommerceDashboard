import React from 'react';
import { Card } from '../components/Card';
import { Settings, Shield, Smartphone, Mail } from 'lucide-react';

export const Profile = () => {
  const profile = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'Admin',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
  };

  const preferences = [
    { title: 'Security', description: '2FA enabled, device approvals active', icon: Shield },
    { title: 'Notifications', description: 'Email + push for orders and payouts', icon: Mail },
    { title: 'Sessions', description: 'Last login: 2 hours ago • Chrome • SF', icon: Smartphone },
  ];

  return (
    <>
      <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Profile</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Manage your account info and security.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-blue-600 to-indigo-500 rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all">
          <Settings className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{profile.name}</h2>
              <p className="text-slate-600 dark:text-slate-400">{profile.role}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{profile.location}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /> {profile.email}</div>
            <div className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-emerald-500" /> {profile.phone}</div>
          </div>
        </Card>

        <Card className="p-6 h-full">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Account Health</h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• Strong password • Updated 22 days ago</li>
            <li>• 2FA: Enabled (Authenticator app)</li>
            <li>• Active sessions: 3 devices</li>
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {preferences.map((pref) => {
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
    </>
  );
};
