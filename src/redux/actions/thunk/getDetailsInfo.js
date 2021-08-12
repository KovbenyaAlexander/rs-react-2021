import { setDetailsInfo } from '../actions';

const getDetailsInfo = () => (dispatch, getState) => {
  const state = getState();
  // console.log(state);
  const { detailsID } = state;
  const URL = `https://the-one-api.dev/v2/character/${detailsID}`;

  console.log('THUNK');

  fetch(URL, {
    method: 'GET',
    headers: {
      // Authorization: 'Bearer z6LNSGjwUCwFg_6rz5Zy',
      Authorization: 'Bearer db3XQf7N45ifx9Pj1BAA',
    },
  })
    .then((response) =>
      // if (response.status === 429) {
      // }
      response.json(),
    )
    .then((Data) => {
      // console.log(Data);

      dispatch(setDetailsInfo(Data.docs[0]));
      // setLoading(false);
    })
    .catch(() => {});
};

export default getDetailsInfo;
