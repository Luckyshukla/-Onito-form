/**
 * reducers js
 *
 * it will have all the reducers will be combined
 *
 * For more function follow axios documentation
 *
 * Project:
 *
 * Devlopers:
 * 1. Lucky shukla
 */

import { combineReducers } from "redux";
import { userDataReducer } from "../pages/store/reducer";

// import { addUserReducer } from '../pages/addUser/store/reducer';

const rootReducer = combineReducers({
  userData: userDataReducer,
});

export default rootReducer;
