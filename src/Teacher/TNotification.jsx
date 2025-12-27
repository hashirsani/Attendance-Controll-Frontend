import React from "react";

const notifications = [
  {
    id: 1,
    title: "Lecture comming",
    message: "Your Lecture with Smester 6 Section A is commming at 8AM-10AM in G6.",
    time: "2 hours ago",
    type: "warning",
    read: false,
  },
  {
    id: 2,
    title: "Public Holiday Comming",
    message: "Quaid's Day public holiday is comming at 25/12/2025.",
    time: "Yesterday",
    type: "info",
    read: false,
  },
  {
    id: 3,
    title: "Leave Acceptance",
    message: "Your leave aplication has been approved.",
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
  warning: "bg-red-100 text-red-600",
  info: "bg-blue-100 text-blue-600",
  success: "bg-green-100 text-green-600",
};

function TNotification() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Notifications
        </h1>
        <p className="text-gray-500 mt-1">
          Stay updated with your academic activities
        </p>
      </div>

      {/* Notifications List */}
      <div className="max-w-5xl mx-auto space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`flex gap-4 items-start p-5 rounded-xl border transition
              ${note.read ? "bg-white border-gray-200" : "bg-indigo-50 border-indigo-200"}
            `}
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${typeStyles[note.type]}
              `}
            >
              !
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {note.title}
                </h2>
                {!note.read && (
                  <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              <p className="text-gray-600 mt-1">
                {note.message}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {note.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TNotification;
