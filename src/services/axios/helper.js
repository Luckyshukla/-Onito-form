/**
 * Helper js for setting the tokens
 *
 * Project:
 *
 *
 * Devlopers:
 * 1. Lucky Shukla
 */

import { ApiService, ApiServiceMultipart } from "./apiService";

export const setAccessTokenToHeader = (token) => {
  if (token) {
    ApiService.defaults.headers.Authorization = `Bearer ${token}`;
    ApiServiceMultipart.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete ApiService.defaults.headers.Authorization;
    delete ApiServiceMultipart.defaults.headers.Authorization;
  }
};
