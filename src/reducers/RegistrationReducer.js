const initialState = {
  name: undefined,
  email: undefined,
  password: undefined,
  phone: undefined,
  age: undefined,
  referral: undefined
};

const RegistrationReducer = (state = initialState, action) => {
  if (action.type === "REGISTER_NAME") {
    return {
      ...state,
      name: action.payload.name
    };
  } else if (action.type === "REGISTER_EMAIL") {
    return {
      ...state,
      email: action.payload.email
    };
  } else if (action.type === "REGISTER_PASSWORD") {
    return {
      ...state,
      password: action.payload.password
    };
  } else if (action.type === "REGISTER_PHONE") {
    return {
      ...state,
      phone: action.payload.phone
    };
  } else if (action.type === "REGISTER_REFERRAL") {
    return {
      ...state,
      referral: action.payload.referral
    };
  } else if (action.type === "REGISTER_AGE") {
    return {
      ...state,
      age: action.payload.age
    };
  }

  return state;
};

export default RegistrationReducer;
