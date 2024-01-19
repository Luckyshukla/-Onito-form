/**
 * actions js
 *
 * it will have all the actions will be combined
 *
 * For more function follow axios documentation
 *
 * Project:
 *
 * Devlopers:
 * 1. Lucky shukla
 */

import { personalDataType, personalDataCreators } from "../pages/store/action";

const Types = {
  ...personalDataType,
};

const Creators = {
  ...personalDataCreators,
};

export { Types, Creators };
