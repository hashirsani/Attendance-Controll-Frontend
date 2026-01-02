// import React from "react";

// // Attendance summary data
// const subjectsAttendance = [
//   { subject: "IDS", total: 28, present: 22 },
//   { subject: "OS", total: 30, present: 18 },
//   { subject: "HCI", total: 25, present: 23 },
//   { subject: "PF", total: 32, present: 20 },
//   { subject: "Psychology", total: 26, present: 14 },
// ];

// function Personel() {
//   // Calculate attendance percentage
//   const calculatePercentage = (present, total) => {
//     return Math.round((present / total) * 100);
//   };

//   // Determine attendance status
//   const getStatus = (percentage) => {
//     if (percentage >= 75) {
//       return { label: "High", color: "text-green-600" };
//     }

//     if (percentage >= 60) {
//       return { label: "Average", color: "text-yellow-600" };
//     }

//     return { label: "Low", color: "text-red-600" };
//   };

//   return (
//     <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      
//       {/* Header */}
//       <header className="p-8">
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           Student Personal Dashboard
//         </h1>
//         <p className="text-center text-gray-500 mt-2">
//           Overall attendance summary
//         </p>
//       </header>

//       {/* Scrollable Content Area */}
//       <main className="flex-1 overflow-y-auto px-8 pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {subjectsAttendance.map((item) => {
//             const percentage = calculatePercentage(
//               item.present,
//               item.total
//             );
//             const status = getStatus(percentage);

//             return (
//               <div
//                 key={item.subject}
//                 className="bg-white shadow-md rounded-xl p-6"
//               >
//                 <h2 className="text-xl font-semibold mb-4 text-gray-800">
//                   {item.subject}
//                 </h2>

//                 <div className="space-y-2 text-gray-600">
//                   <p>Total Classes: {item.total}</p>
//                   <p>Attended: {item.present}</p>

//                   <p>
//                     Attendance:{" "}
//                     <span className="font-semibold text-gray-800">
//                       {percentage}%
//                     </span>
//                   </p>

//                   <p>
//                     Status:{" "}
//                     <span className={`font-semibold ${status.color}`}>
//                       {status.label}
//                     </span>
//                   </p>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full ${
//                       percentage >= 75
//                         ? "bg-green-500"
//                         : percentage >= 60
//                         ? "bg-yellow-500"
//                         : "bg-red-500"
//                     }`}
//                     style={{ width: `${percentage}%` }}
//                   ></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Personel;


import React from "react";

// Attendance summary data
const subjectsAttendance = [
  { subject: "IDS", total: 28, present: 22 },
  { subject: "OS", total: 30, present: 18 },
  { subject: "HCI", total: 25, present: 23 },
  { subject: "PF", total: 32, present: 20 },
  { subject: "Psychology", total: 26, present: 14 },
];

function Personel() {
  // Calculate attendance percentage
  const calculatePercentage = (present, total) => {
    return Math.round((present / total) * 100);
  };

  // Determine attendance status with Dark Mode support
  const getStatus = (percentage) => {
    if (percentage >= 75) {
      return { label: "High", color: "text-green-600 dark:text-green-400" };
    }
    if (percentage >= 60) {
      return { label: "Average", color: "text-yellow-600 dark:text-yellow-400" };
    }
    return { label: "Low", color: "text-red-600 dark:text-red-400" };
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col transition-colors duration-300">
      
      {/* Header */}
      <header className="p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          Student Personal Dashboard
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
          Overall attendance summary
        </p>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsAttendance.map((item) => {
            const percentage = calculatePercentage(item.present, item.total);
            const status = getStatus(percentage);

            return (
              <div
                key={item.subject}
                className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none rounded-xl p-6 border border-transparent dark:border-gray-800 transition-all"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  {item.subject}
                </h2>

                <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  <p className="flex justify-between">
                    <span>Total Classes:</span> 
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.total}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Attended:</span> 
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item.present}</span>
                  </p>

                  <p className="flex justify-between">
                    <span>Attendance:</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {percentage}%
                    </span>
                  </p>

                  <p className="flex justify-between">
                    <span>Status:</span>
                    <span className={`font-bold ${status.color}`}>
                      {status.label}
                    </span>
                  </p>
                </div>

                {/* Progress Bar Container */}
                <div className="mt-6 w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      percentage >= 75
                        ? "bg-green-500"
                        : percentage >= 60
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Personel;