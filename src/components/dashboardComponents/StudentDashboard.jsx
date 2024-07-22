import React, { useState } from 'react';
import { FaUserGraduate, FaHome, FaCalendarAlt, FaStar, FaClipboardCheck, FaTimes, FaBars } from 'react-icons/fa';
import { PieChart } from 'react-minimal-pie-chart';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import store from '../../zustand/loginStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const StudentDashboard = () => {
  const barChartData = [
    { name: 'Jan', attendance: 85 },
    { name: 'Feb', attendance: 90 },
    { name: 'Mar', attendance: 88 },
    { name: 'Apr', attendance: 92 },
    { name: 'May', attendance: 95 },
    { name: 'Jun', attendance: 89 },
  ];
  const attendanceData = {
    totalClasses: 100,
    attendedClasses: 55,
    attendancePercentage: 55,
    lastAttendance: '2024-07-15',
    attendanceHistory: {
      '2024-07-15': 'Present',
      '2024-07-14': 'Absent',
      '2024-07-13': 'Present',
      '2024-07-12': 'Present',
      '2024-07-11': 'Absent',
      '2024-07-10': 'Present',
      '2024-07-09': 'Present',
    },
  };

  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLogin, loginUserData } = store((state) => state);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    setIsSidebarOpen(false);
  };

  const navItems = [
    { name: 'Dashboard', icon: <FaHome className="w-6 h-6" /> },
    { name: 'Calendar', icon: <FaCalendarAlt className="w-6 h-6" /> },
    { name: 'Students', icon: <FaUserGraduate className="w-6 h-6" /> },
    { name: 'Holidays', icon: <FaStar className="w-6 h-6" /> },
    { name: 'Attendance', icon: <FaClipboardCheck className="w-6 h-6" /> },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const pieChartData = [
    { title: 'Present', value: attendanceData.attendedClasses, color: '#4CAF50' },
    { title: 'Absent', value: attendanceData.totalClasses - attendanceData.attendedClasses, color: '#F44336' },
  ];


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white w-64 fixed h-full z-20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className="flex justify-between items-center p-4 md:hidden">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-sm text-blue-200">Welcome back, {loginUserData.name}!</p>
        </div>
        <nav className="mt-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => changeTab(item.name.toLowerCase())}
              className={`flex items-center w-full p-4 transition ${activeTab === item.name.toLowerCase() ? 'bg-blue-700 border-l-4 border-white' : 'hover:bg-blue-700 hover:border-l-4 hover:border-white'}`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
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
            <h2 className="text-4xl font-bold mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          </div>

          {activeTab === 'dashboard' && (
            <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className=" p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Attendance Overview</h3>
                <div className="mb-4">
                  <p className="text-lg font-semibold">Attendance Percentage</p>
                  <p className="text-3xl font-bold text-blue-600">{attendanceData.attendancePercentage}%</p>
                  <p className="text-sm text-gray-500">Last attended: {attendanceData.lastAttendance}</p>
                </div>
                <div className="w-full bg-white rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${attendanceData.attendancePercentage}%` }}></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Attendance Distribution</h3>
                <div className="h-64">
                  <PieChart
                    data={pieChartData}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                    labelStyle={{
                      fontSize: '5px',
                      fontFamily: 'sans-serif',
                      fill: '#fff',
                    }}
                    radius={42}
                    labelPosition={112}
                  />
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                  {pieChartData.map((entry, index) => (
                    <div key={`legend-${index}`} className="mr-4 mb-2">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                      {entry.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Monthly Attendance</h3>
                <div className="h-64">
                  <BarChart
                    width={500}
                    height={300}
                    data={barChartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="attendance" fill="#8884d8" />
                  </BarChart>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'calendar' && (
           <div className="p-8 bg-gradient-to-br from-blue-400 to-pink-300 min-h-screen flex items-center justify-center">
           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Calendar</h3>
              <Calendar
                className="bg-transparent border-none"
                tileClassName={({ date, view }) => 
                  view === 'month' && date.getDay() === 0 ? 'text-red-400 font-bold' : 'text-black font-bold'
                }
                navigationLabel={({ date }) => (
                  <span className="text-emerald-500 text-xl font-semibold">
                    {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </span>
                )}
                nextLabel={<span className="text-black">›</span>}
                prevLabel={<span className="text-black">‹</span>}
              />
            </div>
            </div>
          )}



          {/* Add other tab contents here */}
          {activeTab === 'students' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Your Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Mathematics', code: 'MATH101', progress: 75 },
                  { name: 'Computer Science', code: 'CS201', progress: 60 },
                  { name: 'Physics', code: 'PHY301', progress: 80 },
                  { name: 'Literature', code: 'LIT401', progress: 90 },
                ].map((course, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold">{course.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">Course Code: {course.code}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <p className="text-sm text-right">{course.progress}% Complete</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'holidays' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Upcoming Holidays</h3>
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Holiday</th>
                    <th className="text-left p-2">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2024-12-25', name: 'Christmas Day', type: 'Public Holiday' },
                    { date: '2025-01-01', name: 'New Year\'s Day', type: 'Public Holiday' },
                    { date: '2025-01-26', name: 'Republic Day', type: 'National Holiday' },
                    { date: '2025-03-21', name: 'Holi', type: 'Festival' },
                  ].map((holiday, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="p-2">{holiday.date}</td>
                      <td className="p-2">{holiday.name}</td>
                      <td className="p-2">{holiday.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Attendance Sheet</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Subject</th>
                      <th className="text-left p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '2024-07-15', subject: 'Mathematics', status: 'Present' },
                      { date: '2024-07-14', subject: 'Physics', status: 'Absent' },
                      { date: '2024-07-13', subject: 'Computer Science', status: 'Present' },
                      { date: '2024-07-12', subject: 'Literature', status: 'Present' },
                      { date: '2024-07-11', subject: 'Mathematics', status: 'Absent' },
                    ].map((record, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="p-2">{record.date}</td>
                        <td className="p-2">{record.subject}</td>
                        <td className={`p-2 ${record.status === 'Present' ? 'text-green-600' : 'text-red-600'}`}>
                          {record.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;