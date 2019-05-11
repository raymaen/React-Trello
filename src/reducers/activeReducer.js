import { SELECT_BOARD , SELECT_CARD ,GET_SELECTED_STATUS} from "../actions/actionTypes";

/*
state = {
    boardID
    cardID
}
*/

const activeReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_BOARD:
      return { ...state, selectedBoardId: action.payload };
      case SELECT_CARD:
      return { ...state, selectedCardId: action.payload };
    case GET_SELECTED_STATUS:
      return state
    default:
      return state;
  }
};

export default activeReducer