import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem } from "../../actions/itemActions";

export class AddItem extends Component {
  state = {
    titleInput: ""
  };

  updateInput = e => {
    e.preventDefault()
    this.setState({ [e.target.id]: e.target.value });
  };

  handleAdd = () => {
    if (this.state.titleInput.trim().length > 0) {
      this.props.addItem({ title: this.state.titleInput }, this.props.cardId);
    }
    this.setState({
      titleInput : ''
    });
  };

  render() {
    const buttonDisplay =
      this.state.titleInput.trim().length > 0 ? "inline" : "none";

    return (
      <div className="add-item">
        <input
          type="text"
          onChange={this.updateInput.bind(this)}
          id="titleInput"
          placeholder="Add new task"
          value={this.state.titleInput}
        />
        <button className="btn update"
          onClick={this.handleAdd.bind(this)}
          style={{ display: buttonDisplay }}
        >
          ✔
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (item, cardId) => dispatch(addItem(item, cardId))
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
