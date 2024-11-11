import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">NAIA</span>
            </Link>
            <p className="text-gray-400">
              Shaping the future of American industry through innovation and collaboration.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/policy" className="text-gray-400 hover:text-white">Policy</Link></li>
              <li><Link to="/research" className="text-gray-400 hover:text-white">Research</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-white">Membership</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Policy Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} New American Industrial Alliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}