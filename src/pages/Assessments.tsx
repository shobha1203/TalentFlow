import React from 'react';
import { Plus, Search, Filter, FileText, Users, Clock, BarChart3, Target, Award } from 'lucide-react';

const Assessments: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Enhanced Hero Section */}
      <div className="relative bg-blue-600 rounded-3xl p-8 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Assessment Center</h1>
                <p className="text-blue-100 text-lg">Create, manage, and analyze candidate assessments</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>3 Active Assessments</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>20 Total Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>75% Completion Rate</span>
              </div>
            </div>
          </div>
          <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium border border-white/20 flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create Assessment
          </button>
        </div>
      </div>

      {/* Enhanced Filters Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Filter className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Filter & Search Assessments</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search assessments by name or skills..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            />
          </div>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200">
            <option>All Positions</option>
            <option>Senior Frontend Developer</option>
            <option>Backend Engineer</option>
            <option>UX Designer</option>
          </select>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Enhanced Assessments List */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Assessment Library</h2>
        </div>

        {/* Enhanced Sample Assessment Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">Frontend Technical Assessment</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-500 text-base">
                    Comprehensive assessment covering React, TypeScript, and problem-solving skills
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-500">Responses</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">45</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-500">Questions</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">React</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">TypeScript</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Problem Solving</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">Created 1 week ago • Last updated 3 days ago</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 w-full sm:w-auto lg:w-48">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                View Results
              </button>
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                Edit
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Backend System Design Assessment Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">Backend System Design</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-500 text-base">
                    System design questions focusing on scalability, databases, and API architecture
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-500">Responses</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">60</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">5</div>
                    <div className="text-sm text-gray-500">Questions</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">System Design</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">Databases</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">APIs</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">Created 2 weeks ago • Last updated 1 week ago</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 w-full sm:w-auto lg:w-48">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                View Results
              </button>
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                Edit
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Draft Assessment Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-amber-400">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">UX Design Portfolio Review</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                      Draft
                    </span>
                  </div>
                  <p className="text-gray-500 text-base">
                    Portfolio-based assessment for UX designers with case study analysis
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">0</div>
                    <div className="text-sm text-gray-500">Responses</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">90</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">6</div>
                    <div className="text-sm text-gray-500">Questions</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Portfolio</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">Case Study</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Design Thinking</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">Created 3 days ago • Last updated 1 day ago</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 w-full sm:w-auto lg:w-48">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                Preview
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Continue Editing
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 group">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
          <div className="text-sm font-medium text-gray-500">Total Assessments</div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 group">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
            <Target className="h-8 w-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">20</div>
          <div className="text-sm font-medium text-gray-500">Total Responses</div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 group">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
            <Award className="h-8 w-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">75%</div>
          <div className="text-sm font-medium text-gray-500">Completion Rate</div>
        </div>
      </div>

      {/* Enhanced Pagination */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-gray-500">Showing 1-3 of 3 assessments</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 text-gray-400 rounded-xl cursor-not-allowed font-medium" disabled>
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-200 text-gray-400 rounded-xl cursor-not-allowed font-medium" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;