/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { addNotes } from '../../utils/api';
import NoteInput from '../NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNotes(note);
    navigate('/');
  }

  return (
    <section>
      <h1 className="title-page">Add Note</h1>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
