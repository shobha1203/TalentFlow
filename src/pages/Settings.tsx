import React, { useState } from 'react';
import { User, Settings as SettingsIcon, Bell, Shield, Download, Upload, Moon, Sun, Monitor } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface AppPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
  language: string;
  timezone: string;
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@talentflow.com',
    role: 'HR Manager',
    avatar: ''
  });

  const [preferences, setPreferences] = useState<AppPreferences>({
    theme: 'system',
    notifications: {
      email: true,
      push: true,
      desktop: false
    },
    language: 'English',
    timezone: 'UTC-5 (Eastern Time)'
  });

  const handleProfileUpdate = (field: keyof UserProfile, value: string) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (type: keyof AppPreferences['notifications']) => {
    setPreferences(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleThemeChange = (theme: AppPreferences['theme']) => {
    setPreferences(prev => ({ ...prev, theme }));
  };

  const tabs = [
    { id: 'profile', label: 'User Profile', icon: User },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'data', label: 'Data Management', icon: Download }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8 max-w-4xl">
            {/* Professional Profile Header */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold flex-shrink-0 shadow-sm">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-2">{userProfile.name}</h2>
                  <p className="text-slate-500 mb-4 font-medium">{userProfile.role}</p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md w-full sm:w-auto">
                    Change Avatar
                  </button>
                  <p className="text-sm text-slate-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>
            </div>

            {/* Clean Form Fields */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) => handleProfileUpdate('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) => handleProfileUpdate('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Role</label>
                  <select
                    value={userProfile.role}
                    onChange={(e) => handleProfileUpdate('role', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                  >
                    <option value="HR Manager">HR Manager</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Admin">Admin</option>
                    <option value="Team Lead">Team Lead</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Save Button */}
            <div className="flex justify-center sm:justify-end">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md w-full sm:w-auto">
                Save Changes
              </button>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-8">
            {/* Enhanced Theme Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Preferences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: 'light', label: 'Light', icon: Sun, color: 'bg-blue-600' },
                  { value: 'dark', label: 'Dark', icon: Moon, color: 'bg-gray-600' },
                  { value: 'system', label: 'System', icon: Monitor, color: 'bg-blue-600' }
                ].map(({ value, label, icon: Icon, color }) => (
                  <button
                    key={value}
                    onClick={() => handleThemeChange(value as AppPreferences['theme'])}
                    className={`p-6 border-2 rounded-2xl flex flex-col items-center space-y-4 transition-all duration-300 group relative overflow-hidden ${
                      preferences.theme === value
                        ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-102'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{label}</span>
                    {preferences.theme === value && (
                      <div className="absolute inset-0 bg-blue-500/5 rounded-2xl"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Language & Timezone Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Language & Region</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Timezone</label>
                  <select
                    value={preferences.timezone}
                    onChange={(e) => setPreferences(prev => ({ ...prev, timezone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  >
                    <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
                    <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                    <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                    <option value="UTC+1 (CET)">UTC+1 (CET)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-8">
            {/* Enhanced Email Notifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Notifications</h3>
                  <p className="text-sm text-gray-500 mt-1">Manage your email notification preferences</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Bell className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { key: 'email', label: 'Email Notifications', description: 'Receive notifications via email' },
                  { key: 'push', label: 'Push Notifications', description: 'Receive push notifications in browser' },
                  { key: 'desktop', label: 'Desktop Notifications', description: 'Show desktop notifications' }
                ].map(({ key, label, description }) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-sm font-semibold text-gray-900">{label}</h4>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{description}</p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(key as keyof AppPreferences['notifications'])}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        preferences.notifications[key as keyof AppPreferences['notifications']] ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                          preferences.notifications[key as keyof AppPreferences['notifications']] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            {/* Enhanced Security Header */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Security Settings</h3>
                  <p className="text-sm text-gray-500">Protect your account with advanced security features</p>
                </div>
              </div>
            </div>

            {/* Enhanced Security Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Change Password</h4>
                    <p className="text-sm text-gray-500">Update your password to keep your account secure</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                    Change Password
                  </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                    Enable 2FA
                  </button>
              </div>
            </div>

            {/* Active Sessions Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Active Sessions</h4>
                  <p className="text-sm text-gray-500 mt-1">Manage your active login sessions across devices</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">Current Session</p>
                    <p className="text-sm text-gray-500">Chrome on Windows • Active now</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">Active</span>
                </div>
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                  View Active Sessions
                </button>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-8">
            {/* Enhanced Data Management Header */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data Management</h3>
                  <p className="text-sm text-gray-500">Control your data export, import, and account settings</p>
                </div>
              </div>
            </div>

            {/* Enhanced Data Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Export Data</h4>
                    <p className="text-sm text-gray-500">Download all your data in JSON format for backup or migration</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                </div>
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                    <Download className="w-5 h-5" />
                    <span>Export Data</span>
                  </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Import Data</h4>
                    <p className="text-sm text-gray-500">Import data from a JSON file to restore your settings</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Upload className="w-5 h-5 text-white" />
                  </div>
                </div>
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                    <Upload className="w-5 h-5" />
                    <span>Import Data</span>
                  </button>
              </div>
            </div>

            {/* Enhanced Danger Zone */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-900">Danger Zone</h4>
                  <p className="text-sm text-red-700">Irreversible actions that will permanently affect your account</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-red-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-red-900 mb-2">Delete Account</h5>
                    <p className="text-sm text-red-700">Permanently delete your account and all associated data. This action cannot be undone.</p>
                  </div>
                  <button className="ml-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-8">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-4 right-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Settings
              </h1>
              <p className="text-lg text-gray-600">
                Manage your account preferences and security settings
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Enhanced Tab Navigation */}
        <div className="mb-10">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-sm border border-gray-100">
            <div className="flex space-x-1">
              {[
                { id: 'profile', label: 'Profile', icon: User },
                { id: 'preferences', label: 'Preferences', icon: SettingsIcon },
                { id: 'notifications', label: 'Notifications', icon: Bell },
                { id: 'security', label: 'Security', icon: Shield },
                { id: 'data', label: 'Data', icon: Download }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="space-y-10">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;