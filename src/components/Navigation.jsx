import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/LocaleContext';
import LogoutButton from './LogoutButton';

function Navigation() {
  const { authUser } = useContext(AuthContext);

  return (
    <>
      {authUser ? (
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/active-notes" className="link-nav">
                Active Notes
              </Link>
            </li>
            <li>
              <Link to="/notes/archived" className="link-nav">
                Archived Notes
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      ) : (
        ''
      )}
    </>
  );
}

export default Navigation;
