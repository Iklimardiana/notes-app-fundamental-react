import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AllContext';

function MiddlewareRoute({ children, middleware }) {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  if (!authUser && middleware === 'auth') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (authUser && middleware === 'public') {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default MiddlewareRoute;
