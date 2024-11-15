"use client";
import { createContext, useContext, useState } from "react";

const defaultTheme = "light";
const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);
