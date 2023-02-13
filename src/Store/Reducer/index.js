import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";

const Reducer = combineReducers({ AuthReducer });

export default Reducer;