/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  AuthContext,
  LocaleContext,
  ThemeContext,
} from './contexts/LocaleContext';
import { getUserLogged } from './utils/api';
import { paths } from './routes/paths';
import HomePage from './components/pages/HomePage';
import Navigation from './components/Navigation';
import AddPage from './components/pages/AddPage';
import DetailPageWrapper from './components/pages/DetailPage';
import ArchivePage from './components/pages/ArchivePage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState(
    localStorage.getItem('localization') || 'id'
  );
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const initDataUser = async () => {
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuth(data);
    }
  };

  useEffect(() => {
    initDataUser();
    // if (theme === 'light') {
    //   document.documentElement.setAttribute('data-theme', 'light');
    // }
  }, []);

  const authContextValue = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  const localeContextValue = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale]
  );

  const themeContextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <div className="app-container">
            <header>
              <h2>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  Note App
                </Link>
              </h2>
              <Navigation />
            </header>
            <main>
              <Routes>
                {paths.map((item, index) => (
                  <Route key={index} {...item} />
                ))}
              </Routes>
            </main>
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
