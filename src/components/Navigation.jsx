import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, LocaleContext } from '../contexts/AllContext';
import LogoutButton from './LogoutButton';
import ThemeToggler from './ThemeToggler';
import { useLanguage } from './hooks/useLanguage';

function Navigation() {
  const { authUser } = useContext(AuthContext);
  const { toggleLanguage } = useContext(LocaleContext);
  const text = useLanguage('app');

  return (
    <>
      <div>
        <h2>
          <Link to="/" className="link">
            {text.title}
          </Link>
        </h2>
      </div>
      {authUser ? (
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/active-notes" className="link-nav">
                {text.nav.active}
              </Link>
            </li>
            <li>
              <Link to="/notes/archived" className="link-nav">
                {text.nav.archive}
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        ''
      )}
      <div className="nav-action">
        <button type="button" className="toggle-theme" onClick={toggleLanguage}>
          {text.nav.flag}
        </button>
        <ThemeToggler />
        <LogoutButton />
      </div>
    </>
  );
}

export default Navigation;
