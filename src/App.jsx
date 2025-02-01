import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send, Heart, Users, Calendar, Clock } from 'lucide-react';
import About from './components/About';
import FindOpportunities from './components/FindOpportunities';
import Organizations from './components/Organizations';
import WolframSearch from './components/WolframSearch';

const BentoCard = ({ children, className = '' }) => (
  <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="text-center p-2">
    <Icon className="w-8 h-8 mb-3 mx-auto text-emerald-600" />
    <div className="text-3xl font-bold text-gray-800 mb-1">{number}</div>
    <div className="text-gray-600 text-sm font-medium">{label}</div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  useEffect(() => {
    if (!customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js';
      script.type = 'module';
      document.head.appendChild(script);
    }
  }, []);

  const renderContent = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'opportunities':
        return <FindOpportunities />;
      case 'organizations':
        return <Organizations />;
      case 'wolfram':
        return <WolframSearch />;
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-md text-white py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Make a Difference in Your Community
                  </h1>
                  <p className="text-gray-200 text-xl mb-10 leading-relaxed">
                    Connect with meaningful volunteer opportunities that match your skills and passion. 
                    Join thousands of volunteers creating positive change in communities worldwide.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setCurrentPage('opportunities')}
                      className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Find Opportunities
                    </button>
                    <button 
                      onClick={() => setCurrentPage('organizations')}
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                    >
                      For Organizations
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Stats Cards */}
                <BentoCard>
                  <StatCard number="10,000+" label="Active Volunteers" icon={Users} />
                </BentoCard>
                <BentoCard>
                  <StatCard number="500+" label="Organizations" icon={Heart} />
                </BentoCard>
                <BentoCard>
                  <StatCard number="2,500+" label="Opportunities" icon={Calendar} />
                </BentoCard>
                <BentoCard>
                  <StatCard number="50,000+" label="Hours Contributed" icon={Clock} />
                </BentoCard>

                {/* Featured Opportunities */}
                <BentoCard className="md:col-span-2 lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Featured Opportunities</h3>
                  <div className="space-y-4">
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-emerald-800">Community Garden Project</h4>
                      <p className="text-gray-600 mb-3">
                        Help maintain and grow our community garden. Perfect for nature lovers and those passionate about sustainable living.
                      </p>
                      <div className="flex items-center text-sm text-emerald-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>San Francisco, CA</span>
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        <span>Flexible Hours</span>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-emerald-800">Youth Mentorship Program</h4>
                      <p className="text-gray-600 mb-3">
                        Make a lasting impact by mentoring youth in your community. Share your knowledge and inspire the next generation.
                      </p>
                      <div className="flex items-center text-sm text-emerald-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Multiple Locations</span>
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        <span>Weekly Commitment</span>
                      </div>
                    </div>
                  </div>
                </BentoCard>

                {/* Sign Up Form */}
                <BentoCard className="md:col-span-2 lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Start Making an Impact</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-600">
                      <option value="">Select Your Interests</option>
                      <option value="environment">Environment</option>
                      <option value="education">Education</option>
                      <option value="community">Community Service</option>
                      <option value="health">Health & Wellness</option>
                    </select>
                    <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                      Get Started
                    </button>
                  </form>
                </BentoCard>

                {/* Contact Information */}
                <BentoCard className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-6 h-6 mr-3 text-emerald-600" />
                      <span>support@volunteermatch.org</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-6 h-6 mr-3 text-emerald-600" />
                      <span>1-800-VOLUNTEER</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-6 h-6 mr-3 text-emerald-600" />
                      <span>123 Community Lane, Cincinnati,45229</span>
                    </div>
                  </div>
                </BentoCard>

                {/* Newsletter */}
                <BentoCard className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Stay Connected</h3>
                  <p className="text-gray-600 mb-6">
                    Join our newsletter to discover new opportunities and inspiring stories from our community.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </BentoCard>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Spline Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <spline-viewer url="https://prod.spline.design/Wo3fPFdcXGcrc6kh/scene.splinecode"></spline-viewer>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center cursor-pointer" 
                onClick={() => setCurrentPage('home')}
              >
                <Heart className="w-6 h-6 text-emerald-600 mr-2" />
                <div className="text-2xl font-bold text-emerald-600">VolunteerMatch</div>
              </div>
              <div className="hidden md:flex space-x-6 text-gray-600">
                <button 
                  onClick={() => setCurrentPage('opportunities')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Find Opportunities
                </button>
                <button 
                  onClick={() => setCurrentPage('organizations')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Organizations
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => setCurrentPage('wolfram')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Impact Calculator
                </button>
              </div>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </nav>

        {/* Render Current Page Content */}
        {renderContent()}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-md text-white py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-emerald-400 mr-2" />
              <div className="text-2xl font-bold text-emerald-400">VolunteerMatch</div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 VolunteerMatch. Connecting good people with good causes.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;