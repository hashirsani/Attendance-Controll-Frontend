// import React from "react";

// const notifications = [
//   {
//     id: 1,
//     title: "Attendance Warning",
//     message: "Your attendance in OS has fallen below 75%.",
//     time: "2 hours ago",
//     type: "warning",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "Class Cancelled",
//     message: "HCI class scheduled for today has been cancelled.",
//     time: "Yesterday",
//     type: "info",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "Assignment Posted",
//     message: "New IDS assignment has been uploaded.",
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

// function Notification() {
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

// export default Notification;


import React from "react";

const notifications = [
  {
    id: 1,
    title: "Attendance Warning",
    message: "Your attendance in OS has fallen below 75%.",
    time: "2 hours ago",
    type: "warning",
    read: false,
  },
  {
    id: 2,
    title: "Class Cancelled",
    message: "HCI class scheduled for today has been cancelled.",
    time: "Yesterday",
    type: "info",
    read: false,
  },
  {
    id: 3,
    title: "Assignment Posted",
    message: "New IDS assignment has been uploaded.",
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

const typeStyles = {
  warning: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  info: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
};

function Notification() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 sm:p-8 transition-colors duration-300">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Notifications
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">
          Stay updated with your academic activities
        </p>
      </div>

      {/* Notifications List */}
      <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`flex gap-3 sm:gap-4 items-start p-4 sm:p-5 rounded-xl border transition-all duration-300
              ${note.read 
                ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800" 
                : "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800"}
            `}
          >
            {/* Icon */}
            <div
              className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base
                ${typeStyles[note.type]}
              `}
            >
              !
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                  {note.title}
                </h2>
                {!note.read && (
                  <span className="flex-shrink-0 text-[10px] sm:text-xs bg-indigo-600 text-white px-2 py-0.5 sm:py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                {note.message}
              </p>

              <p className="text-[10px] sm:text-sm text-gray-400 dark:text-gray-500 mt-2">
                {note.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;