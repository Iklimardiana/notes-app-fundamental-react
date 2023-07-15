import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  AuthContext,
  LocaleContext,
  ThemeContext,
} from './contexts/LocaleContext';
import { getUserLogged } from './utils/api';
import paths from './routes/paths';
import Navigation from './components/Navigation';

function App() {
  const [authUser, setAuth] = useState(null);
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
  }, []);

  const authContextValue = useMemo(
    () => ({
      authUser,
      setAuth,
    }),
    [authUser]
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
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
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
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
