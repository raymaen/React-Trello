import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, removeItem } from "../../actions/itemActions";

export class Item extends Component {
  state = {
    editMode: false,
    editInput: this.props.item.title
  };

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSaveNewTitle = () => {
    this.setState({
      editMode: !this.state.editMode
    });
    const newInput = this.state.editInput;
    if (newInput.trim().length > 0) {
      this.props.updateItem({ ...this.props.item, title: newInput });
    }
  };

  handleDelete = itemId => {
    const cardId = this.props.cardId;
    const boardId = this.props.boardId;
    this.props.removeItem(itemId, cardId, boardId);
  };

  render() {
    if (!this.state.editMode) {
      return (
        <div className="item" draggable="true"  onClick={() => this.setState({ editMode: true })}>
          <h6>
            {this.props.item.title}
          </h6>
        </div>
      );
    } else {
      return (
        <div className="item">
          <input
            type="text"
            id="editInput"
            value={this.state.editInput}
            onChange={this.updateInput.bind(this)}
          />

          <div>
            <button
              className="btn update"
              onClick={this.handleSaveNewTitle.bind(this)}
            >
              ✔
            </button>

            <button
              className="btn delete"
              onClick={this.handleDelete.bind(this, this.props.item.id)}
            >
              ✘
            </button>

            <button
              className="btn back"
              onClick={() =>
                this.setState({
                  editMode: !this.state.editMode
                })
              }
            >
              ↶
            </button>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  updateItem: item => dispatch(updateItem(item)),
  removeItem: (itemId, cardId, boardId) =>
    dispatch(removeItem(itemId, cardId, boardId))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
