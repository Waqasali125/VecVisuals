// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // simple icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/VecVisuals/assets/favicon.ico" width={48} height={48} />
            <Link to="/" className="text-2xl font-bold px-4">
              VecVisuals
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center ">
            <Link to="/" className=" hover:text-blue-600 text-1xl font-semibold  hover:shadow-md hover:border-b-2 hover:border-blue-500    ">Home</Link>
            <Link to="/about" className=" hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 ">About</Link>
            <Link to="/portfolio" className=" hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 ">Portfolio</Link>
            <Link to="/contact" className=" hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 ">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/"
              className="block text-black hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 "
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-black hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 "
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block text-black hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 "
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-black hover:text-blue-600 text-1xl font-semibold hover:shadow-md hover:border-b-2 hover:border-blue-500 "
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
