import React, { useEffect } from 'react';
import { GrSun } from 'react-icons/gr';
import { IoMdMoon } from 'react-icons/io';
import useTheme from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';

function ThemeToggler() {
  const [theme, setTheme] = useTheme();
  const text = useLanguage('app');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return (
    <button
      type="button"
      title={text.nav.title}
      className="toggle-theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <IoMdMoon /> : <GrSun />}
    </button>
  );
}

export default ThemeToggler;
