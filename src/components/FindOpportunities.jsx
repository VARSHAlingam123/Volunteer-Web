// src/components/Opportunities.jsx
import React from 'react';
import { MapPin, Clock, Search, Filter } from 'lucide-react';

const OpportunityCard = ({ title, organization, location, schedule, description }) => (
  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-emerald-600 font-medium mb-3">{organization}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
        {location}
      </div>
      <div className="flex items-center">
        <Clock className="w-4 h-4 mr-1 text-emerald-600" />
        {schedule}
      </div>
    </div>
  </div>
);

const Opportunities = () => {
  const opportunities = [
    {
      title: "Community Garden Project",
      organization: "Green Earth Initiative",
      location: "San Francisco, CA",
      schedule: "Flexible Hours",
      description: "Help maintain and grow our community garden. Perfect for nature lovers and those passionate about sustainable living."
    },
    {
      title: "Youth Mentorship Program",
      organization: "Education First",
      location: "Multiple Locations",
      schedule: "Weekly Commitment",
      description: "Make a lasting impact by mentoring youth in your community. Share your knowledge and inspire the next generation."
    },
    {
      title: "Food Bank Volunteer",
      organization: "Community Food Bank",
      location: "Boston, MA",
      schedule: "Weekends",
      description: "Help sort and distribute food to those in need. Make a direct impact in fighting hunger in your community."
    },
    {
      title: "Senior Care Companion",
      organization: "Elder Care Alliance",
      location: "Chicago, IL",
      schedule: "Flexible Hours",
      description: "Provide companionship and support to seniors. Help make a difference in the lives of elderly community members."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Perfect Opportunity</h1>
        <p className="text-gray-600 text-lg">
          Browse through our curated list of volunteer opportunities and find the perfect way to make a difference.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search opportunities..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-600">
              <option value="">Location</option>
              <option>San Francisco</option>
              <option>Boston</option>
              <option>Chicago</option>
            </select>
            <select className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-600">
              <option value="">Category</option>
              <option>Environment</option>
              <option>Education</option>
              <option>Community</option>
              <option>Health</option>
            </select>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {opportunities.map((opportunity, index) => (
          <OpportunityCard key={index} {...opportunity} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
          Show More Opportunities
        </button>
      </div>
    </div>
  );
};

export default Opportunities;