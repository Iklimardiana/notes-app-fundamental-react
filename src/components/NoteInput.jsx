import React from "react";
import { HiCheck, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxCharacter: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const input = event.target.value.slice(0, this.state.maxCharacter);
    this.setState({
      title: input,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="add-new-page__input">
        <form onSubmit={this.onSubmitEventHandler} required>
          <div className="add-new-page__input__title__char-limit">
            <p>
              Characters remaining:{" "}
              {this.state.maxCharacter - this.state.title.length}
            </p>
          </div>
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Input Title ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            className="add-new-page__input__body"
            id="height"
            type="text"
            placeholder="Input Notes ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
          <div className="add-new-page__action">
            <button className="action" >
              <Link to={"/active-notes"} className="action">
                <HiX />
              </Link>
            </button>
            <button className="action" type="submit">
              <HiCheck />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;