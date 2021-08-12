import {
  SET_SEARCH_TEXT,
  SET_CHARACTERS_DATA,
  CARD_PER_PAGE_VALUE,
  SET_DETAILS_ID,
  SET_DETAILS_INFO,
} from './actions/actionsTypes';

const initialState = {
  searchText: '',
  currentPage: 1,
  cardsPerPage: 20,
  sort: 'name:asc',
  charactersData: [],
  detailsID: 1,
  detailsInfo: {},
};

export default function reducer(state = initialState, action) {
  // console.log(action);

  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_CHARACTERS_DATA:
      return { ...state, charactersData: action.payload };
    case CARD_PER_PAGE_VALUE:
      return { ...state, currentPage: 1, cardsPerPage: action.payload };
    case SET_DETAILS_ID:
      return { ...state, detailsID: action.payload };
    case SET_DETAILS_INFO:
      return { ...state, detailsInfo: action.payload };
    default:
      return state;
  }
}
