import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  ClipboardList, 
  Settings, 
  Globe 
} from 'lucide-react';

const navigation = [
  { name: 'Landing Page', href: '/', icon: Globe },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Candidates', href: '/candidates', icon: Users },
  { name: 'Assessments', href: '/assessments', icon: ClipboardList },
  { name: 'Settings', href: '/settings', icon: Settings },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Layout() {
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r">
        <div className="p-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">TF</div>
          <div className="text-lg font-semibold">TalentFlow</div>
        </div>

        <nav className="mt-6 flex flex-col gap-1 px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-blue-50',
                  'px-4 py-3 rounded-lg flex items-center gap-3'
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div>
              <div className="text-sm font-medium text-gray-700">Shobha</div>
              <div className="text-xs text-gray-500">View profile</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area: push content right by sidebar width */}
      <main className="ml-64 flex-1 bg-gray-50 min-h-screen">
        {/* Optional topbar */}
        <header className="h-14 border-b bg-white px-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">Search / Controls / Breadcrumb</div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded bg-blue-50 text-blue-600">Shobha</div>
          </div>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}