import {
  SET_DATA_GET_FROM_API,
  API_START,
  API_END,
  FETCH_DATA_USING_API
} from "../actionCreator/types";

export default function(state = {}, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_DATA_GET_FROM_API:
      return { data: action.payload };
    case API_START:
      if (action.payload === FETCH_DATA_USING_API) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_DATA_USING_API) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
