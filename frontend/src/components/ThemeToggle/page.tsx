"use client";

// Imports Principais
import { useEffect, useState } from "react";

// Icons
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";

// Style Sheet CSS
import "./styles.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Lê o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);

      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className={`toggle-btn ${theme}`} onClick={toggleTheme}></button>
  );
}

export { ThemeToggle };
