import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  error: "",
  isFetching: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CHARS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [ ...state.characters, ...action.payload],
        isFetching: false,
        error: false
      };
    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
