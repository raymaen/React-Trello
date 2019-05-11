import { ADD_CARD, UPDATE_CARD, REMOVE_CARD } from "../actions/actionTypes";
import _ from "lodash";

const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_CARD:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_CARD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default cardReducer
