import React, { useState } from 'react';
import logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const menuItems = [
    {
      name: 'Dashboard', icon: (
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Projects', icon: (
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      name: 'Students', icon: (
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      name: 'Leave Management', icon: (
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Holidays', icon: (
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Attendance', icon: (
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
  ];
  return (
    <>
      <nav className=" bg-cyan-100 shadow-sm">
        <div className="max-w-7xl px-4 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center ml-2 justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 "
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Logo and Brand */}
            <div className="flex items-center">
              <img className="w-[85px] h-[70px]" src={logo} alt="" />
              <span className="ml-2 text-xl font-semibold text-gray-800">AAMS</span>
              <div className=" flex items-center">
              </div>

            </div>
            {/* Desktop Menu */}
            <div className="flex items-center space-x-4">
              <button onClick={() => { navigate('/login') }} className="p-1 rounded-lg text-gray-700 hover:text-gray-950 ">
                Login
              </button>
            </div>
            <div
        className={`fixed top-16 left-0 h-full ${isMenuOpen ? 'w-64' : 'w-16'} bg-gradient-to-b from-purple-600 to-indigo-700 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg transform transition-all duration-100 z-10 ease-in-out`}
      >
        <div className={`p-4 ${isMenuOpen ? '' : 'flex flex-col items-center'}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className={`flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md p-2 transition-colors duration-200 ${isMenuOpen ? '' : 'justify-center'}`}>
                  {item.icon}
                  <span className={isMenuOpen ? '' : 'hidden'}>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;