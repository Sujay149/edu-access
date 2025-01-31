import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, Calendar, Users, TrendingUp } from 'lucide-react';

import Button from './Button';
import AuthModal from './AuthModal';
import { useApp } from './AppContext'; // Adjust the path as necessary

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(!user);

  const stats = [
    { name: 'Learning Progress', value: '85%', icon: TrendingUp },
    { name: 'Completed Modules', value: '12', icon: BookOpen },
    { name: 'Job Applications', value: '3', icon: Briefcase },
    { name: 'Community Posts', value: '8', icon: Users },
  ];

  const upcomingTasks = [
    { title: 'Complete Math Module', time: '2:00 PM', type: 'learning' },
    { title: 'Job Interview Prep', time: '4:30 PM', type: 'career' },```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, Calendar, Users, TrendingUp } from 'lucide-react';

import Button from './Button';
import AuthModal from './AuthModal';
import { useApp } from './AppContext'; // Adjust the path as necessary

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(!user);
  const [stats, setStats] = useState([
    { name: 'Learning Progress', value: '85%', icon: TrendingUp },
    { name: 'Completed Modules', value: '12', icon: BookOpen },
    { name: 'Job Applications', value: '3', icon: Briefcase },
    { name: 'Community Posts', value: '8', icon: Users },
  ]);
  const [upcomingTasks, setUpcomingTasks] = useState([
    { title: 'Complete Math Module', time: '2:00 PM', type: 'learning' },
    { title: 'Job Interview Prep', time: '4:30 PM', type: 'career' },
    { title: 'Community Meetup', time: 'Tomorrow, 3:00 PM', type: 'social' },
  ]);

  useEffect(() => {
    if (user) {
      // fetch user data and update stats and upcoming tasks
      // for example:
      setStats([
        { name: 'Learning Progress', value: '90%', icon: TrendingUp },
        { name: 'Completed Modules', value: '15', icon: BookOpen },
        { name: 'Job Applications', value: '5', icon: Briefcase },
        { name: 'Community Posts', value: '10', icon: Users },
      ]);
      setUpcomingTasks([
        { title: 'Complete Science Module', time: '2:00 PM', type: 'learning' },
        { title: 'Job Interview', time: '4:30 PM', type: 'career' },
        { title: 'Community Event', time: 'Tomorrow, 3:00 PM', type: 'social' },
      ]);
    }
  }, [user]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {user ? `Welcome back, ${user.name}!` : 'Welcome to NeuroEmpower'}
        </h1>
        {user ? (
          <Button variant="primary" onClick={() => navigate('/settings')}>
            Customize Dashboard
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setIsAuthModalOpen(true)}>
            Get Started
          </Button>
        )}
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
            <Button
              variant="outline"
              size="sm"
              icon={Calendar}
              onClick={() => navigate('/daily')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => navigate('/daily')}
              >
                <Calendar className="w-5 h-5 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.time}</p>
                </div>
                <span
                  className={`ml-auto px-2.5 py-0.5 text-xs font-medium rounded-full
                    ${
                      task.type === 'learning'
                        ? 'bg-blue-100 text-blue-800'
                        : task.type === 'career'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                >
                  {task.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Your Progress</h2>
          </div>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{stat.name}</p>
                  <p className="text-sm text-gray-500">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
``````javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, Calendar, Users, TrendingUp } from 'lucide-react';

import Button from './Button';
import AuthModal from './AuthModal';
import { useApp } from './AppContext'; // Adjust the path as necessary

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useApp();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(!user);
  const [stats, setStats] = useState([
    { name: 'Learning Progress', value: '85%', icon: TrendingUp },
    { name: 'Completed Modules', value: '12', icon: BookOpen },
    { name: 'Job Applications', value: '3', icon: Briefcase },
    { name: 'Community Posts', value: '8', icon: Users },
  ]);
  const [upcomingTasks, setUpcomingTasks] = useState([
    { title: 'Complete Math Module', time: '2:00 PM', type: 'learning' },
    { title: 'Job Interview Prep', time: '4:30 PM', type: 'career' },
    { title: 'Community Meetup', time: 'Tomorrow, 3:00 PM', type: 'social' },
  ]);

  useEffect(() => {
    if (user) {
      // fetch user data and update stats and upcoming tasks
      // for example:
      setStats([
        { name: 'Learning Progress', value: '90%', icon: TrendingUp },
        { name: 'Completed Modules', value: '15', icon: BookOpen },
        { name: 'Job Applications', value: '5', icon: Briefcase },
        { name: 'Community Posts', value: '10', icon: Users },
      ]);
      setUpcomingTasks([
        { title: 'Complete Science Module', time: '2:00 PM', type: 'learning' },
        { title: 'Job Interview', time: '4:30 PM', type: 'career' },
        { title: 'Community Event', time: 'Tomorrow, 3:00 PM', type: 'social' },
      ]);
    }
  }, [user]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleAuthModalClose = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {user ? `Welcome back, ${user.name}!` : 'Welcome to NeuroEmpower'}
        </h1>
        {user ? (
          <Button variant="primary" onClick={() => handleNavigate('/settings')}>
            Customize Dashboard
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setIsAuthModalOpen(true)}>
            Get Started
          </Button>
        )}
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
            <Button
              variant="outline"
              size="sm"
              icon={Calendar}
              onClick={() => handleNavigate('/daily')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleNavigate('/daily')}
              >
                <Calendar className="w-5 h-5 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.time}</p>
                </div>
                <span
                  className={`ml-auto px-2.5 py-0.5 text-xs font-medium rounded-full
                    ${
                      task.type === 'learning'
                        ? 'bg-blue-100 text-blue-800'
                        : task.type === 'career'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                >
                  {task.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Your Progress</h2>
          </div>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{stat.name}</p>
                  <p className="text-sm text-gray-500">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={handleAuthModalClose}
      />
    </div>
  );
};

export default Dashboard;
```
    { title: 'Community Meetup', time: 'Tomorrow, 3:00 PM', type: 'social' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {user ? `Welcome back, ${user.name}!` : 'Welcome to NeuroEmpower'}
        </h1>
        {user ? (
          <Button variant="primary" onClick={() => navigate('/settings')}>
            Customize Dashboard
          </Button>
        ) : (
          <Button variant="primary" onClick={() => setIsAuthModalOpen(true)}>
            Get Started
          </Button>
        )}
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Today's Schedule</h2>
            <Button
              variant="outline"
              size="sm"
              icon={Calendar}
              onClick={() => navigate('/daily')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => navigate('/daily')}
              >
                <Calendar className="w-5 h-5 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">{task.time}</p>
                </div>
                <span
                  className={`ml-auto px-2.5 py-0.5 text-xs font-medium rounded-full
                    ${
                      task.type === 'learning'
                        ? 'bg-blue-100 text-blue-800'
                        : task.type === 'career'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                >
                  {task.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;