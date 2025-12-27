// import React from "react";
// import useAuthStore from "./Combine/store";
// import Nav from "./Nav";
// import Login from "./Combine/Login";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Subject from "./Student/Subject";
// import Attendance from "./Student/Attendance";
// import Personel from "./Student/Persoonel";
// import Notification from "./Student/Notification";

// import TAttendance from "./Teacher/Attendance";
// import TLAttendance from "./Teacher/TAttendance";
// import TPersonel from "./Teacher/TPersonel";
// import TNotification from "./Teacher/TNotification";

// import Fake from "./Fake/Fake";
// import WrongEmailPopup from "./WrongEmailPopup";

// function App() {
//   const user = useAuthStore((state) => state.user);
//   const error = useAuthStore((state) => state.error);


  
//   if (!user) {
//     return (
//       <>
//         <Login setShowForm={() => {}} />
//         {error && <WrongEmailPopup />}
//       </>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <Nav />

//       {/* 🔔 Global Error Popup */}
//       {error && <WrongEmailPopup />}

//       <Routes>
//         {/* Default */}
//         <Route path="/" element={<Navigate to="/Subjects" />} />

//         {/* Student */}
//         <Route path="/Subjects" element={<Subject />} />
//         <Route path="/Attendance" element={<Attendance />} />
//         <Route path="/Personel" element={<Personel />} />
//         <Route path="/Notification" element={<Notification />} />

//         {/* Teacher */}
//         <Route path="/TAttendance" element={<TAttendance />} />
//         <Route path="/TLAttendance" element={<TLAttendance />} />
//         <Route path="/TPersonel" element={<TPersonel />} />
//         <Route path="/TNotification" element={<TNotification />} />

//         {/* Fallback */}
//         <Route path="*" element={<Fake />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import React from "react";
import useAuthStore from "./Combine/store";
import Nav from "./Nav";
import Login from "./Combine/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Subject from "./Student/Subject";
import Attendance from "./Student/Attendance";
import Personel from "./Student/Persoonel";
import Notification from "./Student/Notification";

import TAttendance from "./Teacher/Attendance";
import TLAttendance from "./Teacher/TAttendance";
import TPersonel from "./Teacher/TPersonel";
import TNotification from "./Teacher/TNotification";

import Fake from "./Fake/Fake";
import WrongEmailPopup from "./WrongEmailPopup";
import AddTeacher from "./Admin/AddTeacher";
import AddStudent from "./Admin/AddStudent";
import AddCourses from "./Admin/AddCourses";

function App() {
  const user = useAuthStore((state) => state.user);
  const error = useAuthStore((state) => state.error);

  // 🔐 Not logged in
  if (!user) {
    return (
      <>
        <Login setShowForm={() => {}} />
        {error && <WrongEmailPopup />}
      </>
    );
  }

  // 🎯 Role-based default route
  const email = user.email;
  let defaultRoute = "/Subjects";

  if (email === "Teacher@gmail.com") defaultRoute = "/TAttendance";
  else if (email === "Admin@gmail.com") defaultRoute = "/AddTeacher";

  return (
    <BrowserRouter>
      <Nav />

      {/* Global popup */}
      {error && <WrongEmailPopup />}

      <Routes>
        {/* Role-based home */}
        <Route path="/" element={<Navigate to={defaultRoute} replace />} />

        {/* Student */}
        <Route path="/Subjects" element={<Subject />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Personel" element={<Personel />} />
        <Route path="/Notification" element={<Notification />} />

        {/* Teacher */}
        <Route path="/TAttendance" element={<TAttendance />} />
        <Route path="/TLAttendance" element={<TLAttendance />} />
        <Route path="/TPersonel" element={<TPersonel />} />
        <Route path="/TNotification" element={<TNotification />} />

        {/* Admin / Fallback */}
        <Route path="/AddTeacher" element={<AddTeacher/>} />
        <Route path="/AddStudent" element={<AddStudent/>} />
        <Route path="/AddCourses" element={<AddCourses/>} />

        <Route path="/fake" element={<Fake />} />
        <Route path="*" element={<Navigate to={defaultRoute} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
