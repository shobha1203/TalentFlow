import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, FileText, TrendingUp, Plus, Search, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Hero Section with Professional Blue Background */}
      <div className="relative overflow-hidden bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome back to TalentFlow</h1>
            <p className="text-blue-100 text-lg">Streamline your recruitment process with powerful insights</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/dashboard/jobs"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Plus className="h-5 w-5 mr-2" />
              Post New Job
            </Link>
            <Link
              to="/dashboard/candidates"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <Search className="h-5 w-5 mr-2" />
              Find Candidates
            </Link>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </div>

      {/* Enhanced Stats Cards with Professional Blue Theme */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-600 text-white">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">12</h3>
              <p className="text-gray-500">Active Jobs</p>
              <p className="text-sm font-medium text-blue-600">+2 this week</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-700 text-white">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">248</h3>
              <p className="text-gray-500">Total Candidates</p>
              <p className="text-sm font-medium text-blue-600">+15 this week</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gray-600 text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">8</h3>
              <p className="text-gray-500">Assessments</p>
              <p className="text-sm font-medium text-gray-600">3 pending</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-blue-500 text-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">23%</h3>
              <p className="text-gray-500">Hire Rate</p>
              <p className="text-sm font-medium text-blue-600">↑ 5% vs last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Quick Actions Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
            <p className="text-gray-500 mt-1">Streamline your recruitment workflow</p>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-500">Today, {new Date().toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/jobs"
            className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Manage Jobs</h3>
                <p className="text-gray-500 mt-1">Create and manage job postings</p>
                <div className="mt-3 flex items-center text-blue-600 text-sm font-medium">
                  <span>Get started</span>
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/candidates"
            className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-700 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">View Candidates</h3>
                <p className="text-gray-500 mt-1">Review candidate applications</p>
                <div className="mt-3 flex items-center text-blue-600 text-sm font-medium">
                  <span>Browse talent</span>
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/assessments"
            className="group relative overflow-hidden bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Assessments</h3>
                <p className="text-gray-500 mt-1">Create and manage assessments</p>
                <div className="mt-3 flex items-center text-blue-600 text-sm font-medium">
                  <span>Start evaluating</span>
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Enhanced Recent Activity Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <Link to="/activity" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all activity
          </Link>
        </div>
        <div className="space-y-4">
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">John Doe</span> applied for Senior Frontend Developer
              </p>
              <p className="text-xs text-gray-500 mt-1">New application received</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="text-xs text-gray-400">2 hours ago</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 ml-auto"></div>
            </div>
          </div>
          
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">Jane Smith</span> moved to Technical Interview stage
              </p>
              <p className="text-xs text-gray-500 mt-1">Candidate progression</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="text-xs text-gray-400">4 hours ago</span>
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1 ml-auto"></div>
            </div>
          </div>
          
          <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                New assessment created for <span className="font-semibold">Backend Engineer</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">Assessment management</p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="text-xs text-gray-400">1 day ago</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-1 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;