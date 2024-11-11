import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Policy from './pages/Policy';
import Research from './pages/Research';
import Network from './pages/Network';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/research" element={<Research />} />
        <Route path="/network" element={<Network />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;