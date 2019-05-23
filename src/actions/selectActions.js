import { SELECT_BOARD } from "./actionTypes";

export const selectBoard = id => ({
    type : SELECT_BOARD , 
    payload : id
})