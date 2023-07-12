import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../NoteDetail";
import { getNote, archiveNote, unarchiveNote, deleteNote, getActiveNotes } from "../../utils/local-data";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  archivedNote = () => {
    const { id } = this.props;
    archiveNote(id);
    this.setState({ note: getNote(id) });
  };

  unarchivedNote = () => {
    const { id } = this.props;
    unarchiveNote(id);
    this.setState({ note: getNote(id) });
  };

  onDeleteNote = () => {
    const { id } = this.props;
    deleteNote(id);
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail 
        {...this.state.note} 
        onArchive={this.archivedNote}
        onUnarchive={this.unarchivedNote}
        onDelete={this.onDeleteNote}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;
