import React from "react";
import { addNote } from '../../utils/local-data';
import NoteInput from '../NoteInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <section>
            <h1 className="title-page">Add Note</h1>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;