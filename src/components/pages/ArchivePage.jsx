import React, { useState, useEffect } from 'react';
import NoteList from '../NoteList';
import { getArchivedNotes } from '../../utils/api';
import SearchBar from '../SearchBar';
import { useSearchParams } from 'react-router-dom';

function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <h2 className="title-page">Archive Notes</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
      {notes.length === 0 && !loading ? <p>Catatan kosong</p> : ''}
    </section>
  );
}

export default ArchivePage;
