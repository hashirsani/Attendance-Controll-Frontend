import React from "react";

// Teacher course & schedule data
const teacherCourses = [
  {
    courseName: "Introduction to Data Science",
    courseCode: "IDS-301",
    semester: "6th",
    section: "A",
    students: 45,
    day: "Monday",
    time: "09:00 AM - 10:30 AM",
  },
  {
    courseName: "Operating Systems",
    courseCode: "OS-302",
    semester: "5th",
    section: "B",
    students: 38,
    day: "Tuesday",
    time: "11:00 AM - 12:30 PM",
  },
  {
    courseName: "Human Computer Interaction",
    courseCode: "HCI-303",
    semester: "6th",
    section: "A",
    students: 42,
    day: "Wednesday",
    time: "01:00 PM - 02:30 PM",
  },
  {
    courseName: "Programming Fundamentals",
    courseCode: "PF-101",
    semester: "1st",
    section: "C",
    students: 50,
    day: "Thursday",
    time: "10:00 AM - 11:30 AM",
  },
];

function TPersonel() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Teacher Personal Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Courses, schedules, and class information
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {teacherCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Course Title */}
            <h2 className="text-xl font-semibold text-indigo-600 mb-1">
              {course.courseName}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Course Code: {course.courseCode}
            </p>

            {/* Course Details */}
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                <span className="font-semibold">Semester:</span> {course.semester}
              </p>
              <p>
                <span className="font-semibold">Section:</span> {course.section}
              </p>
              <p>
                <span className="font-semibold">Students:</span> {course.students}
              </p>
              <p>
                <span className="font-semibold">Lecture Day:</span> {course.day}
              </p>
              <p>
                <span className="font-semibold">Lecture Time:</span> {course.time}
              </p>
            </div>

            {/* Badge */}
            <div className="mt-4">
              <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
                Active Course
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TPersonel;
