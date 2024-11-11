import React from 'react';
import { Scale, Shield, Building, GanttChart } from 'lucide-react';

export default function Policy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Policy Advocacy</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            NAIA leads the charge in shaping industrial policy that promotes American manufacturing competitiveness and innovation.
          </p>
        </div>
      </div>

      {/* Policy Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Scale className="h-8 w-8 text-blue-800" />,
                title: "Trade Policy",
                description: "Advocating for fair trade practices and policies that support American manufacturing."
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-800" />,
                title: "Industrial Security",
                description: "Promoting policies that protect intellectual property and critical infrastructure."
              },
              {
                icon: <Building className="h-8 w-8 text-blue-800" />,
                title: "Manufacturing Innovation",
                description: "Supporting policies that drive technological advancement and modernization."
              },
              {
                icon: <GanttChart className="h-8 w-8 text-blue-800" />,
                title: "Workforce Development",
                description: "Advancing policies that strengthen the industrial workforce through training and education."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Policy Initiatives</h2>
          <div className="space-y-8">
            {[
              {
                title: "Supply Chain Resilience Act",
                status: "In Progress",
                description: "Working with Congress to strengthen domestic supply chains and reduce dependence on foreign suppliers."
              },
              {
                title: "Advanced Manufacturing Investment Credit",
                status: "Advocacy",
                description: "Promoting tax incentives for investments in advanced manufacturing technologies and facilities."
              },
              {
                title: "Workforce Training Partnership Program",
                status: "Proposed",
                description: "Developing legislation to support industry-led workforce training programs."
              }
            ].map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{initiative.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {initiative.status}
                  </span>
                </div>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join NAIA's policy working groups and help shape the future of American industrial policy.
          </p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            Join Policy Working Groups
          </button>
        </div>
      </section>
    </div>
  );
}