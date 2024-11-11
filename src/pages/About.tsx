import React from 'react';
import { Building2, Users, Globe, Award, Briefcase, Star, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NAIA</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Leading the transformation of American industry through innovation, collaboration, and advocacy.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To strengthen American industrial competitiveness through advocacy, innovation, and collaboration, ensuring a robust and sustainable manufacturing future for generations to come.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A thriving American industrial sector that leads the world in innovation, sustainability, and economic opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8 text-blue-800" />,
                title: "Innovation",
                description: "Embracing new technologies and approaches to drive industry forward"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-800" />,
                title: "Collaboration",
                description: "Building strong partnerships across the industrial ecosystem"
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-800" />,
                title: "Sustainability",
                description: "Promoting environmentally responsible industrial practices"
              },
              {
                icon: <Award className="h-8 w-8 text-blue-800" />,
                title: "Excellence",
                description: "Maintaining the highest standards in all we do"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Founders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Mitchell",
                title: "Founding Chairman",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                bio: "Former CEO of Global Manufacturing Corp, 30+ years industry veteran"
              },
              {
                name: "Patricia Chen",
                title: "Founding President",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                bio: "Pioneer in industrial automation, former White House advisor"
              },
              {
                name: "James Wilson",
                title: "Founding Director",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
                bio: "Leading expert in manufacturing policy and innovation"
              }
            ].map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-blue-800 mb-3">{founder.title}</p>
                  <p className="text-gray-600">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Board of Directors</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Chairperson",
                company: "Advanced Manufacturing Solutions"
              },
              {
                name: "Michael Zhang",
                title: "Vice Chair",
                company: "TechInnovate Inc"
              },
              {
                name: "Emily Rodriguez",
                title: "Treasurer",
                company: "Global Industries"
              },
              {
                name: "David Park",
                title: "Secretary",
                company: "Future Systems"
              }
            ].map((director, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                <p className="text-blue-800 mb-2">{director.title}</p>
                <p className="text-gray-600">{director.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Advisory Board</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Lisa Chen",
                expertise: "Industrial Policy",
                affiliation: "Stanford University"
              },
              {
                name: "Mark Thompson",
                expertise: "Manufacturing Innovation",
                affiliation: "Institute for Advanced Manufacturing"
              },
              {
                name: "Dr. Robert Kim",
                expertise: "Supply Chain Optimization",
                affiliation: "MIT"
              }
            ].map((advisor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-1">{advisor.name}</h3>
                <p className="text-blue-800 mb-2">{advisor.expertise}</p>
                <p className="text-gray-600">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Sponsors */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Corporate Sponsors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "TechCorp Industries",
                level: "Platinum Sponsor",
                logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623"
              },
              {
                name: "Future Manufacturing",
                level: "Gold Sponsor",
                logo: "https://images.unsplash.com/photo-1553413077-190dd305871c"
              },
              {
                name: "Global Systems Inc",
                level: "Silver Sponsor",
                logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              }
            ].map((sponsor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{sponsor.name}</h3>
                  <p className="text-blue-800">{sponsor.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}