import { SIGN_IN, USER_FAIL, LOG_OUT, REGISTER,GET_USER } from "../Types";
const initState = { user: null, isAuth: false ,};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
    case REGISTER:
      localStorage.setItem("token", action.payload.token);
      return { ...state, user: action.payload.user, isAuth: true };
    case LOG_OUT:
    case USER_FAIL:
      localStorage.clear();
      return { user: null, isAuth: false };
      case GET_USER:return {...state,user:action.payload}
    default:
      return state;
  }
};
export default authReducer;
