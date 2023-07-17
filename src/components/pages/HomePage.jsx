import React, { useState, useEffect } from 'react';
import NoteList from '../NoteList';
import SearchBar from '../SearchBar';
import { getActiveNotes } from '../../utils/api';
import { HiPlus } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';
import Loading from '../Loading';
import { useLanguage } from '../hooks/useLanguage';

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const text = useLanguage('note');

  useEffect(() => {
    getActiveNotes()
      .then(({ data }) => {
        setNotes(data);
      })
      .finally(() => {
        setLoading(false);
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
      <h2 style={{ textAlign: 'center' }}>{text.active.title}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChandeHandler} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {notes.length === 0 ? (
            <p>{text.active.empty}</p>
          ) : (
            <NoteList notes={filteredNotes} />
          )}
        </>
      )}
      <div className="homepage__action">
        <button type="button" className="action" title={text.add}>
          <Link className="action" to="/add">
            <HiPlus title={text.add} />
          </Link>
        </button>
      </div>
    </section>
  );
}

export default HomePage;
