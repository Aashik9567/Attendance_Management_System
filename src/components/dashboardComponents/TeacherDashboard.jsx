import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartBar, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import AttendanceSheet from './AttendanceSheet';
import CourseList from './CourseList';
import StudentStats from './StudentStats';
import store from '../../zustand/loginStore';
import AttendanceReport from './AttendanceReport';
import Settings from './Settings';

const attendanceData = [
  { date: '2023-07-01', presentCount: 15, totalStudents: 20 },
  { date: '2023-07-02', presentCount: 18, totalStudents: 20 },
  { date: '2023-07-03', presentCount: 17, totalStudents: 20 },
  // ... more data
];

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [image, setImage] = useState(null);
  const { isLogin, loginUserData } = store(state => state);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (image) {
      console.log("Uploading image:", image);
      // Here you would typically send the image to your server
      alert("Image uploaded successfully!");
      setImage(null);
    } else {
      alert("Please select an image first!");
    }
  };

  const navItems = [
    { name: 'Overview', icon: FaChalkboardTeacher },
    { name: 'Attendance', icon: FaUserGraduate },
    { name: 'Courses', icon: FaBook },
    { name: 'Reports', icon: FaChartBar },
    { name: 'Settings', icon: FaCog },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`
        bg-gradient-to-r from-green-500 via-emerald-400 to-lime-500 text-white w-64 fixed h-full z-20 transition-all duration-300 ease-in-out
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
              onClick={() => changeTab(item.name.toLowerCase())}
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
            <>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600">
      <h3 className="text-xl font-semibold text-white mb-2">Upload Attendance Image</h3>
      <p className="text-blue-100 text-sm">Upload an image to mark attendance</p>
    </div>
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">
          Select an image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>
      {image && (
        <div className="mb-4">
          <img src={image} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
        </div>
      )}
      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Upload Image
      </button>
    </div>
  </div>
  
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600">
      <h3 className="text-xl font-semibold text-white mb-2">Student Statistics</h3>
      <p className="text-green-100 text-sm">Overview of student performance</p>
    </div>
    <div className="p-4">
      <StudentStats />
    </div>
  </div>
</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg">
                <CourseList />
                <div className="text-xl font-semibold mb-4">
                  <h3>Quick Actions</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <button
                      onClick={() => changeTab('attendance')}
                      className="md:w-[50%] bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition transform hover:scale-105">
                      Take Attendance
                    </button>
                    <button className="md:w-[50%] bg-green-500 text-white p-2 rounded hover:bg-green-600 transition transform hover:scale-105">
                      Create Assignment
                    </button>
                  </div>
                </div>
              </div>
            </>
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
              <CourseList />
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Reports</h3>
              <AttendanceReport attendanceData={attendanceData} />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Settings</h3>
              <Settings />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;