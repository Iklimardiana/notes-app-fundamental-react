/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { MdLogout } from 'react-icons/md';
import { AuthContext } from '../contexts/AllContext';
import { useLanguage } from './hooks/useLanguage';

function LogoutButton() {
  const { authUser } = useContext(AuthContext);
  const text = useLanguage('app');

  const handleLogout = () => {
    if (confirm(text.msg.confirm)) {
      localStorage.removeItem('accessToken');
      window.location = '/';
    }
  };

  return (
    <div>
      {authUser ? (
        <button
          type="button"
          title={text.logout}
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
