/**
 * reducer js
 *
 * it will have all the personal data related reducers
 *
 * Project:
 *
 * Devlopers:
 * 1. Lucky shukla
 */

import { createReducer } from "reduxsauce";
import { personalDataType } from "./action";
const INITIAL_STATE = {
  personalData: [],
  personalDataAdded: false,
  addressDataAdded: false,
  loading: false,
  countryNameList: [],
  dataSet: [[]],
};

// <---------------reducer for store personal data----------------->
const storePersonalDataReducer = (state = INITIAL_STATE, action) => {
  const { data } = action.payload;

  return {
    ...state,
    personalData: data,
    personalDataAdded: true,
  };
};
// <---------------reducer for address details ----------------->
const storeAddressDataReducer = (state = INITIAL_STATE, action) => {
  const { data } = action.payload;
  // Create an array to store values
  var list1 = [];
  const pushValues = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        list1.push(obj[key]);
      }
    }
  };
  pushValues(state?.personalData);
  pushValues(data);
  let newDataSet;

  if (state?.dataSet[0].length === 0) {
    newDataSet = [list1];
  } else {
    newDataSet = [...state?.dataSet, list1];
  }

  return {
    ...state,
    dataSet: newDataSet,
    personalData: [],
    addressDataAdded: true,
  };
};
// <---------------reducer for featching store country list ----------------->
const fetchCountryStartReducer = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true,
  };
};
const fetchCountrySuccessReducer = (state = INITIAL_STATE, action) => {
  const { countryName } = action.payload;
  return {
    ...state,
    loading: false,
    countryNameList: countryName,
  };
};
const fetchCountryFailureReducer = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false,
  };
};
// <--------------------reset first step form------------------------->
const resetFirstStep = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    personalDataAdded: false,
  };
};
// <--------------------reset first step form------------------------->
const resetSecondStep = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    addressDataAdded: false,
  };
};

const HANDLERS = {
  [personalDataType.PERSONAL_DATA_STORE]: storePersonalDataReducer,
  [personalDataType.ADDRESS_DELATILS_STORE]: storeAddressDataReducer,
  [personalDataType.FETCH_COUNTRY_NAME_START]: fetchCountryStartReducer,
  [personalDataType.FETCH_COUNTRY_NAME_SUCCESS]: fetchCountrySuccessReducer,
  [personalDataType.FETCH_COUNTRY_NAME_FAILURE]: fetchCountryFailureReducer,
  // reset state
  [personalDataType.RESET_FIRST_STEP]: resetFirstStep,
  [personalDataType.RESET_SECOND_STEP]: resetSecondStep,
};

export const userDataReducer = createReducer(INITIAL_STATE, HANDLERS);
