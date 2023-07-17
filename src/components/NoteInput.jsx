import React, { useState, useContext } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLanguage } from './hooks/useLanguage';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [maxCharacter] = useState(50);
  const text = useLanguage('add');

  const onTitleChangeEventHandler = (event) => {
    const input = event.target.value.slice(0, maxCharacter);
    setTitle(input);
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  return (
    <div className="add-new-page__input">
      <form onSubmit={onSubmitEventHandler} required>
        <div className="add-new-page__input__title__char-limit">
          <p>
            {text.character}: {maxCharacter - title.length}
          </p>
        </div>
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder={text.placeholderTitle}
          value={title}
          onChange={onTitleChangeEventHandler}
          required
        />
        <textarea
          className="add-new-page__input__body"
          id="height"
          type="text"
          placeholder={text.placeholderBody}
          value={body}
          onChange={onBodyChangeEventHandler}
          required
        />
        <div className="add-new-page__action">
          <button type="button" className="action" title={text.cancelButton}>
            <Link to="/active-notes" className="action">
              <HiX />
            </Link>
          </button>
          <button className="action" type="submit" title={text.addButton}>
            <HiCheck />
          </button>
        </div>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
