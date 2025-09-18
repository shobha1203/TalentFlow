import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Briefcase, Star, CheckCircle, ArrowRight, Play, MapPin, Clock, DollarSign } from 'lucide-react';

function JobRow({ letter, title, meta, salary }: { letter: string; title: string; meta: string; salary: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-4">
      <div className="h-10 w-10 rounded-md bg-blue-600 text-white grid place-items-center font-bold">{letter}</div>
      <div className="flex-1">
        <div className="font-medium text-slate-800">{title}</div>
        <div className="text-sm text-gray-500">{meta}</div>
      </div>
      <div className="text-sm text-gray-400">{salary}</div>
    </div>
  );
}

const Landing: React.FC = () => {
  return (
    <div>
    <section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left: hero */}
          <div className="w-full md:w-2/3 pt-8">
            <p className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-4">#1 Job Platform for Modern Teams</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Find Your <span className="text-blue-600">Dream Job</span> Today
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">Connect with top companies and discover opportunities that match your skills.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <div className="bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-4">
                  <input className="flex-1 outline-none" placeholder="Job title, keywords, or company" />
                  <div className="border-l pl-4 ml-4 text-gray-400">Location</div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition">Search Jobs</button>
            </div>

            <div className="mt-8">
              <Link 
                to="/dashboard" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>

          {/* Right: small featured card container */}
          <div className="w-full md:w-1/3 flex justify-end pt-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 md:w-96 transform md:-translate-y-6">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">Featured Jobs</h3>
              <div className="space-y-3">
                <JobRow letter="G" title="Senior Frontend Developer" meta="Google • San Francisco, CA" salary="$120K - $180K" />
                <JobRow letter="M" title="Product Manager" meta="Microsoft • Seattle, WA" salary="$140K - $200K" />
                <JobRow letter="A" title="UX Designer" meta="Apple • Cupertino, CA" salary="$110K - $160K" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TalentFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects talented professionals with amazing opportunities through intelligent matching and streamlined processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Job Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered algorithm matches you with jobs that perfectly align with your skills, experience, and career goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top Companies</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with industry-leading companies and startups that are actively looking for talented professionals like you.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Application</h3>
              <p className="text-gray-600 leading-relaxed">
                Apply to multiple jobs with one click. Our streamlined process saves you time and increases your chances of success.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant notifications about application status, interview invitations, and new job opportunities.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Salary Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Access comprehensive salary data and market insights to negotiate better compensation packages.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized career advice, skill recommendations, and growth opportunities to advance your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join millions of job seekers and thousands of companies who trust TalentFlow for their hiring needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">2M+</div>
              <div className="text-blue-100 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100 font-medium">Job Listings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">15K+</div>
              <div className="text-blue-100 font-medium">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who found their dream jobs through TalentFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "TalentFlow helped me find my dream job at Google. The platform's matching algorithm is incredibly accurate and saved me months of searching."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Software Engineer at Google</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a recruiter, TalentFlow has revolutionized how we find and hire top talent. The quality of candidates is exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-500">HR Director at Microsoft</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The salary insights and career advice features helped me negotiate a 40% salary increase. Highly recommend TalentFlow!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">EP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Parker</div>
                  <div className="text-sm text-gray-500">Product Manager at Apple</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-12 border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream Job?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join millions of professionals who trust TalentFlow to advance their careers. 
              Start your journey today and discover opportunities that match your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg">
                Get Started for Free
              </button>
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Go to Dashboard
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Free forever plan available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TalentFlow</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting talented professionals with amazing opportunities worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Candidates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TalentFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;