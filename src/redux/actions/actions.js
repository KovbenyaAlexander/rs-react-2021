import { SET_SEARCH_TEXT, SET_CHARACTERS_DATA } from './actionsTypes';

export function setSearchText(text) {
  return {
    type: SET_SEARCH_TEXT,
    payload: text,
  };
}

export function setCharactersData(data) {
  return {
    type: SET_CHARACTERS_DATA,
    payload: data,
  };
}
