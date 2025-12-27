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

  // Determine attendance status
  const getStatus = (percentage) => {
    if (percentage >= 75) {
      return { label: "High", color: "text-green-600" };
    }

    if (percentage >= 60) {
      return { label: "Average", color: "text-yellow-600" };
    }

    return { label: "Low", color: "text-red-600" };
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Student Personal Dashboard
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Overall attendance summary
        </p>
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsAttendance.map((item) => {
            const percentage = calculatePercentage(
              item.present,
              item.total
            );
            const status = getStatus(percentage);

            return (
              <div
                key={item.subject}
                className="bg-white shadow-md rounded-xl p-6"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  {item.subject}
                </h2>

                <div className="space-y-2 text-gray-600">
                  <p>Total Classes: {item.total}</p>
                  <p>Attended: {item.present}</p>

                  <p>
                    Attendance:{" "}
                    <span className="font-semibold text-gray-800">
                      {percentage}%
                    </span>
                  </p>

                  <p>
                    Status:{" "}
                    <span className={`font-semibold ${status.color}`}>
                      {status.label}
                    </span>
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
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
