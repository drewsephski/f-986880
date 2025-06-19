import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark-mode' | 'light-mode';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme');
    return (storedTheme === 'dark-mode' || storedTheme === 'light-mode') ? (storedTheme as Theme) : 'dark-mode'; // Default to dark theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light-mode', 'dark-mode'); // Remove existing classes
    root.classList.add(theme); // Add the current theme class
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};