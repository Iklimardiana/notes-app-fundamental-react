import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from './hooks/useLanguage';

function SearchBar({ keyword, keywordChange }) {
  const text = useLanguage('note');
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={text.placeholderSearch}
        name="search"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
