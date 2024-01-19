import { personalDataCreators } from "./action";
import { call, put } from "redux-saga/effects";
import { ApiService } from "../../services/axios/apiService";
import { apiEndPoints } from "../../services/axios/endPoint";

// <---------------saga for select Clients----------------->
export function* fetchCountrySaga(action) {
  try {
    const { search } = action.payload;
    yield put(personalDataCreators.fetchCountryNameStart());
    const response = yield call(
      ApiService.get,
      `${apiEndPoints.CountryName}/${search || "in"}`,
      {}
    );
    if (response.status >= 200 && response.status < 300) {
      const { data } = response;
      const transformedData = data.map((item) => ({
        value: item.name?.common || "",
        label: item.name?.common || "",
      }));
      yield put(
        personalDataCreators.fetchCountryNameSuccess({
          countryName: transformedData,
        })
      );
    } else {
      throw response;
    }
  } catch (err) {
    yield put(personalDataCreators.fetchCountryNameFailure(err));
  }
}
