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
} from './actions/actionsTypes';

const initialState = {
  searchText: '',
  currentPage: 1,
  cardsPerPage: 20,
  sort: 'name:asc',
  charactersData: [],
  totalPages: 1,
  detailsID: '',
  detailsInfo: {},
  isLoading: false,
  isError: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, currentPage: 1, searchText: action.payload };
    case SET_CHARACTERS_DATA:
      return {
        ...state,
        charactersData: action.payload.docs,
        totalPages: action.payload.pages,
      };
    case CARD_PER_PAGE_VALUE:
      return { ...state, currentPage: 1, cardsPerPage: action.payload };
    case SET_DETAILS_ID:
      return { ...state, detailsID: action.payload };
    case SET_DETAILS_INFO:
      return { ...state, detailsInfo: action.payload };
    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.payload };
    case SET_ERROR_STATUS:
      return { ...state, isError: action.payload };
    case SET_SORT_TYPE:
      return { ...state, sort: action.payload };
    case SET_NUMBER_OF_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}
