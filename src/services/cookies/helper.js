/**
 * cookies helper js
 *
 * For setting the cookies and resetting the cookies
 *
 * For more function follow universal-cookie documentation
 *
 * Project:
 *
 *
 * Devlopers:
 * 1. Lucky shukla
 */

import { cookie } from "./cookieServices";

export const setUserDataToLocal = (userDetails) => {
  if (userDetails) {
    cookie.set("userDetails", userDetails, {
      path: "/",
      maxAge: 31536000,
      sameSite: true,
    });
  } else {
    cookie.remove("userDetails", { path: "/" });
  }
};

export const setDataToLocal = (key, value) => {
  try {
    if (value) {
      cookie.set(key, value, {
        path: "/",
        maxAge: 31536000,
        sameSite: true,
      });
    } else {
      cookie.remove(key, { path: "/" });
    }
  } catch (e) {}
};
