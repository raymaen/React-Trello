import { ADD_BOARD, UPDATE_BOARD, REMOVE_BOARD } from "../actions/actionTypes";
import _ from "lodash";

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_BOARD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default boardReducer
