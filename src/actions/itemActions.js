import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, UPDATE_CARD } from "./actionTypes";
import idGen from "uuid/v4";

export const addItem = (item, cardId) => (dispatch, getState) => {
  const newItem = { ...item, id: idGen().substring(0, 6) };
  const cardToUpdate = getState().cards[cardId];
  cardToUpdate.items = [...cardToUpdate.items, newItem.id];

  dispatch({
    type: ADD_ITEM,
    payload: newItem
  });

  dispatch({
    type: UPDATE_CARD,
    payload: cardToUpdate
  });
};

export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
});

export const removeItem = (itemId, cardId) => (dispatch, getState) => {
  const { cards } = getState();
  const cardToUpdate = cards[cardId];

  cardToUpdate.items = [
    ...cardToUpdate.items.filter(existingId => existingId !== itemId.toString())
  ];

  // Update the parent card where the item was deleted
  dispatch({
    type: UPDATE_CARD,
    payload: cardToUpdate
  });

  // Remove The item
  dispatch({
    type: REMOVE_ITEM,
    payload: itemId
  });
};
