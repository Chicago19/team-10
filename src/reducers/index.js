import { combineReducers } from "redux";
import RegistrationReducer from "./RegistrationReducer";
import LoginReducer from "./LoginReducer";
import ExamReducer from "./ExamReducer";

export default combineReducers({
  RegistrationReducer,
  LoginReducer,
  ExamReducer
});
