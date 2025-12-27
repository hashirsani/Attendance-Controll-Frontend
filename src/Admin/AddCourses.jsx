import React, { useState } from "react";

const AddCourses = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseCode: "",
    creditHours: "3",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Data Submitted:", formData);
    // Add API logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Create New Course</h2>
          <p className="mt-2 text-sm text-gray-600">Add a new subject to the curriculum.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 mb-6">
                <h3 className="text-lg font-medium text-indigo-900">Course Information</h3>
              </div>

              {/* Course Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="e.g. Introduction to Programming"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Course Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course Code</label>
                  <input
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="e.g. CS-101"
                  />
                </div>

                {/* Credit Hours */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Credit Hours</label>
                  <select
                    name="creditHours"
                    value={formData.creditHours}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-white"
                  >
                    <option value="1">1 Credit Hour</option>
                    <option value="2">2 Credit Hours</option>
                    <option value="3">3 Credit Hours</option>
                    <option value="4">4 Credit Hours (Lab incl.)</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Brief summary of what this course covers..."
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4 mt-8 border-t pt-6">
                <button type="button" className="px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5">
                  Save Course
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;