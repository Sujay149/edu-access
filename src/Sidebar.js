// src/components/Sidebar/Sidebar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Book, 
  BarChart2, 
  Map, 
  Users, 
  Settings, 
  HelpCircle,
  MenuIcon,
  X
} from 'lucide-react';

interface NavItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/', icon: <Home className="h-5 w-5" />, label: 'Dashboard' },
    { path: '/resources', icon: <Book className="h-5 w-5" />, label: 'Resources' },
    { path: '/analytics', icon: <BarChart2 className="h-5 w-5" />, label: 'Analytics' },
    { path: '/access-map', icon: <Map className="h-5 w-5" />, label: 'Access Map' },
    { path: '/students', icon: <Users className="h-5 w-5" />, label: 'Students' },
    { path: '/settings', icon: <Settings className="h-5 w-5" />, label: 'Settings' },
    { path: '/help', icon: <HelpCircle className="h-5 w-5" />, label: 'Help & Support' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 bg-gray-800 text-gray-100
          transform transition-transform duration-200 ease-in-out
          ${isCollapsed ? '-translate-x-full' : 'translate-x-0'}
          md:translate-x-0
          flex flex-col
          h-full
        `}
      >
        {/* Logo Section */}
        <div className="px-6 py-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">EduAccess Dashboard</h1>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center px-4 py-3 rounded-lg
                  transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                `}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="ml-3">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="px-6 py-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">JS</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Smith</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};

export default Sidebar;