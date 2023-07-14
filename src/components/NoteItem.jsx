/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import { showFormattedDate } from '../utils/index';

function NoteItem({ title, createdAt, body, id }) {
  return (
    <NoteItemBody
      id={id}
      title={title}
      createdAt={showFormattedDate(createdAt)}
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
