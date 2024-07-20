import React from 'react';

const StudentStats = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Student Statistics</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>Total Students:</span>
          <span className="font-bold">120</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Average Attendance:</span>
          <span className="font-bold">85%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Students at Risk:</span>
          <span className="font-bold text-red-500">5</span>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;