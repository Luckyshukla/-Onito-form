/**
 * action js
 *
 * it will have personal data related actions
 *
 * Project:
 *
 * Devlopers:
 * 1. Lucky shukla
 */

import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  //   personalData: ["payload"],
  personalDataStore: ["payload"],
  addressDelatilsStore: ["payload"],
  resetFirstStep: ["payload"],
  resetSecondStep: ["payload"],

  fetchCountryName: ["payload"],
  fetchCountryNameStart: ["payload"],
  fetchCountryNameSuccess: ["payload"],
  fetchCountryNameFailure: ["payload"],
});
export { Types as personalDataType, Creators as personalDataCreators };
