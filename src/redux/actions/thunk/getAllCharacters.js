import {
  setCharactersData,
  setLoadingStatus,
  setErrorStatus,
} from '../actions';

const getAllCharacters = () => (dispatch, getState) => {
  const state = getState();
  const { searchText } = state;
  const { currentPage } = state;
  const { cardsPerPage } = state;
  dispatch(setLoadingStatus(true));
  const URL = `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${cardsPerPage}&sort=${state.sort}&name=/${searchText}/i`;
  fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer db3XQf7N45ifx9Pj1BAA',
    },
  })
    .then((response) => {
      if (response.status === 429) {
        setErrorStatus(true);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(setLoadingStatus(false));
      dispatch(setCharactersData(data));
    })
    .catch(() => {
      setErrorStatus(true);
      dispatch(setLoadingStatus(false));
    });
};

export default getAllCharacters;
