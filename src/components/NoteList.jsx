import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <div className="notes-list__empty-message">
        <h3>Tidak ada catatan</h3>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default NoteList;
