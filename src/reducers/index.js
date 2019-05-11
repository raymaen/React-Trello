import { combineReducers } from "redux";
import boards from './boardRecucer'
import cards from './cardReducer'
import items from './itemReducer'

export default combineReducers({
    boards , cards , items
})