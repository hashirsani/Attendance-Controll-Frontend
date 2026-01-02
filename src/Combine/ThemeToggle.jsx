import React from "react";
import { useTheme } from "./ThemeContext"; // Import your context
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Use global state

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
    >
      {theme === "light" ? (
        <Moon className="text-slate-700" size={24} />
      ) : (
        <Sun className="text-amber-400" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;