import React from 'react';
import { Calendar, Users, Mic2, Award } from 'lucide-react';

export default function Events() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Connect with industry leaders, policymakers, and innovators at NAIA's premier events and programs.
          </p>
        </div>
      </div>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                  alt="Annual Industrial Innovation Summit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold mb-4">Annual Industrial Innovation Summit 2024</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>September 15-17, 2024</span>
                </div>
                <div className="flex items-center text-gray-600 mb-6">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Washington Convention Center, DC</span>
                </div>
                <p className="text-gray-600 mb-8">
                  Join industry leaders, policymakers, and innovators for three days of insights, networking, and collaboration focused on the future of American manufacturing.
                </p>
                <button className="bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Policy Forum: Supply Chain Resilience",
                date: "April 5, 2024",
                location: "Virtual Event",
                type: "Webinar",
                description: "Expert panel discussion on strengthening domestic supply chains."
              },
              {
                title: "Regional Manufacturing Workshop",
                date: "May 12, 2024",
                location: "Chicago, IL",
                type: "Workshop",
                description: "Hands-on session on implementing advanced manufacturing technologies."
              },
              {
                title: "Industrial Tech Showcase",
                date: "June 20, 2024",
                location: "Boston, MA",
                type: "Conference",
                description: "Exhibition of cutting-edge industrial technologies and solutions."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4">
                  {event.type}
                </span>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="text-gray-600 mb-2">
                  <Calendar className="inline-block h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <div className="text-gray-600 mb-4">
                  <Users className="inline-block h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="text-blue-800 font-semibold hover:text-blue-600">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Ongoing Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic2 className="h-8 w-8 text-blue-800" />,
                title: "Industry Leadership Series",
                description: "Monthly webinars featuring industry leaders and experts discussing key trends and challenges."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-800" />,
                title: "Networking Forums",
                description: "Regular networking events connecting manufacturers, suppliers, and industry stakeholders."
              },
              {
                icon: <Award className="h-8 w-8 text-blue-800" />,
                title: "Innovation Awards",
                description: "Annual recognition program celebrating excellence in industrial innovation."
              }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}