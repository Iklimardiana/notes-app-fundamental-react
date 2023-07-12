import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { HiOutlineTrash, HiArrowNarrowLeft } from "react-icons/hi";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function NoteDetail({
  title,
  createdAt,
  body,
  archived,
  onArchive,
  onUnarchive,
  onDelete,
}) {
  return (
    <div className="detail-page">
      <p>
        <Link to={"/"} className="back-button link">
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
          <button className="action" onClick={onUnarchive}>
            <Link to="/active-notes" className="action">
              <BiArchiveOut />
            </Link>
          </button>
        ) : (
          <button className="action" onClick={onArchive}>
            <Link to="/archived-notes" className="action">
              <BiArchiveIn />
            </Link>
          </button>
        )}
        <button className="action" onClick={onDelete}>
          <Link to="/active-notes" className="action">
            <HiOutlineTrash />
          </Link>
        </button>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
