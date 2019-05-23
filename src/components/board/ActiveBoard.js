import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from 'react-router-dom'

import Card from "../card/Card";
import AddCard from "../card/AddCard";

export class ActiveBoard extends Component {
  render() {

    console.log(this.props.selected)

    if(this.props.selected === null)
    return <Redirect to="/"/>

    const { allCards, board } = this.props;

    const allCardsConteiner = allCards.map(({ card, items }) => (
      <div className="col-md-3 mb-4 " key={card.id}>
        <Card
          card={card}
          key={card.id}
          boardId={this.props.board.id}
          items={items}
        />
      </div>
    ));

    const addCardContainer = (
      <div className="col-md-2 m-2">
        <AddCard boardId={board.id} />
      </div>
    );

    return (
      <div
        className="conteiner-fluid pl-2 pr-2 active-board"
        style={{ backgroundColor: board.color }}
      >
        <div className="row">
          <div className="col text-center">
            <h1 className="mt-1 mb-5">{board.title}</h1>
          </div>
        </div>
        <div className="row mr-5 ml-5">
          {allCardsConteiner}
          {addCardContainer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps.match.params.id;
  const board = state.boards[boardId];
  // Populate cards and items : cards : [{cardDetails , [...items]}]
  const allCards = board.cards.map(cardId => {
    return {
      card: state.cards[cardId],
      items: Object.values(
        state.cards[cardId].items.map(itemId => {
          return { items: state.items[itemId] };
        })
      )
    };
  });

  return {
    board,
    allCards,
    selected : state.selected
  };
};


export default connect(
  mapStateToProps
)(ActiveBoard);
