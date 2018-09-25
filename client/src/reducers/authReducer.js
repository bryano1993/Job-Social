import { SET_CURRENT_USER, TEST_DISPATCH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  hello: "test"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
        //fill user with payload which is userdate from auth actions
        // all we are doing is dispatching to the user the data thats passed in
      };
    default:
      return state;
  }
}
