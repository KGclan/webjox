import { useState, useEffect } from "react";
  
export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(localStorage.theme);
  
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add(theme);
    } else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return { theme, setTheme };
}