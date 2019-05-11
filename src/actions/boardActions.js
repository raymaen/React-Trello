import {
  ADD_BOARD,
  UPDATE_BOARD,
  REMOVE_BOARD,
  REMOVE_CARD,
  REMOVE_ITEM
} from "./actionTypes";

import idGen from "uuid/v4";
import colorGen from '../assets/consts/colorGenerator'

export const addBoard = board => ({
  type: ADD_BOARD,
  payload: { ...board, id: board.id || idGen().substring(0, 6), cards: [] , color : colorGen() }
});
export const updateBoard = board => ({
  type: UPDATE_BOARD,
  payload: board
});
export const removeBoard = id => (dispatch, getState) => {
  console.log("im called!!!");
  const cardIdsToRemove = getState().boards[id].cards;

  // Get all the itemIDs , by the cardIDs and put them in a flat array
  const itemIdsToRemove = cardIdsToRemove
    .map(cardId => getState().cards[cardId].items)
    .flat(1);

  console.log("items ids array");
  console.log(itemIdsToRemove);

  // Remove all items in the board
  itemIdsToRemove.forEach(itemId => {
    dispatch({
      type: REMOVE_ITEM,
      payload: itemId
    });
  });

  // Remove all cards in the board
  cardIdsToRemove.forEach(cardId => {
    dispatch({
      type: REMOVE_CARD,
      payload: cardId
    });
  });

  // Finally , remove board
  dispatch({
    type: REMOVE_BOARD,
    payload: id
  });
};
// {
//   type: REMOVE_BOARD,
//   payload: id
// }
