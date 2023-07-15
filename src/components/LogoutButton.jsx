/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { MdLogout } from 'react-icons/md';
import { AuthContext } from '../contexts/LocaleContext';

function LogoutButton() {
  const { authUser } = useContext(AuthContext);

  const handleLogout = () => {
    if (confirm('apakah akan logout?')) {
      localStorage.removeItem('accessToken');
      window.location = '/';
    }
  };

  return (
    <div>
      {authUser ? (
        <button
          type="button"
          title="Logout"
          className="button-logout"
          onClick={handleLogout}
        >
          <MdLogout />
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default LogoutButton;
