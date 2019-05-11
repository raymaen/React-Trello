import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from "../actions/actionTypes";
import _ from "lodash";

const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_ITEM:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_ITEM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default itemReducer
