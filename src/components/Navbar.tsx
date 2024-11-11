import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-800" />
              <span className="ml-2 text-xl font-bold text-gray-900">NAIA</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-800">About</Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center text-gray-700 hover:text-blue-800 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Initiatives <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2">
                  <Link 
                    to="/policy" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Policy Advocacy
                  </Link>
                  <Link 
                    to="/network" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Network
                  </Link>
                  <Link 
                    to="/research" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Research
                  </Link>
                  <Link 
                    to="/events" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>
            <Link to="/membership" className="text-gray-700 hover:text-blue-800">Membership</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-800">Contact</Link>
            <Link to="/membership" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Join NAIA
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">About</Link>
            <Link to="/policy" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Policy Advocacy</Link>
            <Link to="/network" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Network</Link>
            <Link to="/research" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Research</Link>
            <Link to="/events" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Events</Link>
            <Link to="/membership" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Membership</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</Link>
            <Link to="/membership" className="block px-3 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700">
              Join NAIA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}