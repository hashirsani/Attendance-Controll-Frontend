// // import React from 'react';
// // import useAuthStore from '../Combine/store';
// // import { useNavigate } from 'react-router-dom';

// // function Subject() {
// //   const subject=useAuthStore((state)=>state.setSubject);
// //   const navigate = useNavigate();

// //   const subjects = [
// //     { id: "1", name: "IDS", Teacher: "Prof. Alan Turing", code: "CS-101", color: "bg-blue-100 text-blue-600" },
// //     { id: "2", name: "HCI", Teacher: "Dr. Grace Hopper", code: "CS-202", color: "bg-purple-100 text-purple-600" },
// //     { id: "3", name: "OS", Teacher: "Mr. Linus Torvalds", code: "CS-305", color: "bg-green-100 text-green-600" },
// //     { id: "4", name: "Psychology", Teacher: "Dr. Sigmund Freud", code: "HU-101", color: "bg-yellow-100 text-yellow-600" },
// //     { id: "5", name: "PF", Teacher: "Mrs. Ada Lovelace", code: "CS-100", color: "bg-red-100 text-red-600" },
// //   ];



// //   const handel=((subjectName)=>{
// //     subject(subjectName);
// //     navigate('/Attendance');
// //     // console.log(subjectName)
// //   });


// //   return (
// //     <div className="bg-gray-50 max-h-screen p-8 overflow-hidden">
      
// //       {/* Header Section */}
// //       <div className="max-w-7xl mx-auto mb-10">
// //         <h1 className="text-3xl font-bold text-gray-800">My Enrolled Courses</h1>
// //         <p className="text-gray-500 mt-2">Manage your subjects and view attendance.</p>
// //       </div>

// //       {/* Grid Section */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {subjects.map((item) => (
// //           <div
// //             key={item.id}
// //             className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
// //                        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
// //           >
// //             {/* Top Row: Icon/Code and Options */}
// //             <div className="flex justify-between items-start mb-4">
// //               <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.color || "bg-indigo-100 text-indigo-600"}`}>
// //                 {item.code || "Code"}
// //               </div>
// //               <div className="text-gray-400">
// //                 {/* 3 Dots Icon */}
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                   <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
// //                 </svg>
// //               </div>
// //             </div>

// //             {/* Middle Row: Subject Name */}
// //             <h2 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">
// //               {item.name}
// //             </h2>
            
// //             {/* Bottom Row: Teacher Name */}
// //             <div className="flex items-center text-gray-500 text-sm mb-6">
// //               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
// //               </svg>
// //               <span>{item.Teacher}</span>
// //             </div>

// //             {/* Action Button */}
// //             <button className="w-full py-2.5 rounded-xl border border-indigo-100 text-indigo-600 font-semibold 
// //                                hover:bg-indigo-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
// //                                onClick={()=>handel(item.name)} >
// //               View Attendance
// //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
// //               </svg>
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Subject;






// import React from 'react';
// import useAuthStore from '../Combine/store';
// import { useNavigate } from 'react-router-dom';

// function Subject() {
//   const subject = useAuthStore((state) => state.setSubject);
//   const navigate = useNavigate();

//   const subjects = [
//     { id: "1", name: "IDS", Teacher: "Prof. Alan Turing", code: "CS-101", color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" },
//     { id: "2", name: "HCI", Teacher: "Dr. Grace Hopper", code: "CS-202", color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300" },
//     { id: "3", name: "OS", Teacher: "Mr. Linus Torvalds", code: "CS-305", color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" },
//     { id: "4", name: "Psychology", Teacher: "Dr. Sigmund Freud", code: "HU-101", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300" },
//     { id: "5", name: "PF", Teacher: "Mrs. Ada Lovelace", code: "CS-100", color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300" },
//   ];

//   const handel = (subjectName) => {
//     subject(subjectName);
//     navigate('/Attendance');
//   };

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-8 transition-colors">
      
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto mb-10">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">My Enrolled Courses</h1>
//         <p className="text-gray-500 dark:text-gray-300 mt-2">Manage your subjects and view attendance.</p>
//       </div>

//       {/* Grid Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {subjects.map((item) => (
//           <div
//             key={item.id}
//             className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700
//                        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//           >
//             {/* Top Row: Icon/Code and Options */}
//             <div className="flex justify-between items-start mb-4">
//               <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>
//                 {item.code || "Code"}
//               </div>
//               <div className="text-gray-400 dark:text-gray-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Middle Row: Subject Name */}
//             <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
//               {item.name}
//             </h2>
            
//             {/* Bottom Row: Teacher Name */}
//             <div className="flex items-center text-gray-500 dark:text-gray-300 text-sm mb-6">
//               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//               </svg>
//               <span>{item.Teacher}</span>
//             </div>

//             {/* Action Button */}
//             <button 
//               className="w-full py-2.5 rounded-xl border border-indigo-100 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 font-semibold 
//                          hover:bg-indigo-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
//               onClick={() => handel(item.name)} 
//             >
//               View Attendance
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//               </svg>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Subject;



import React from 'react';
import useAuthStore from '../Combine/store';
import { useNavigate } from 'react-router-dom';

function Subject() {
  const setSubject = useAuthStore((state) => state.setSubject);
  const navigate = useNavigate();

  const subjects = [
    { id: "1", name: "IDS", Teacher: "Prof. Alan Turing", code: "CS-101", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: "2", name: "HCI", Teacher: "Dr. Grace Hopper", code: "CS-202", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { id: "3", name: "OS", Teacher: "Mr. Linus Torvalds", code: "CS-305", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { id: "4", name: "Psychology", Teacher: "Dr. Sigmund Freud", code: "HU-101", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400" },
    { id: "5", name: "PF", Teacher: "Mrs. Ada Lovelace", code: "CS-100", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
  ];

  const handleSubjectClick = (subjectName) => {
    setSubject(subjectName);
    navigate('/Attendance');
  };

  return (
    // Changed bg-gray-50 to support dark mode and used min-h-screen for mobile scrolling
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen p-6 sm:p-8 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Enrolled Courses</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Manage your subjects and view attendance records.</p>
      </div>

      {/* Grid Section: 1 col on mobile, 2 on tablet, 3 on laptop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {subjects.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSubjectClick(item.name)}
            className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Top Row: Icon/Code and Options */}
            <div className="flex justify-between items-start mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>
                {item.code}
              </div>
              <div className="text-gray-400 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>

            {/* Middle Row: Subject Name */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {item.name}
            </h2>
            
            {/* Bottom Row: Teacher Name */}
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>{item.Teacher}</span>
            </div>

            {/* Action Button */}
            <button 
              className="w-full py-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-300 font-semibold 
                         hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevents double-navigation
                handleSubjectClick(item.name);
              }}
            >
              View Attendance
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subject;