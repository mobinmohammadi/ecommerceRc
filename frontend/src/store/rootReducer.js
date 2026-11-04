import { combineReducers } from "@reduxjs/toolkit";
import HomeReducer from "./Reducers/homeReducers";

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;   // ← default export