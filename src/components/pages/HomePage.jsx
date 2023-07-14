/* eslint-disable spaced-comment */
import React, { useState, useEffect } from 'react';
import NoteList from '../NoteList';
import SearchBar from '../SearchBar';
import useInput from '../hooks/useInput';
import { getActiveNotes } from '../../utils/api';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function HomePage() {
  const [notes, setNotes] = useState([]); //all notes
  const [initNotes, setInitNotes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]); //filtered notes
  const [search, setSearch] = useInput('');

  const activeNotesHandler = async () => {
    try {
      setLoading(true);
      const { error, data } = await getActiveNotes();

      if (!error) {
        setNotes(data);
        setInitNotes(true);
      }
    } catch (error) {
      throw new Error(`ErrorL ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!initNotes) {
      activeNotesHandler();
    }

    if (initNotes) {
      let tempNotes = [...notes];
      if (search !== '') {
        tempNotes = tempNotes.filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      setFilteredNotes(tempNotes);
    }
  }, [search]);

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Active Notes</h2>
      <SearchBar keyword={title} keywordChange={setSearch} />
      {filteredNotes.length > 0 && !loading ? (
        <NoteList notes={filteredNotes} />
      ) : (
        ''
      )}
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
