import { SET_SEARCH_TEXT, SET_CHARACTERS_DATA } from './actions/actionsTypes';

const initialState = {
  searchText: '',
  currentPage: 1,
  cardsPerPage: 20,
  sort: 'name:asc',
  charactersData: [],
};

export default function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_CHARACTERS_DATA:
      return { ...state, charactersData: action.payload };
    default:
      return state;
  }
}
