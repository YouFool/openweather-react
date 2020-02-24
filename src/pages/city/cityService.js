import { CITY, CITY_WEATHER } from "../../common/apiConstants";
import { get, post, remove } from "../../common/apiService";

export const LIST_CITIES = async () => {
  return await get(CITY);
};

export const GET_CITY_WEATHER = async cityId => {
  return await get(`${CITY_WEATHER}/${cityId}`);
};

export const CREATE_CITY = async body => {
  return await post(CITY, body);
};

export const REMOVE_CITY = async cityId => {
  return await remove(`${CITY}/${cityId}`);
};
