/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react';
import NoteList from '../NoteList';
import SearchBar from '../SearchBar';
import { getActiveNotes } from '../../utils/api';
import { HiPlus } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onKeywordChandeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Active Notes</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChandeHandler} />
      <NoteList notes={filteredNotes} />
      {notes.length === 0 && !loading ? <p>Catatan kosong</p> : ''}
      <div className="homepage__action">
        <Link className="action" to="/add">
          <HiPlus />
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
