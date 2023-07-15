import React from 'react';
import MiddlewareRoute from '../middleware/MiddlewareRoute';
import AddPage from '../components/pages/AddPage';
import ArchivePage from '../components/pages/ArchivePage';
import DetailPage from '../components/pages/DetailPage';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/NotFound';
import RegisterPage from '../components/pages/RegisterPage';
import LoginPage from '../components/pages/LoginPage';

const paths = [
  {
    path: '/',
    element: (
      <MiddlewareRoute middleware="auth">
        <HomePage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/notes/archived',
    element: (
      <MiddlewareRoute middleware="auth">
        <ArchivePage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/active-notes',
    element: (
      <MiddlewareRoute middleware="auth">
        <HomePage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/add',
    element: (
      <MiddlewareRoute middleware="auth">
        <AddPage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/notes/:id',
    element: (
      <MiddlewareRoute middleware="auth">
        <DetailPage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
  {
    path: '/login',
    element: (
      <MiddlewareRoute middleware="public">
        <LoginPage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <MiddlewareRoute middleware="public">
        <RegisterPage />
      </MiddlewareRoute>
    ),
  },
];

export default paths;
