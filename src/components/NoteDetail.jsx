/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import { HiOutlineTrash, HiArrowNarrowLeft } from 'react-icons/hi';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { archiveNote, unarchiveNote, deleteNote } from '../utils/api';

function NoteDetail({ note }) {
  if (!note) {
    return <p>tidak ada</p>;
  }
  const { title, body, createdAt, archived } = note;
  const navigate = useNavigate();

  const handleArchive = async (id) => {
    try {
      await archiveNote(id);
      navigate('/active-notes');
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const handleUnarchive = async (id) => {
    try {
      await unarchiveNote(id);
      navigate('/archived-notes');
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      navigate('/active-notes');
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <div className="detail-page">
      <p>
        <Link to={'/'} className="back-button link">
          <HiArrowNarrowLeft /> Back
        </Link>
      </p>
      <p className="detail-page__title">{title}</p>
      <p className="detail-page__createdAt">
        Created At: {showFormattedDate(createdAt)}
      </p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        {archived ? (
          <button className="action" onClick={() => handleUnarchive(note.id)}>
            <BiArchiveOut />
          </button>
        ) : (
          <button className="action" onClick={() => handleArchive(note.id)}>
            <BiArchiveIn />
          </button>
        )}
        <button className="action" onClick={() => handleDelete(note.id)}>
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteDetail;
