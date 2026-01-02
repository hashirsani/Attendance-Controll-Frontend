// import React, { useState } from "react";

// const AddStudent = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     rollNumber: "",
//     session: "", // e.g., 2023-2027
//     department: "",
//     phoneNumber: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Student Data Submitted:", formData);
//     // Add API logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Header */}
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">Add New Student</h2>
//           <p className="mt-2 text-sm text-gray-600">Enrol a new student into the university database.</p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               {/* Personal Info Header */}
//               <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 mb-6">
//                 <h3 className="text-lg font-medium text-indigo-900">Student Profile</h3>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="e.g. Ali Khan"
//                   />
//                 </div>

//                 {/* Roll Number */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
//                   <input
//                     type="text"
//                     name="rollNumber"
//                     value={formData.rollNumber}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="e.g. CSF21M001"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="student@university.edu"
//                   />
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Default Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                   />
//                 </div>
//               </div>

//               {/* Academic Info Header */}
//               <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 mt-8 mb-6">
//                 <h3 className="text-lg font-medium text-indigo-900">Academic Details</h3>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Department */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
//                   <select
//                     name="department"
//                     value={formData.department}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-white"
//                   >
//                     <option value="">Select Department</option>
//                     <option value="CS">Computer Science</option>
//                     <option value="IT">Information Technology</option>
//                     <option value="SE">Software Engineering</option>
//                     <option value="DS">Data Science</option>
//                   </select>
//                 </div>

//                 {/* Session */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Session / Batch</label>
//                   <input
//                     type="text"
//                     name="session"
//                     value={formData.session}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="e.g. Fall 2023"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="+92 300 0000000"
//                   />
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex items-center justify-end gap-4 mt-8 border-t pt-6">
//                 <button type="button" className="px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
//                   Cancel
//                 </button>
//                 <button type="submit" className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5">
//                   Register Student
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStudent;


import React, { useState } from "react";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rollNumber: "",
    session: "", // e.g., 2023-2027
    department: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - Responsive text sizes */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Add New Student
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enrol a new student into the university database.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-none border border-transparent dark:border-gray-800 overflow-hidden transition-all">
          <div className="p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Info Header */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-600 mb-6">
                <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-300">
                  Student Profile
                </h3>
              </div>

              {/* Grid: 1 column on mobile, 2 on medium screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="e.g. Ali Khan"
                  />
                </div>

                {/* Roll Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="e.g. CSF21M001"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="student@university.edu"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Default Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Academic Info Header */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-600 mt-8 mb-6">
                <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-300">
                  Academic Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {/* Department */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                  >
                    <option value="">Select Department</option>
                    <option value="CS">Computer Science</option>
                    <option value="IT">Information Technology</option>
                    <option value="SE">Software Engineering</option>
                    <option value="DS">Data Science</option>
                  </select>
                </div>

                {/* Session */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Session / Batch
                  </label>
                  <input
                    type="text"
                    name="session"
                    value={formData.session}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="e.g. Fall 2023"
                  />
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="+92 300 0000000"
                  />
                </div>
              </div>

              {/* Action Buttons - Stacked on mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-4 mt-8 border-t dark:border-gray-800 pt-6">
                <button 
                  type="button" 
                  className="px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all transform active:scale-95 order-1 sm:order-2"
                >
                  Register Student
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;