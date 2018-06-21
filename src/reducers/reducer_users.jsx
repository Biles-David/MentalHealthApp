import { REGISTER_USER } from "../actions/index";
import { LOGIN_USER } from "../actions/index";
import { LOGOUT_USER } from "../actions/index";

const initialState = {
  users: [],
  user: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};