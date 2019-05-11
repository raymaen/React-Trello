import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCard, removeCard } from "../../actions/cardActions";

import Item from "../item/Item";
import AddItem from "../item/AddItem";

export class Card extends Component {
  state = {
    editMode: false,
    titleInput: this.props.card.title
  };

  toggleEdit = () => this.setState({ editMode: !this.state.editMode });

  updateInput = e => this.setState({ [e.target.id]: e.target.value });

  handleUpdate = () => {
    if (this.state.titleInput.trim().length > 0) {
      this.props.updateCard({
        ...this.props.card,
        title: this.state.titleInput
      });
    }
    this.setState({
      editMode: !this.state.editMode
    });
  };

  handleDelete = () => {
    this.props.removeCard(this.props.card.id, this.props.boardId);
    this.setState({
      editMode: !this.state.editMode
    });
  };

  render() {
    const { card, items} = this.props;
    // Items is an array of all of the items - and needs to be modified

    const allItemsContainer = items.map(item => {
      return <Item item={item.items} key={item.items.id} cardId={card.id} />;
    });

    let cardHeader = null;
    if (!this.state.editMode) {
      cardHeader = <h5 onClick={this.toggleEdit.bind(this)}>{card.title}</h5>;
    } else {
      cardHeader = (
        <div className="card-header">
          <input
            type="text"
            id="titleInput"
            value={this.state.titleInput}
            onChange={this.updateInput.bind(this)}
          />

          <button className="btn update" onClick={this.handleUpdate.bind(this)}>
            ✔
          </button>
          <button className="btn delete" onClick={this.handleDelete.bind(this)}>
            ✘
          </button>
          <button className="btn back" onClick={this.toggleEdit.bind(this)}>
            ↶
          </button>
        </div>
      );
    }

    return (
      <div className="card">
        {/* Card header: with toggle mode */}
        {cardHeader}
        {/* All the items : */}
        {allItemsContainer}
        <AddItem cardId={card.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateCard: card => dispatch(updateCard(card)),
  removeCard: (cardId, boardId) => dispatch(removeCard(cardId, boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
