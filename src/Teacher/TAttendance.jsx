// import React, { useState } from 'react';

// function TLAttendance() {

//   const studentsList = [
//     "Ali Khan",
//     "Ahmed Raza",
//     "Hassan Ali",
//     "Usman Ahmed",
//     "Bilal Hussain",
//     "Hamza Sheikh",
//     "Abdullah Farooq",
//     "Saad Malik",
//     "Areeb Anwar",
//     "Zain Ul Abidin",
//     "Fahad Iqbal",
//     "Mohammad Salman"
//   ];

//   const [attendance, setAttendance] = useState({});

//   const markAttendance = (name, status) => {
//     setAttendance({
//       ...attendance,
//       [name]: status
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
      
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           Teacher Attendance Panel
//         </h2>
//         <p className="text-gray-500 mb-6">
//           Mark attendance for today
//         </p>

//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">Student Name</th>
//                 <th className="py-3 px-4 text-center">Present</th>
//                 <th className="py-3 px-4 text-center">Absent</th>
//                 <th className="py-3 px-4 text-center">Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {studentsList.map((student, index) => (
//                 <tr
//                   key={index}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   <td className="py-3 px-4 font-medium text-gray-700">
//                     {student}
//                   </td>

//                   <td className="py-3 px-4 text-center">
//                     <button
//                       onClick={() => markAttendance(student, "Present")}
//                       className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm"
//                     >
//                       Present
//                     </button>
//                   </td>

//                   <td className="py-3 px-4 text-center">
//                     <button
//                       onClick={() => markAttendance(student, "Absent")}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
//                     >
//                       Absent
//                     </button>
//                   </td>

//                   <td className="py-3 px-4 text-center">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-semibold
//                         ${
//                           attendance[student] === "Present"
//                             ? "bg-green-100 text-green-700"
//                             : attendance[student] === "Absent"
//                             ? "bg-red-100 text-red-700"
//                             : "bg-gray-100 text-gray-500"
//                         }
//                       `}
//                     >
//                       {attendance[student] || "Not Marked"}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default TLAttendance;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

function TLAttendance() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const studentsList = [
    "Ali Khan", "Ahmed Raza", "Hassan Ali", "Usman Ahmed",
    "Bilal Hussain", "Hamza Sheikh", "Abdullah Farooq",
    "Saad Malik", "Areeb Anwar", "Zain Ul Abidin",
    "Fahad Iqbal", "Mohammad Salman"
  ];

  const [attendance, setAttendance] = useState({});

  const markAttendance = (name, status) => {
    setAttendance({
      ...attendance,
      [name]: status
    });
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md dark:shadow-none border border-transparent dark:border-gray-800 p-4 sm:p-8">
        
        {/* Header Section */}
        <header className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
              Teacher Attendance Panel
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Mark attendance for today
            </p>
          </div>

          {/* ✅ Back to Classes Button */}
          <button 
            onClick={() => navigate('/TAttendance')}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active:scale-95"
          >
            ← Back to Classes
          </button>
        </header>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-gray-800 dark:bg-gray-800 text-white">
              <tr>
                <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider">Student Name</th>
                <th className="py-4 px-4 text-center text-sm font-semibold uppercase tracking-wider">Present</th>
                <th className="py-4 px-4 text-center text-sm font-semibold uppercase tracking-wider">Absent</th>
                <th className="py-4 px-4 text-center text-sm font-semibold uppercase tracking-wider">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {studentsList.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-gray-700 dark:text-gray-200">
                    {student}
                  </td>

                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => markAttendance(student, "Present")}
                      className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95"
                    >
                      Present
                    </button>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => markAttendance(student, "Absent")}
                      className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95"
                    >
                      Absent
                    </button>
                  </td>

                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold transition-all
                        ${
                          attendance[student] === "Present"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : attendance[student] === "Absent"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500"
                        }
                      `}
                    >
                      {attendance[student] || "Not Marked"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Action */}
        <div className="mt-8 flex justify-center sm:justify-end">
          <button className="w-full sm:w-auto px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95">
            Submit Attendance
          </button>
        </div>

      </div>
    </div>
  );
}

export default TLAttendance;