import {
  ACTION_LOGOUT,
  ACTION_LOGIN,
  CHANGE_LANGUAGE
} from "../actions/appActions";

export interface appReducerState {
  login: boolean;
  language: {};
}

const initialState: appReducerState = {
  login: false,
  language: { name: "fa", dir: "rtl" }
};

export function reducer(state = initialState, action): appReducerState {
  switch (action.type) {
    case ACTION_LOGOUT:
      console.log("HERE");
      return {
        ...state,
        login: false
      };
    case ACTION_LOGIN:
      console.log("Login Action Called");
      return {
        ...state,
        login: true
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        login: true
      };
    default:
      break;
  }
  return state;
}
