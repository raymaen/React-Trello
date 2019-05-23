import colorGen from "../consts/colorGenerator";
import wordGen from "random-sentence";

const items = {},
  cards = {},
  boards = {};

// Consistent ids for testing
let boardId = 46346346;
let cardId = 13525343453;
let itemId = 2342346346;

let counter = 0;

for (let i = 0; i < 27; i++) {
  const id = itemId;
  items[id] = {
    id,
    title: wordGen({ min: 4, max: 6 })
  };

  itemId++;
}

const itemKeys = Object.keys(items);

for (let i = 0; i < 9; i++) {
  const id = cardId;
  cards[id] = {
    id,
    title: wordGen({ min: 2, max: 7 }),
    items: [itemKeys[counter], itemKeys[counter + 1], itemKeys[counter + 2]]
  };
  counter += 3;
  cardId++;
}

counter = 0;

const cardKeys = Object.keys(cards);

for (let i = 0; i < 3; i++) {
  const id = boardId;
  boards[id] = {
    id,
    title: wordGen({ min: 2, max: 4 }),
    cards: [cardKeys[counter], cardKeys[counter + 1], cardKeys[counter + 2]],
    color: colorGen()
  };
  counter += 3;
  boardId++;
}

const initialState = {
  boards,
  cards,
  items,
  selected : null
};

export default initialState;
