// import React, { useState } from "react";

// const AddTeacher = () => {
//   // State to hold form data
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//     subject: "",
//     designation: "",
//     joiningDate: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Teacher Data Submitted:", formData);
//     // Add your API call logic here (e.g., axios.post('/api/teachers', formData))
//     alert("Teacher added successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Header Section */}
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900">
//             Add New Teacher
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Register a new instructor to the system.
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               {/* Section: Personal Info */}
//               <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 mb-6">
//                 <h3 className="text-lg font-medium text-indigo-900">Personal Information</h3>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="e.g. Ahmad Salman"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="teacher@school.com"
//                   />
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="••••••••"
//                   />
//                 </div>

//                 {/* Phone Number */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="+92 300 1234567"
//                   />
//                 </div>
//               </div>

//               {/* Section: Academic Info */}
//               <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 mt-8 mb-6">
//                 <h3 className="text-lg font-medium text-indigo-900">Academic Details</h3>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Subject */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject / Department
//                   </label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-white"
//                   >
//                     <option value="">Select Subject</option>
//                     <option value="Computer Science">Computer Science</option>
//                     <option value="Mathematics">Mathematics</option>
//                     <option value="Physics">Physics</option>
//                     <option value="English">English</option>
//                     <option value="Urdu">Urdu</option>
//                   </select>
//                 </div>

//                 {/* Designation */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     name="designation"
//                     value={formData.designation}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                     placeholder="e.g. Senior Lecturer"
//                   />
//                 </div>

//                  {/* Joining Date */}
//                  <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Joining Date
//                   </label>
//                   <input
//                     type="date"
//                     name="joiningDate"
//                     value={formData.joiningDate}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
//                   />
//                 </div>
//               </div>

//               {/* Address Field */}
//               <div className="mt-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Permanent Address
//                 </label>
//                 <textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   rows="3"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200 resize-none"
//                   placeholder="Street address, City, Province"
//                 ></textarea>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex items-center justify-end gap-4 mt-8 border-t pt-6">
//                 <button
//                   type="button"
//                   className="px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
//                 >
//                   Add Teacher
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTeacher;



import React, { useState } from "react";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    subject: "",
    designation: "",
    joiningDate: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher Data Submitted:", formData);
    alert("Teacher added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            Add New Teacher
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Register a new instructor to the system.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-none border border-transparent dark:border-gray-800 overflow-hidden transition-all">
          <div className="p-5 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Section: Personal Info */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-600 mb-6">
                <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-300">
                  Personal Information
                </h3>
              </div>

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
                    placeholder="e.g. Ahmad Salman"
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
                    placeholder="teacher@school.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="••••••••"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              {/* Section: Academic Info */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-600 mt-8 mb-6">
                <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-300">
                  Academic Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject / Department
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none"
                  >
                    <option value="">Select Subject</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                  </select>
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                    placeholder="e.g. Senior Lecturer"
                  />
                </div>

                 {/* Joining Date */}
                 <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Joining Date
                  </label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Permanent Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition-all duration-200 resize-none"
                  placeholder="Street address, City, Province"
                ></textarea>
              </div>

              {/* Action Buttons */}
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
                  Add Teacher
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;