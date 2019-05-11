import { SELECT_BOARD, SELECT_CARD, GET_SELECTED_STATUS } from "./actionTypes";

export const selectBoard = id => ({
  type: SELECT_BOARD,
  payload: id
});

export const selectCard = id => ({
  type: SELECT_CARD,
  payload: id
});

// export const getSelectedStatus = () => ({
//   type: GET_SELECTED_STATUS
// });
