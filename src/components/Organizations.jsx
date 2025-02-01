import React from 'react';
import { Check, Users, Building, ArrowRight } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg">
    <Icon className="w-10 h-10 text-emerald-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Organizations = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-md text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Connect with Passionate Volunteers
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              List your organization and opportunities on VolunteerMatch to find dedicated volunteers 
              who share your mission and values.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Partner with VolunteerMatch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={Users}
              title="Access Qualified Volunteers"
              description="Connect with thousands of skilled and passionate volunteers who are ready to contribute to your cause."
            />
            <BenefitCard
              icon={Building}
              title="Enhanced Visibility"
              description="Increase your organization's visibility and reach a wider audience of potential volunteers and supporters."
            />
            <BenefitCard
              icon={Check}
              title="Streamlined Management"
              description="Easily manage volunteer applications, schedule events, and track engagement through our platform."
            />
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Register Your Organization</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Organization Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Contact Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <textarea
                placeholder="Tell us about your organization..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;