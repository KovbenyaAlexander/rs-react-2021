import { setCharactersData } from '../actions';

const getAllCharacters = () => (dispatch, getState) => {
  const state = getState();
  const { searchText } = state;
  const { currentPage } = state;
  const { cardsPerPage } = state;
  const URL = `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${cardsPerPage}&sort=${state.sort}&name=/${searchText}/i`;
  fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer db3XQf7N45ifx9Pj1BAA',
    },
  })
    .then((response) => {
      if (response.status === 429) {
        // TODO: setErorr for 429 status
      }
      return response.json();
    })
    .then((data) => {
      dispatch(setCharactersData(data));
    })
    .catch(() => {});
};

export default getAllCharacters;
