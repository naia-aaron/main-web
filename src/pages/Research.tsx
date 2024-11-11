import React from 'react';
import { LineChart, BookOpen, FileText, PieChart } from 'lucide-react';

export default function Research() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Data-driven analysis and insights on the American industrial sector, emerging technologies, and market trends.
          </p>
        </div>
      </div>

      {/* Featured Research */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                title: "The Future of American Manufacturing",
                date: "March 2024",
                description: "Comprehensive analysis of emerging trends and technologies shaping the manufacturing sector."
              },
              {
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                title: "Supply Chain Resilience Report",
                date: "February 2024",
                description: "Analysis of supply chain vulnerabilities and strategies for building resilience."
              },
              {
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
                title: "Industrial Workforce Trends",
                date: "January 2024",
                description: "Insights on workforce development, skills gaps, and future labor market needs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-blue-800 font-semibold hover:text-blue-600">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LineChart className="h-8 w-8 text-blue-800" />,
                title: "Market Analysis",
                description: "Industry trends, market forecasts, and competitive analysis"
              },
              {
                icon: <BookOpen className="h-8 w-8 text-blue-800" />,
                title: "Policy Research",
                description: "Analysis of industrial policies and their impacts"
              },
              {
                icon: <FileText className="h-8 w-8 text-blue-800" />,
                title: "Technical Reports",
                description: "Deep dives into emerging technologies and standards"
              },
              {
                icon: <PieChart className="h-8 w-8 text-blue-800" />,
                title: "Economic Impact",
                description: "Assessment of economic contributions and opportunities"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Access */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Access Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            NAIA members get exclusive access to our complete research library, including market reports, policy analysis, and technical studies.
          </p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
}