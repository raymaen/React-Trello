import React, { Component } from "react";
import { connect } from "react-redux";

import { addBoard } from "../../actions/boardActions";

export class AddBoard extends Component {
  state = {
    editMode: false,
    titleInput: ""
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  updateInput = e => this.setState({ [e.target.id]: e.target.value });

  handleAdd = () => {
    if (this.state.titleInput.trim().length > 0) {
      this.props.addBoard(this.state.titleInput);
    }
    this.setState({
      editMode: !this.state.editMode
    });
    this.setState({
      titleInput: ""
    })
  };

  render() {
    let content;
    if (!this.state.editMode) {
      content = (
        <div className="add-board">
          {/* Enter edit mode */}
          <button
            className="btn btn-outline-dark"
            onClick={() => this.setState({ editMode: !this.state.editMode })}
          >
            Add board +
          </button>
        </div>
      );
    } else {
      content = (
        <div className="add-board">
          {/* The card title input */}
          <div className="input-mode">
            <input
              type="text"
              onChange={this.updateInput.bind(this)}
              id="titleInput"
              placeholder="Board title"
            />

            {/* Save changes and add new card */}
            <button className="btn update" onClick={this.handleAdd.bind(this)}>✔</button>

            {/* Hide edit mode */}
            <button className="btn back"
              onClick={() => this.setState({ editMode: !this.state.editMode })}
            >
              ↶
            </button>
          </div>
        </div>
      );
    }

    return content;
  }
}

const mapDispatchToProps = dispatch => ({
  addBoard: title => {
    console.log("adding board");
    dispatch(addBoard({ title }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddBoard);
