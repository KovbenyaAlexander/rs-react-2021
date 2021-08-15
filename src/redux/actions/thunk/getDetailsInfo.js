import { setDetailsInfo, setLoadingStatus, setErrorStatus } from '../actions';

const getDetailsInfo = () => (dispatch, getState) => {
  dispatch(setLoadingStatus(true));
  const state = getState();
  const { detailsID } = state;
  const URL = `https://the-one-api.dev/v2/character/${detailsID}`;

  fetch(URL, {
    method: 'GET',
    headers: {
      // Authorization: 'Bearer z6LNSGjwUCwFg_6rz5Zy',
      Authorization: 'Bearer db3XQf7N45ifx9Pj1BAA',
    },
  })
    .then((response) => {
      if (response.status === 429) {
        dispatch(
          setErrorStatus({
            isError: true,
            errorMsg: 'Too many requests. Try later.',
          }),
        );
      }
      return response.json();
    })
    .then((Data) => {
      dispatch(setDetailsInfo(Data.docs[0]));
      dispatch(setLoadingStatus(false));
    })
    .catch(() => {
      dispatch(setLoadingStatus(false));
      setErrorStatus(true);
    });
};

export default getDetailsInfo;
