import React, { useState } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('dark');

  const switchTheme = (value) => {
    setTheme(value);
    const root = window.document.documentElement;
    root.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
  };
  return [theme, switchTheme];
}

export default useTheme;
