import React from 'react';
import { useLanguage } from './hooks/useLanguage';

function Loading() {
  const text = useLanguage('app');
  return (
    <div className="loading">
      <p>{text.msg.loading}</p>
    </div>
  );
}

export default Loading;
