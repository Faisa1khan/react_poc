import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError
} from "./FetchData";

function fetchDataUsingApi() {
  return dispatch => {
    dispatch(fetchDataPending());
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchDataSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}

export default fetchDataUsingApi;
