import React, { Component } from "react";
import { connect } from "react-redux";

import { addCard } from "../../actions/cardActions";

export class AddCard extends Component {
  state = {
    editMode: false,
    titleInput: ""
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  updateInput = e => this.setState({ [e.target.id]: e.target.value });

  handleAdd = () => {
    if (this.state.titleInput.trim().length > 0) {
      this.props.addCard({ title: this.state.titleInput }, this.props.boardId);
    }
    this.setState({
      editMode: !this.state.editMode
    });
  };

  render() {
    let content;
    if (!this.state.editMode) {
      content = (
        <div className="add-card">
          {/* Enter edit mode */}
          <button
            className="btn btn-outline-light add-card-btn"
            onClick={() => this.setState({ editMode: !this.state.editMode })}
          >
            Add card +
          </button>
        </div>
      );
    } else {
      content = (
        <div className="add-card">
          {/* The card title input */}
          <div className="input-mode">
            <input
              type="text"
              onChange={this.updateInput.bind(this)}
              id="titleInput"
              placeholder="Card title"
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
  addCard: (card, boardId) => dispatch(addCard(card, boardId))
});

export default connect(
  null,
  mapDispatchToProps
)(AddCard);
