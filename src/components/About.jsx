// src/components/About.jsx
import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <Icon className="w-12 h-12 text-emerald-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community and the impact of collective action for positive change."
    },
    {
      icon: Users,
      title: "Inclusive Volunteering",
      description: "Creating opportunities for everyone to contribute, regardless of their background or experience."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting volunteers with causes that make a difference locally and globally."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Ensuring meaningful experiences for both volunteers and organizations through careful matching."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About VolunteerMatch</h1>
        <p className="text-gray-600 text-lg">
          We're on a mission to strengthen communities by making it easy for good people 
          to connect with good causes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>

      <div className="bg-emerald-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
        <p className="text-gray-600 mb-6">
          Since our founding, we've helped millions of volunteers find meaningful opportunities 
          to make a difference. Our platform has facilitated:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">10M+</div>
            <div className="text-gray-600">Volunteer Hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
            <div className="text-gray-600">Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100K+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Mission</h2>
        <p className="text-gray-600 mb-8">
          Whether you're an individual looking to volunteer or an organization seeking help, 
          we're here to connect you with opportunities that matter.
        </p>
        <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default About;