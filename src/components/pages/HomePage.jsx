import React from "react";
import NoteList from "../NoteList";
import SearchBar from "../SearchBar";
import { getActiveNotes } from "../../utils/local-data";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    const notes = getActiveNotes();

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
      }
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <section>
        <h2 style={{ textAlign: "center" }}>Active Notes</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        <NoteList notes={notes} />
        <div className="homepage__action">
          <Link className="action" to="/add"><HiPlus/></ Link>
        </div>
      </section>
    );
  }
}

export default HomePage;
