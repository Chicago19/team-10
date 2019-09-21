import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({
  RegistrationReducer,
  LoginReducer
});
