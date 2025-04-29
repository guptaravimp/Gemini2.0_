
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import ChatSlice from "../slices/ChatSlice"
const rootReducer = combineReducers({
  auth: authReducer,
  chat: ChatSlice
});

export default rootReducer;
