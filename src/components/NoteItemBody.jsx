import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItemBody({ title, createdAt, body, id}) {
    return (
        <div className="note-item">
            <h3 className="note-item__title"><Link to={`/note/${id}`} className="link">{title}</Link></h3>
            <span className="note-item__createdAt">{createdAt}</span>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemBody;