import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MiddlewareRoute from '../middleware/MiddlewareRoute';
import AddPage from '../components/pages/AddPage';
import ArchivePage from '../components/pages/ArchivePage';
import DetailPageWrapper from '../components/pages/DetailPage';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/NotFound';
import RegisterPage from '../components/pages/RegisterPage';
import LoginPage from '../components/pages/LoginPage';

export const paths = [
  {
    path: '/',
    element: (
      <MiddlewareRoute middleware="auth">
        <HomePage />
      </MiddlewareRoute>
    ),
  },
  {
    path: '/archived-notes',
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
    path: '/note/:id',
    element: (
      <MiddlewareRoute middleware="auth">
        <DetailPageWrapper />
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
