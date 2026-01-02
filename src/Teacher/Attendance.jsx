// import React from 'react';
// import useAuthStore from '../Combine/store';
// import { useNavigate } from 'react-router-dom';

// function TAttendance() {
//   const subject=useAuthStore((state)=>state.setSubject);
//   const navigate = useNavigate();

//   const subjects = [

//     { id: "1", name: "2023-CS-C",  code: "CS-101", color: "bg-blue-100 text-blue-600" },
//     { id: "2", name: "2023-CS-B", code: "CS-202", color: "bg-purple-100 text-purple-600" },
//     { id: "3", name: "2024-CS-A",  code: "CS-305", color: "bg-green-100 text-green-600" },
//     { id: "4", name: "2025-CS-D", code: "HU-101", color: "bg-yellow-100 text-yellow-600" },
//     { id: "5", name: "2023-CS-A", code: "CS-100", color: "bg-red-100 text-red-600" },

//   ];



//   const handel=((subjectName)=>{
//     subject(subjectName);
//     navigate('/TLAttendance');
//     // console.log(subjectName)
//   });


//   return (
//     <div className="bg-gray-50 max-h-screen p-8 overflow-hidden">
      
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto mb-10">
//         <h1 className="text-3xl font-bold text-gray-800">Courses Assigneed To ME</h1>
//         <p className="text-gray-500 mt-2">Manage your Classes and Take attendance.</p>
//       </div>

//       {/* Grid Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {subjects.map((item) => (
//           <div
//             key={item.id}
//             className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
//                        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
//           >
//             {/* Top Row: Icon/Code and Options */}
//             <div className="flex justify-between items-start mb-4">
//               <div className={`px-3 py-1 rounded-full text-xs font-bold ${item.color || "bg-indigo-100 text-indigo-600"}`}>
//                 {item.code || "Code"}
//               </div>
//               <div className="text-gray-400">
//                 {/* 3 Dots Icon */}
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Middle Row: Subject Name */}
//             <h2 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors">
//               {item.name}
//             </h2>
            
//             {/* Bottom Row: Teacher Name */}
//             <div className="flex items-center text-gray-500 text-sm mb-6">
//               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//               </svg>
//               <span>{item.Teacher}</span>
//             </div>

//             {/* Action Button */}
//             <button className="w-full py-2.5 rounded-xl border border-indigo-100 text-indigo-600 font-semibold 
//                                hover:bg-indigo-600 hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
//                                onClick={()=>handel(item.name)} >
//               View Students
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

// export default TAttendance;



import React from 'react';
import useAuthStore from '../Combine/store';
import { useNavigate } from 'react-router-dom';

function TAttendance() {
  const setSubject = useAuthStore((state) => state.setSubject);
  const navigate = useNavigate();

  // Updated subjects with Dark Mode translucent variants for better visibility
  const subjects = [
    { id: "1", name: "2023-CS-C", code: "CS-101", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { id: "2", name: "2023-CS-B", code: "CS-202", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { id: "3", name: "2024-CS-A", code: "CS-305", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
    { id: "4", name: "2025-CS-D", code: "HU-101", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400" },
    { id: "5", name: "2023-CS-A", code: "CS-100", color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" },
  ];

  const handleClassSelect = (subjectName) => {
    setSubject(subjectName);
    navigate('/TLAttendance');
  };

  return (
    // Changed max-h-screen overflow-hidden to min-h-screen for mobile scrolling
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen p-4 sm:p-8 transition-colors duration-300">
      
      {/* Header Section - Responsive text sizes */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-10 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Courses Assigned To Me
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
          Manage your Classes and Take attendance.
        </p>
      </div>

      {/* Grid Section: 1 column on mobile, 2 on tablet, 3 on laptop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {subjects.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClassSelect(item.name)}
            className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Top Row: Badge and Options */}
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

            {/* Middle Row: Class Name */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {item.name}
            </h2>
            
            {/* Bottom Row: Section Info */}
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span>{item.name.split('-').pop()} Section</span>
            </div>

            {/* Action Button */}
            <button 
              className="w-full py-3 rounded-xl border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-300 font-bold 
                         hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevents double-triggering the click
                handleClassSelect(item.name);
              }}
            >
              View Students
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

export default TAttendance;