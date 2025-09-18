import React from 'react';
import { Search, Filter, Mail, Phone, Users, TrendingUp, Award } from 'lucide-react';

const Candidates: React.FC = () => {
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
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Candidate Management</h1>
                <p className="text-blue-100 text-lg">Review, evaluate, and manage candidate applications</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>15 Active Candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>3 Recently Hired</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Filters Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Filter className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Filter & Search Candidates</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search candidates by name, skills, or position..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            />
          </div>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200">
            <option>Application Status</option>
            <option>Applied</option>
            <option>Technical</option>
            <option>Interview</option>
            <option>Hired</option>
          </select>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-200">
            <option>Experience Level</option>
            <option>Junior</option>
            <option>Mid-level</option>
            <option>Senior</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Enhanced Candidates List */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Candidate Applications</h2>
        </div>

        {/* Enhanced Sample Candidate Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 truncate">John Doe</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 self-start sm:self-auto">
                    Screening
                  </span>
                </div>
                <p className="text-gray-500 mb-3 text-base font-medium">Applied for Senior Frontend Developer</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="truncate">john.doe@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">React</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">TypeScript</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">5+ years</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Applied 2 days ago</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                View Profile
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Move to Tech
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Sarah Johnson Candidate Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-14 h-14 rounded-2xl flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 truncate">Sarah Johnson</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 self-start sm:self-auto">
                    Applied
                  </span>
                </div>
                <p className="text-gray-500 mb-3 text-base font-medium">Applied for Full Stack Developer</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="truncate">sarah.johnson@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </div>
                    <span>+1 (555) 234-5678</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">React</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">Node.js</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">TypeScript</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Applied 2 days ago</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                View Profile
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Schedule Interview
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Jane Smith Candidate Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 truncate">Jane Smith</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 self-start sm:self-auto">
                    Technical Interview
                  </span>
                </div>
                <p className="text-gray-500 mb-3 text-base font-medium">Applied for Backend Engineer</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="truncate">jane.smith@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </div>
                    <span>+1 (555) 987-6543</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Node.js</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">PostgreSQL</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">AWS</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Applied 5 days ago</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                View Profile
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Move to Offer
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Hired Candidate Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-green-500 p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 truncate">Alice Brown</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 self-start sm:self-auto">
                    Hired
                  </span>
                </div>
                <p className="text-gray-500 mb-3 text-base font-medium">Applied for Senior Frontend Developer</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="truncate">alice.brown@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </div>
                    <span>+1 (555) 456-7890</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">React</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">Vue.js</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Team Lead</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Hired 1 week ago</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                View Profile
              </button>
              <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                Send Welcome
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Pagination */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">Showing 1-3 of 15 candidates</p>
          <div className="flex gap-3">
            <button 
              className="px-6 py-3 border border-gray-200 text-gray-400 rounded-xl cursor-not-allowed font-medium" 
              disabled
            >
              Previous
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;