const initialState = {
  email: undefined,
  password: undefined
};

const LoginReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_EMAIL") {
    return {
      ...state,
      email: action.payload.email
    };
  } else if (action.type === "LOGIN_PASSWORD") {
    return {
      ...state,
      password: action.payload.password
    };
  }

  return state;
};

export default LoginReducer;
