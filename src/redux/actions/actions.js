import {
  SET_SEARCH_TEXT,
  SET_CHARACTERS_DATA,
  CARD_PER_PAGE_VALUE,
  SET_DETAILS_ID,
  SET_DETAILS_INFO,
  SET_LOADING_STATUS,
  SET_ERROR_STATUS,
  SET_SORT_TYPE,
  SET_NUMBER_OF_PAGE,
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

export function setLoadingStatus(status) {
  return {
    type: SET_LOADING_STATUS,
    payload: status,
  };
}

export function setErrorStatus(status) {
  return {
    type: SET_ERROR_STATUS,
    payload: status,
  };
}

export function setSortType(status) {
  return {
    type: SET_SORT_TYPE,
    payload: status,
  };
}

export function setNumberOfPage(page) {
  return {
    type: SET_NUMBER_OF_PAGE,
    payload: page,
  };
}
