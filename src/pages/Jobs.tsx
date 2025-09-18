import React from 'react';
import { Plus, Search, Filter, Briefcase, TrendingUp, Users } from 'lucide-react';

const Jobs: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Professional Hero Section */}
      <div className="relative bg-blue-600 rounded-3xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Job Management</h1>
                <p className="text-blue-100 text-lg">Create, manage, and track your job postings</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>3 Active Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>45 Total Applications</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              <Plus className="h-5 w-5 mr-2 inline" />
              Create Job
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Filters Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Search className="h-4 w-4 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Search & Filter Jobs</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 max-w-4xl">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, skills, or description..."
                className="input pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <select className="input min-w-32 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="archived">Archived</option>
            </select>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap">
              <Filter className="h-4 w-4 mr-2 inline" />
              Advanced Filters
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Jobs List */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Briefcase className="h-4 w-4 text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Active Job Postings</h2>
        </div>

        {/* Enhanced Job Card */}
        <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                <h3 className="text-xl font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">Senior Frontend Developer</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Active</span>
              </div>
              <p className="text-gray-500 mb-4 text-base leading-relaxed">
                We're looking for an experienced frontend developer to join our team and build amazing user experiences...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Remote</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">12 candidates</span>
                </div>
                <span className="hidden sm:inline mx-3">•</span>
                <span>Created 3 days ago</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                Edit Job
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                Archive
              </button>
            </div>
          </div>
        </div>

        {/* Another Enhanced Job Card */}
        <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                <h3 className="text-xl font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">Backend Engineer</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">Active</span>
              </div>
              <p className="text-gray-500 mb-4 text-base leading-relaxed">
                Join our backend team to build scalable APIs and microservices that power our platform...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">8 candidates</span>
                </div>
                <span className="hidden sm:inline mx-3">•</span>
                <span>Created 1 week ago</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                Edit Job
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                Archive
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Archived Job Card */}
        <div className="bg-gray-50 rounded-2xl shadow-md border border-gray-200 p-6 opacity-90">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-gray-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Archived Jobs</h3>
          </div>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-semibold text-gray-700">UX Designer</h3>
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">Archived</span>
              </div>
              <p className="text-gray-500 mb-4 leading-relaxed">
                We were looking for a talented UX designer to improve our user experience and create intuitive interfaces...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">Figma</span>
                <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">User Research</span>
                <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">Prototyping</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">25 candidates</span>
                </div>
                <span className="mx-2">•</span>
                <span>Archived 2 weeks ago</span>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                Restore
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Pagination */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 font-medium">Showing 1-3 of 3 jobs</p>
          <div className="flex gap-3">
            <button className="bg-gray-100 text-gray-400 px-4 py-2 rounded-xl font-medium cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="bg-gray-100 text-gray-400 px-4 py-2 rounded-xl font-medium cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;