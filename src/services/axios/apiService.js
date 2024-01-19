/**
 * apiService js
 *
 * APi call header are defined
 * And interceptors are definded which can be used for handling event;s like progress, error etc.
 *
 * For more function follow axios documentation
 *
 * Project:
 *
 *
 * Devlopers:
 * 1. Lucky Shukla
 */

import axios from "axios";
import { rootConfig } from "./endPoint";
import { setAccessTokenToHeader } from "./helper";
import { setUserDataToLocal } from "../cookies/helper";

export const ApiService = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const ApiServiceMultipart = axios.create({
  baseURL: rootConfig.apiRoot,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

ApiService.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err?.response?.status === 401 || err?.response?.status === 403) {
      setAccessTokenToHeader();
      setUserDataToLocal();
      window.location.reload();
    }
    return err;
  }
);

ApiServiceMultipart.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err?.response?.status === 401 || err?.response?.status === 403) {
      setAccessTokenToHeader();
      setUserDataToLocal();
      window.location.reload();
    }
    return err;
  }
);
