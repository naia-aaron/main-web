import React from 'react';
import { Users, Building2, Globe, Handshake } from 'lucide-react';

export default function Network() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NAIA Network</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Connect with industry leaders, innovators, and decision-makers in American manufacturing.
          </p>
        </div>
      </div>

      {/* Network Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Network Benefits</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-800" />,
                title: "Industry Connections",
                description: "Connect with leading manufacturers, suppliers, and industry experts"
              },
              {
                icon: <Building2 className="h-8 w-8 text-blue-800" />,
                title: "Business Opportunities",
                description: "Discover new partnerships and business development opportunities"
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-800" />,
                title: "Global Reach",
                description: "Access international markets and cross-border collaborations"
              },
              {
                icon: <Handshake className="h-8 w-8 text-blue-800" />,
                title: "Strategic Partnerships",
                description: "Form strategic alliances with industry leaders"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Directory */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Advanced Manufacturing Corp",
                type: "Manufacturer",
                location: "Detroit, MI",
                image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6"
              },
              {
                name: "TechInnovate Solutions",
                type: "Technology Provider",
                location: "San Jose, CA",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              },
              {
                name: "Global Supply Systems",
                type: "Supply Chain",
                location: "Chicago, IL",
                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-800 mb-1">{member.type}</p>
                  <p className="text-gray-600">{member.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Networking Events</h2>
          <div className="space-y-6">
            {[
              {
                title: "Manufacturing Leaders Summit",
                date: "April 15-16, 2024",
                location: "Chicago, IL",
                description: "Connect with C-level executives and decision-makers in manufacturing"
              },
              {
                title: "Industry 4.0 Networking Reception",
                date: "May 8, 2024",
                location: "Boston, MA",
                description: "Evening networking event focused on digital transformation"
              },
              {
                title: "Supply Chain Innovation Forum",
                date: "June 22, 2024",
                location: "Atlanta, GA",
                description: "Meet leading suppliers and logistics providers"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="md:flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                  <div className="md:text-right mt-4 md:mt-0">
                    <p className="text-blue-800 font-semibold">{event.date}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a member of NAIA and unlock the full potential of our industry network.
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Apply for Membership
          </button>
        </div>
      </section>
    </div>
  );
}