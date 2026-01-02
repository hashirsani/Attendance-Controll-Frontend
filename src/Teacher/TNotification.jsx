// import React from "react";

// const notifications = [
//   {
//     id: 1,
//     title: "Lecture comming",
//     message: "Your Lecture with Smester 6 Section A is commming at 8AM-10AM in G6.",
//     time: "2 hours ago",
//     type: "warning",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "Public Holiday Comming",
//     message: "Quaid's Day public holiday is comming at 25/12/2025.",
//     time: "Yesterday",
//     type: "info",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "Leave Acceptance",
//     message: "Your leave aplication has been approved.",
//     time: "2 days ago",
//     type: "success",
//     read: true,
//   },
//   {
//     id: 4,
//     title: "Exam Schedule",
//     message: "Midterm exam schedule is now available.",
//     time: "5 days ago",
//     type: "info",
//     read: true,
//   },
// ];

// const typeStyles = {
//   warning: "bg-red-100 text-red-600",
//   info: "bg-blue-100 text-blue-600",
//   success: "bg-green-100 text-green-600",
// };

// function TNotification() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
      
//       {/* Header */}
//       <div className="max-w-5xl mx-auto mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           Notifications
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Stay updated with your academic activities
//         </p>
//       </div>

//       {/* Notifications List */}
//       <div className="max-w-5xl mx-auto space-y-4">
//         {notifications.map((note) => (
//           <div
//             key={note.id}
//             className={`flex gap-4 items-start p-5 rounded-xl border transition
//               ${note.read ? "bg-white border-gray-200" : "bg-indigo-50 border-indigo-200"}
//             `}
//           >
//             {/* Icon */}
//             <div
//               className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
//                 ${typeStyles[note.type]}
//               `}
//             >
//               !
//             </div>

//             {/* Content */}
//             <div className="flex-1">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   {note.title}
//                 </h2>
//                 {!note.read && (
//                   <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">
//                     New
//                   </span>
//                 )}
//               </div>

//               <p className="text-gray-600 mt-1">
//                 {note.message}
//               </p>

//               <p className="text-sm text-gray-400 mt-2">
//                 {note.time}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TNotification;




import React from "react";

const notifications = [
  {
    id: 1,
    title: "Lecture coming",
    message: "Your Lecture with Semester 6 Section A is coming at 8AM-10AM in G6.",
    time: "2 hours ago",
    type: "warning",
    read: false,
  },
  {
    id: 2,
    title: "Public Holiday Coming",
    message: "Quaid's Day public holiday is coming at 25/12/2025.",
    time: "Yesterday",
    type: "info",
    read: false,
  },
  {
    id: 3,
    title: "Leave Acceptance",
    message: "Your leave application has been approved.",
    time: "2 days ago",
    type: "success",
    read: true,
  },
  {
    id: 4,
    title: "Exam Schedule",
    message: "Midterm exam schedule is now available.",
    time: "5 days ago",
    type: "info",
    read: true,
  },
];

// Added translucent dark mode variants for better contrast on dark backgrounds
const typeStyles = {
  warning: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  info: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
};

function TNotification() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 sm:p-8 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-6 sm:mb-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Teacher Notifications
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">
          Stay updated with your teaching schedule and department news
        </p>
      </div>

      {/* Notifications List */}
      <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`flex gap-3 sm:gap-4 items-start p-4 sm:p-5 rounded-2xl border transition-all duration-300
              ${note.read 
                ? "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-sm" 
                : "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800 shadow-md"}
            `}
          >
            {/* Icon - flex-shrink-0 prevents it from squishing on mobile */}
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                ${typeStyles[note.type]}
              `}
            >
              !
            </div>

            {/* Content Container */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h2 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
                  {note.title}
                </h2>
                {!note.read && (
                  <span className="flex-shrink-0 text-[10px] sm:text-xs bg-indigo-600 text-white px-2 py-1 rounded-full font-bold uppercase tracking-tighter sm:tracking-normal">
                    New
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {note.message}
              </p>

              <div className="flex items-center gap-2 mt-3 text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {note.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TNotification;