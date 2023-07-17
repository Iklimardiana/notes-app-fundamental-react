/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import { showFormattedDate } from '../utils/index';
import { LocaleContext } from '../contexts/AllContext';

function NoteItem({ title, createdAt, body, id }) {
  const { locale } = React.useContext(LocaleContext);
  const language = locale === 'en' ? 'en' : 'id';

  return (
    <NoteItemBody
      id={id}
      title={title}
      createdAt={showFormattedDate(createdAt, language)}
      body={body}
    />
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
