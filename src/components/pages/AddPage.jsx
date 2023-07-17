import React from 'react';
import { addNotes } from '../../utils/api';
import NoteInput from '../NoteInput';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

function AddPage() {
  const text = useLanguage('add');
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNotes(note);
    navigate('/');
  }

  return (
    <section>
      <h1 className="title-page">{text.title}</h1>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
