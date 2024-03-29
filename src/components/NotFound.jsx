import React from 'react';
import { useLanguage } from './hooks/useLanguage';

function NotFound() {
  const text = useLanguage('app');
  return (
    <div className="not-found">
      <h1>Oops! :( </h1>
      <h2>404 - {text.notFound}</h2>
    </div>
  );
}

export default NotFound;
