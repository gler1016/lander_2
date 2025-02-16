import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './_theme-toggle.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`toggle-container ${theme === "dark" && 'bg-dark'}`}>
      {theme === 'light' ? (
    <button
      onClick={toggleTheme}
      className="nav-button"
      aria-label="Toggle theme"
    >
      <Sun className="nav-button__icon" />
    
    </button>) : (
      <button
      onClick={toggleTheme}
      className="nav-button dark"
      aria-label="Toggle theme"
    >
      <Moon className="nav-button__icon" />
    </button>
    )}
    </div>
  );
};

export default ThemeToggle;