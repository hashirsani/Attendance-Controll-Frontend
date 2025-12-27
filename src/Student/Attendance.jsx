import React from 'react';
import useAuthStore from '../Combine/store';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const selectedSubject = useAuthStore((state) => state.Subject);
  const navigate = useNavigate();
  console.log(selectedSubject);
  // ---------------------------------------------------------
  // MOCK DATA: In a real app, you would fetch this from a Database based on 'selectedSubject'
  // ---------------------------------------------------------
const Psychology = [
  { id: 1, date: "2025-12-18", topic: "Personality Theories", status: "Present" },
  { id: 2, date: "2025-12-16", topic: "Behavioral Psychology", status: "Absent" },
  { id: 3, date: "2025-12-13", topic: "Learning & Memory", status: "Present" },
  { id: 4, date: "2025-12-11", topic: "Motivation & Emotion", status: "Present" },
  { id: 5, date: "2025-12-09", topic: "Cognitive Psychology", status: "Absent" },
  { id: 6, date: "2025-12-06", topic: "Brain & Behavior", status: "Present" },
  { id: 7, date: "2025-12-03", topic: "Introduction to Psychology", status: "Present" },
];
const OS = [
  { id: 1, date: "2025-12-18", topic: "Deadlocks", status: "Present" },
  { id: 2, date: "2025-12-16", topic: "Memory Paging", status: "Present" },
  { id: 3, date: "2025-12-13", topic: "Virtual Memory", status: "Absent" },
  { id: 4, date: "2025-12-11", topic: "CPU Scheduling", status: "Present" },
  { id: 5, date: "2025-12-09", topic: "Process Synchronization", status: "Present" },
  { id: 6, date: "2025-12-06", topic: "Threads & Processes", status: "Absent" },
  { id: 7, date: "2025-12-02", topic: "OS Overview", status: "Present" },
];
const PF = [
  { id: 1, date: "2025-12-18", topic: "File Handling", status: "Absent" },
  { id: 2, date: "2025-12-15", topic: "Pointers", status: "Present" },
  { id: 3, date: "2025-12-13", topic: "Functions", status: "Present" },
  { id: 4, date: "2025-12-11", topic: "Loops", status: "Present" },
  { id: 5, date: "2025-12-08", topic: "Conditional Statements", status: "Absent" },
  { id: 6, date: "2025-12-05", topic: "Variables & Data Types", status: "Present" },
  { id: 7, date: "2025-12-02", topic: "Programming Basics", status: "Present" },
];
const HCI = [
  { id: 1, date: "2025-12-19", topic: "Usability Testing", status: "Present" },
  { id: 2, date: "2025-12-17", topic: "Heuristic Evaluation", status: "Present" },
  { id: 3, date: "2025-12-14", topic: "Cognitive Load", status: "Present" },
  { id: 4, date: "2025-12-12", topic: "User Personas", status: "Absent" },
  { id: 5, date: "2025-12-09", topic: "Wireframing", status: "Present" },
  { id: 6, date: "2025-12-06", topic: "Design Principles", status: "Absent" },
  { id: 7, date: "2025-12-03", topic: "Intro to HCI", status: "Present" },
];
const IDS = [
  { id: 1, date: "2025-12-18", topic: "AVL Trees", status: "Absent" },
  { id: 2, date: "2025-12-15", topic: "Hash Tables", status: "Present" },
  { id: 3, date: "2025-12-12", topic: "Binary Search Trees", status: "Absent" },
  { id: 4, date: "2025-12-10", topic: "Stacks & Queues", status: "Present" },
  { id: 5, date: "2025-12-08", topic: "Linked Lists", status: "Present" },
  { id: 6, date: "2025-12-05", topic: "Arrays Review", status: "Absent" },
  { id: 7, date: "2025-12-01", topic: "Course Introduction", status: "Present" },
];

  let array=[];

  if(selectedSubject=='OS'){
    array=OS;
  }
  else if(selectedSubject=='PF'){
    array=PF;
  }
  else if(selectedSubject=='HCI'){
    array=HCI;
  }
  else if(selectedSubject=='IDS'){
    array=IDS;
  }
  else if(selectedSubject=='Psychology'){
    array=Psychology;
  }

  // Calculations
  const totalClasses = array.length;
  const presentCount = array.filter(c => c.status === "Present").length;
  const absentCount = array.filter(c => c.status === "Absent").length;
  const percentage = totalClasses > 0 ? Math.round((presentCount / totalClasses) * 100) : 0;

  // Determine Status Color based on percentage
  const getStatusColor = () => {
    if (percentage >= 80) return "text-green-600 bg-green-100";
    if (percentage >= 75) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  if (!selectedSubject) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl text-gray-600">No Subject Selected</h2>
        <button onClick={() => navigate('/Subjects')} className="mt-4 text-blue-600 underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 h-full p-6 sm:p-10">
      
      {/* Header & Back Button */}
      <div className="max-w-5xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{selectedSubject}</h1>
          <p className="text-gray-500">Attendance Dashboard & History</p>
        </div>
        <button 
          onClick={() => navigate('/Subjects')}
          className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          ← Back to Subjects
        </button>
      </div>

      {/* 1. SUMMARY CARDS */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        
        {/* Total Classes */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-medium">Total Lectures</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{totalClasses}</p>
        </div>

        {/* Present */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-medium">Lectures Taken</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{presentCount}</p>
        </div>

        {/* Absent */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-medium">Lectures Missed</p>
          <p className="text-3xl font-bold text-red-500 mt-2">{absentCount}</p>
        </div>

        {/* Percentage Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <p className="text-gray-500 text-sm font-medium">Attendance %</p>
          <div className="flex items-end gap-2 mt-2">
            <p className={`text-3xl font-bold ${percentage < 75 ? 'text-red-600' : 'text-indigo-600'}`}>
              {percentage}%
            </p>
          </div>
          {/* Status Badge */}
          <div className={`mt-2 inline-block px-2 py-1 rounded text-xs font-bold ${getStatusColor()}`}>
            {percentage >= 75 ? "Safe" : "Low Attendance"}
          </div>
        </div>
      </div>

      {/* 2. PROGRESS BAR & POLICY */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Attendance Status</h3>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div 
            className={`h-4 rounded-full transition-all duration-1000 ${percentage >= 75 ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'}`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">
          University policy requires <strong>75%</strong> attendance to sit in the final exam.
          {percentage < 75 && <span className="text-red-500 font-bold ml-1">You are at risk!</span>}
        </p>
      </div>

      {/* 3. DETAILED LOG (HISTORY) */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Lecture History</h3>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Topic / Description</th>
                <th className="p-4 text-sm font-semibold text-gray-600 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {array.map((record) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-gray-800 font-medium">{record.date}</td>
                  <td className="p-4 text-gray-500">{record.topic}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold 
                      ${record.status === 'Present' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'}`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Attendance;