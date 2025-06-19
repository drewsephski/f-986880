import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx';

// Immediately apply theme class to HTML element to prevent FOUC
(function() {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = (storedTheme === 'dark-mode' || storedTheme === 'light-mode') ? storedTheme : 'dark-mode';
  const root = window.document.documentElement;
  root.classList.remove('light-mode', 'dark-mode');
  root.classList.add(initialTheme);
})();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
