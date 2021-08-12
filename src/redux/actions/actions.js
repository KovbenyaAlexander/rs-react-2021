import {
  SET_SEARCH_TEXT,
  SET_CHARACTERS_DATA,
  CARD_PER_PAGE_VALUE,
  SET_DETAILS_ID,
  SET_DETAILS_INFO,
} from './actionsTypes';

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

export function setCardPerPageValue(value) {
  return {
    type: CARD_PER_PAGE_VALUE,
    payload: value,
  };
}

export function setDetailsId(id) {
  return {
    type: SET_DETAILS_ID,
    payload: id,
  };
}

export function setDetailsInfo(data) {
  return {
    type: SET_DETAILS_INFO,
    payload: data,
  };
}
