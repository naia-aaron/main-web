import React from 'react';
import { Check, Building2, Users, LineChart, Calendar } from 'lucide-react';

export default function Membership() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NAIA Membership</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join a powerful network of industry leaders shaping the future of American manufacturing.
          </p>
        </div>
      </div>

      {/* Membership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Membership Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-blue-800" />,
                title: "Policy Influence",
                benefits: [
                  "Direct access to policymakers",
                  "Policy working groups",
                  "Advocacy support",
                  "Regular policy briefings"
                ]
              },
              {
                icon: <Users className="h-8 w-8 text-blue-800" />,
                title: "Networking",
                benefits: [
                  "Industry networking events",
                  "Member directory access",
                  "B2B opportunities",
                  "Collaboration forums"
                ]
              },
              {
                icon: <LineChart className="h-8 w-8 text-blue-800" />,
                title: "Research & Insights",
                benefits: [
                  "Market research reports",
                  "Industry data access",
                  "Technical assistance",
                  "Trend analysis"
                ]
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-800" />,
                title: "Events & Programs",
                benefits: [
                  "Priority event access",
                  "Member-only workshops",
                  "Annual conference",
                  "Training programs"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Membership Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Fill out our simple membership application form below with your company information."
                },
                {
                  step: "2",
                  title: "Application Review",
                  description: "Our membership committee will review your application within 5 business days."
                },
                {
                  step: "3",
                  title: "Approval & Welcome",
                  description: "Upon approval, you'll receive a welcome package and access to all member benefits."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Apply for Membership</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="companyName">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="industry">
                  Industry Sector *
                </label>
                <select
                  id="industry"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="technology">Technology</option>
                  <option value="automotive">Automotive</option>
                  <option value="aerospace">Aerospace</option>
                  <option value="energy">Energy</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="contactName">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="title">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="companySize">
                Company Size *
              </label>
              <select
                id="companySize"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Company Size</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="interests">
                Areas of Interest
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Policy Advocacy",
                  "Research Access",
                  "Networking Events",
                  "Technical Support",
                  "Industry Data",
                  "Training Programs"
                ].map((interest, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`interest-${index}`}
                      className="mr-2"
                    />
                    <label htmlFor={`interest-${index}`}>{interest}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your company and what you hope to achieve through NAIA membership"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}