import React, { useState, useEffect } from 'react';
import NoteList from '../NoteList';
import { getArchivedNotes } from '../../utils/api';
import SearchBar from '../SearchBar';
import { useSearchParams } from 'react-router-dom';
import Loading from '../Loading';
import { useLanguage } from '../hooks/useLanguage';

function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const text = useLanguage('note');

  useEffect(() => {
    getArchivedNotes()
      .then(({ data }) => {
        setNotes(data);
      })
      .finally(() => {
        setLoading(false);
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
      <h2 className="title-page">{text.archive.title}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {notes.length === 0 ? (
            <p>{text.archive.empty}</p>
          ) : (
            <NoteList notes={filteredNotes} />
          )}
        </>
      )}
    </section>
  );
}

export default ArchivePage;
