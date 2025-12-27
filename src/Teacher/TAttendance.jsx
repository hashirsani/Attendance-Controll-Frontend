import React, { useState } from 'react';

function TLAttendance() {

  const studentsList = [
    "Ali Khan",
    "Ahmed Raza",
    "Hassan Ali",
    "Usman Ahmed",
    "Bilal Hussain",
    "Hamza Sheikh",
    "Abdullah Farooq",
    "Saad Malik",
    "Areeb Anwar",
    "Zain Ul Abidin",
    "Fahad Iqbal",
    "Mohammad Salman"
  ];

  const [attendance, setAttendance] = useState({});

  const markAttendance = (name, status) => {
    setAttendance({
      ...attendance,
      [name]: status
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Teacher Attendance Panel
        </h2>
        <p className="text-gray-500 mb-6">
          Mark attendance for today
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Student Name</th>
                <th className="py-3 px-4 text-center">Present</th>
                <th className="py-3 px-4 text-center">Absent</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {studentsList.map((student, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {student}
                  </td>

                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => markAttendance(student, "Present")}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Present
                    </button>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => markAttendance(student, "Absent")}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Absent
                    </button>
                  </td>

                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          attendance[student] === "Present"
                            ? "bg-green-100 text-green-700"
                            : attendance[student] === "Absent"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-500"
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

      </div>
    </div>
  );
}

export default TLAttendance;
