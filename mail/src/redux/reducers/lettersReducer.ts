import { Reducer } from "redux";
import { FETCH_LETTERS } from "./../consts";
import { AnyAction } from "redux";
import { Letter } from "./../../models/Letter";

type LettersStateType = {
  messages: Array<Letter>;
  currentPage: number;
  totalPages: number;
  totalItems: number;
};
const initialState: LettersStateType = {
  messages: [],
  currentPage: 0,
  totalPages: 0,
  totalItems: 0,
};

const lettersReducer: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_LETTERS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default lettersReducer;
