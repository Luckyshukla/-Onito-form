/**
 * apiEndpoints js
 *
 * All apis' urls are defined here
 *
 * Project:
 *
 * Devlopers:
 * 1. Lucky shukla
 */

const IS_DEV = true;

export const rootConfig = {
  apiRoot: IS_DEV ? "https://restcountries.com/v3.1" : "",
};

export const apiEndPoints = {
  CountryName: `${rootConfig.apiRoot}/name/`,
};
