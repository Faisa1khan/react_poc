import { SET_DATA_GET_FROM_API, API, FETCH_DATA_USING_API } from "./types";

export function fetchDataDetails(url, data) {
  return apiAction({
    url: url,
    onSuccess: setDataDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_DATA_USING_API,
    data: data
  });
}

function setDataDetails(data) {
  return {
    type: SET_DATA_GET_FROM_API,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
