import React from 'react';
import NoteList from '../NoteList';
import { getArchivedNotes } from '../../utils/local-data';
import SearchBar from '../SearchBar';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    const notes = getArchivedNotes();

    this.state = {
      notes: notes,
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <h2 className="title-page">Archive Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={notes} />
      </section>
    );
  }
}

export default ArchivePage;
