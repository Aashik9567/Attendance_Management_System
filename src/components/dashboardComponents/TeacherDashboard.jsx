import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartBar, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import AttendanceSheet from './AttendanceSheet';
import CourseList from './CourseList';
import StudentStats from './StudentStats';
import store from '../../zustand/loginStore';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {isLogin,loginUserData} = store(state=>state)
  const navItems = [
    { name: 'Overview', icon: FaChalkboardTeacher },
    { name: 'Attendance', icon: FaUserGraduate },
    { name: 'Courses', icon: FaBook },
    { name: 'Reports', icon: FaChartBar },
    { name: 'Settings', icon: FaCog },
  ];
  console.log(isLogin)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`
        bg-gradient-to-b from-blue-800 to-blue-600 text-white w-64 fixed h-full z-20 transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'left-0' : '-left-64'}
        md:left-0
      `}>
        <div className="flex justify-between items-center p-4 md:hidden">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
          <p className="text-sm text-blue-200">Welcome back, {loginUserData.name}!</p>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name.toLowerCase());
                setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full p-4 transition
                ${activeTab === item.name.toLowerCase()
                  ? 'bg-blue-700 border-l-4 border-white'
                  : 'hover:bg-blue-700 hover:border-l-4 hover:border-white'
                }`}
            >
              <item.icon className="mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 transition-all duration-300 ease-in-out">
        <header className="bg-white shadow-md p-4 md:hidden">
          <button onClick={toggleSidebar} className="text-gray-800">
            <FaBars size={24} />
          </button>
        </header>
        <div className="p-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-4xl font-bold mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <p className="text-blue-100">Manage your classroom with ease</p>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StudentStats />
              <CourseList />
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition transform hover:scale-105">
                    Take Attendance
                  </button>
                  <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition transform hover:scale-105">
                    Create Assignment
                  </button>
                  <button className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition transform hover:scale-105">
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Attendance Sheet</h3>
              <AttendanceSheet />
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Your Courses</h3>
              <CourseList/>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Reports</h3>
              <p>Here you can generate and view various reports.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Settings</h3>
              <p>Manage your account settings and preferences here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;