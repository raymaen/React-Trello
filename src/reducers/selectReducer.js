import { SELECT_BOARD } from "../actions/actionTypes";

const selectReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_BOARD:
      return action.payload
    default:
      return state;
  }
};

export default selectReducer
