import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/pages/HomePage';
import Navigation from './components/Navigation';
import AddPage from './components/pages/AddPage';
import DetailPageWrapper from './components/pages/DetailPage.jsx';
import ArchivePage from './components/pages/ArchivePage';
import NotFoundPage from './components/pages/NotFoundPage';


function App() {
  return (
    <div className="app-container">
      <header>
        <h2><Link to="/" style={{ textDecoration: "none" }}>Note App</Link></h2>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/active-notes" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/note/:id" element={<DetailPageWrapper/>} />
          <Route path="/archived-notes" element={<ArchivePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
