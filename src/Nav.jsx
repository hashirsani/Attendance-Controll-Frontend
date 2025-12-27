import { useState } from "react";
import useAuthStore from "./Combine/store";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const User = user ? user.email : "";
  const handleLogout = () => {
    logout();
    navigate("/", { replace: true }); // reset URL
  };

  const Student = [
    { item: "Subjects", link: "/Subjects" },
    { item: "Personal", link: "/Personel" },
    { item: "Notification", link: "/Notification" },
  ];

  const Teacher = [
    { item: "Attendance", link: "/TAttendance" },
    { item: "Personal", link: "/TPersonel" },
    { item: "Notification", link: "/TNotification" },
  ];

  const Admin = [
    { item: "Add Teacher", link: "/AddTeacher" },
    { item: "Add Student", link: "/AddStudent" },
    { item: "Add Courses", link: "/AddCourses" },
    { item: "Notification", link: "/fake" },
  ];

  let menu = [];
  if (User === "Teacher@gmail.com") menu = Teacher;
  else if (User === "Student@gmail.com") menu = Student;
  else if (User === "Admin@gmail.com") menu = Admin;
  console.log(User);
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `rounded-2xl py-3 px-4 font-medium transition
                   ${
                     isActive
                       ? "bg-indigo-600 text-white"
                       : "text-gray-600 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white"
                   }`
                }
              >
                {item.item}
              </NavLink>
            ))}

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-600 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 right-0 w-80 h-full bg-white shadow-xl z-50">
          <div className="p-4 space-y-2">

            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md font-medium transition
                   ${
                     isActive
                       ? "bg-indigo-600 text-white"
                       : "text-gray-700 hover: from-indigo-600 hover:text-white"
                   }`
                }
              >
                {item.item}
              </NavLink>
            ))}

            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-red-600 text-white py-3 rounded-md font-bold hover:bg-red-700 transition"
            >
              Logout
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
