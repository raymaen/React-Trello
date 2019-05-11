import {
  ADD_CARD,
  UPDATE_CARD,
  REMOVE_CARD,
  REMOVE_ITEM,
  UPDATE_BOARD
} from "./actionTypes";
import idGen from "uuid/v4";

// ADD
export const addCard = (card, boardId) => (dispatch, getState) => {
  const newCard = { ...card, id: idGen().substring(0, 6), items: [] };

  // Save the new card
  dispatch({
    type: ADD_CARD,
    payload: newCard
  });

  // Get the board to update + add the new card id to the existing card id array
  const boardToUpdate = getState().boards[boardId];
  boardToUpdate.cards = [...boardToUpdate.cards, newCard.id];

  // Update the board
  dispatch({
    type: UPDATE_BOARD,
    payload: boardToUpdate
  });
};

//  UPDATE
export const updateCard = card => ({
  type: UPDATE_CARD,
  payload: card
});

// REMOVE
export const removeCard = (cardId, boardId) => (dispatch, getState) => {
  const cardToRemove = getState().cards[cardId];
  const boardToUpdate = getState().boards[boardId];

  boardToUpdate.cards = boardToUpdate.cards.filter(c => c !== cardId.toString());

  // Save board with updated card list
  dispatch({
    type: UPDATE_BOARD,
    payload: boardToUpdate
  });

  // Remove All Items
  cardToRemove.items.forEach(itemId => {
    dispatch({
      type: REMOVE_ITEM,
      payload: itemId
    });
  });

  // Finally , remove the card
  dispatch({
    type: REMOVE_CARD,
    payload: cardId
  });
};
