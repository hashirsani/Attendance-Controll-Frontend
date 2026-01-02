import React from "react";
import useAuthStore from "./Combine/store";
import Nav from "./Nav";
import Login from "./Combine/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ✅ 1. Import Theme Context and Toggle
import { ThemeProvider } from "./Combine/ThemeContext"; 
import ThemeToggle from "./Combine/ThemeToggle";

// Student Components
import Subject from "./Student/Subject";
import Attendance from "./Student/Attendance";
import Personel from "./Student/Persoonel";
import Notification from "./Student/Notification";

// Teacher Components
import TAttendance from "./Teacher/Attendance";
import TLAttendance from "./Teacher/TAttendance";
import TPersonel from "./Teacher/TPersonel";
import TNotification from "./Teacher/TNotification";

// Admin & Other Components
import Fake from "./Fake/Fake";
import WrongEmailPopup from "./WrongEmailPopup";
import AddTeacher from "./Admin/AddTeacher";
import AddStudent from "./Admin/AddStudent";
import AddCourses from "./Admin/AddCourses";

function App() {
  const user = useAuthStore((state) => state.user);
  const error = useAuthStore((state) => state.error);

  // 🎯 Role-based default route logic
  const email = user?.email;
  let defaultRoute = "/Subjects";

  if (email === "Teacher@gmail.com") defaultRoute = "/TAttendance";
  else if (email === "Admin@gmail.com") defaultRoute = "/AddTeacher";

  return (
    <ThemeProvider>
      {/* 🔐 Branch 1: Unauthenticated Flow */}
      {!user ? (
        <div className="min-h-screen flex items-center justify-center transition-colors duration-300 bg-gray-100 dark:bg-gray-950">
          <Login setShowForm={() => {}} />
          {error && <WrongEmailPopup />}
          <ThemeToggle />
        </div>
      ) : (
        /* 🔓 Branch 2: Authenticated Flow */
        <BrowserRouter>
          {/* Main Global Wrapper: This handles the base background/text for ALL sub-pages */}
          <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Nav />
            {error && <WrongEmailPopup />}
            
            {/* The Toggle button floats globally */}
            <ThemeToggle />

            <Routes>
              <Route path="/" element={<Navigate to={defaultRoute} replace />} />

              {/* Student Routes */}
              <Route path="/Subjects" element={<Subject />} />
              <Route path="/Attendance" element={<Attendance />} />
              <Route path="/Personel" element={<Personel />} />
              <Route path="/Notification" element={<Notification />} />

              {/* Teacher Routes */}
              <Route path="/TAttendance" element={<TAttendance />} />
              <Route path="/TLAttendance" element={<TLAttendance />} />
              <Route path="/TPersonel" element={<TPersonel />} />
              <Route path="/TNotification" element={<TNotification />} />

              {/* Admin Routes */}
              <Route path="/AddTeacher" element={<AddTeacher />} />
              <Route path="/AddStudent" element={<AddStudent />} />
              <Route path="/AddCourses" element={<AddCourses />} />

              <Route path="/fake" element={<Fake />} />
              <Route path="*" element={<Navigate to={defaultRoute} />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;