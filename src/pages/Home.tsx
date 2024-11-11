import React from 'react';
import { ArrowRight, Building2, Users, LineChart, Calendar } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              New American Industrial Alliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shaping the Future of American Industry Through Innovation and Collaboration
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-800 px-8 py-3 rounded-md hover:bg-gray-100 flex items-center">
                Join NAIA <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About NAIA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NAIA is a leading trade association dedicated to advancing American industrial competitiveness through advocacy, innovation, and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-blue-800" />,
                title: "Policy Advocacy",
                description: "Representing industry interests in Washington DC"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-800" />,
                title: "Network",
                description: "Connect with industry leaders and policymakers"
              },
              {
                icon: <LineChart className="h-8 w-8 text-blue-800" />,
                title: "Research",
                description: "Data-driven insights and analysis"
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-800" />,
                title: "Events",
                description: "Regular conferences and workshops"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with NAIA</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Washington DC Office</h3>
              <p className="text-gray-600 mb-2">1234 K Street NW</p>
              <p className="text-gray-600 mb-2">Suite 500</p>
              <p className="text-gray-600 mb-2">Washington, DC 20005</p>
              <p className="text-gray-600 mb-4">United States</p>
              <p className="text-gray-600">Phone: (202) 555-0123</p>
              <p className="text-gray-600">Email: info@naia.org</p>
            </div>

            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}