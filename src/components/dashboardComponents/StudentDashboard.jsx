import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PieChart } from 'react-minimal-pie-chart';
import { FaCalendarAlt, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import Navbar from './Navbar';

const StudentDashboard = () => {
  const [date, setDate] = useState(new Date());

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
      '2024-07-11': 'Present',
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      if (attendanceData.attendanceHistory[dateString] === 'Present') {
        return 'bg-sky-400 text-white font-semibold mx-6 rounded-xl';
      } else if (attendanceData.attendanceHistory[dateString] === 'Absent') {
        return 'bg-pink-400 text-white font-semibold rounded-lg';
      }
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Navbar />
      <div className="p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg sm:rounded-2xl shadow-xl overflow-hidden">
          <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 sm:p-4 md:p-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
              <FaUserGraduate className="mr-2 sm:mr-3" /> Student Attendance Dashboard
            </h1>
          </header>

          <div className="p-3 sm:p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center text-indigo-700">
                <FaChartLine className="mr-2" /> Attendance Summary
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-around">
                <div className="w-32 sm:w-40 md:w-48 mb-4 sm:mb-0">
                  <PieChart
                    data={[
                      { title: 'Present', value: attendanceData.attendedClasses, color: '#34D399' },
                      { title: 'Absent', value: attendanceData.totalClasses - attendanceData.attendedClasses, color: '#F87171' },
                    ]}
                    lineWidth={20}
                    paddingAngle={18}
                    rounded
                    label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                    labelStyle={{
                      fill: '#fff',
                      fontSize: '8px',
                      fontFamily: 'sans-serif',
                    }}
                    labelPosition={0}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-base sm:text-lg md:text-xl">
                    <span className="font-semibold text-green-500">{attendanceData.attendedClasses}</span> / {attendanceData.totalClasses} Classes
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Last Attendance: {attendanceData.lastAttendance}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 flex items-center text-indigo-700">
                <FaCalendarAlt className="mr-2" /> Attendance Calendar </h2>
              <div className="overflow-auto">
                <Calendar
                  onChange={setDate}
                  value={date}
                  tileClassName={tileClassName}
                  className="border-0 rounded-xl p-8 w-full text-xs sm:text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 lg:pb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-indigo-700">Recent Attendance History</h2>
            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md">
              <ul className="space-y-2">
                {Object.entries(attendanceData.attendanceHistory).map(([date, status]) => (
                  <li key={date} className="flex justify-between items-center text-xs sm:text-sm md:text-base">
                    <span className="font-semibold">{date}</span>
                    <span className={`px-2 py-1 rounded-full ${status === 'Present' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;