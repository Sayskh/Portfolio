import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="m12 1 0 2" />
    <path d="m12 21 0 2" />
    <path d="m4.22 4.22 1.42 1.42" />
    <path d="m18.36 18.36 1.42 1.42" />
    <path d="m1 12 2 0" />
    <path d="m21 12 2 0" />
    <path d="m4.22 19.78 1.42-1.42" />
    <path d="m18.36 5.64 1.42-1.42" />
  </svg>
);
const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    stroke="none"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#1f1f1f] transition-colors"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 260 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <SunIcon className="w-5 h-5 text-yellow-500" />
        ) : (
          <MoonIcon className="w-5 h-5 text-slate-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;