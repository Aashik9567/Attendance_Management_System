import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUserGraduate, FaCalendarAlt, FaStar, FaClipboardCheck } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome className="w-6 h-6" />, path: "/", color: "from-pink-500 to-rose-500" },
    { name: 'Projects', icon: <FaProjectDiagram className="w-6 h-6" />, path: "/projects", color: "from-purple-500 to-indigo-500" },
    { name: 'Students', icon: <FaUserGraduate className="w-6 h-6" />, path: "/students", color: "from-blue-500 to-cyan-500" },
    { name: 'Leave Management', icon: <FaCalendarAlt className="w-6 h-6" />, path: "/leave-management", color: "from-green-500 to-emerald-500" },
    { name: 'Holidays', icon: <FaStar className="w-6 h-6" />, path: "/holidays", color: "from-yellow-400 to-amber-500" },
    { name: 'Attendance', icon: <FaClipboardCheck className="w-6 h-6" />, path: "/attendance", color: "from-orange-500 to-red-500" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-indigo-700 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <Link to="/" className="ml-4 text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">AAMS</Link>
          </div>
          <div className="flex items-center">
            <button onClick={() => { navigate('/login') }} className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-full ${
          isMenuOpen ? 'w-64' : 'w-0'
        } bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 shadow-lg transform transition-all duration-300 ease-in-out z-20 overflow-hidden`}
      >
        <div className={`p-4 ${isMenuOpen ? '' : 'flex flex-col items-center'}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link 
                  to={item.path} 
                  className={`flex items-center text-white hover:bg-white hover:bg-opacity-10 rounded-md p-2 transition-all duration-300 ${isMenuOpen ? '' : 'hidden'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`p-2 rounded-md bg-gradient-to-r ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className={`ml-3 ${isMenuOpen ? '' : 'hidden'}`}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;