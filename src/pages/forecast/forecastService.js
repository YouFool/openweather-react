import { CITY_FORECAST } from "../../common/apiConstants";
import { get } from "../../common/apiService";

export const GET_CITY_FORECAST = async cityId => {
  return await get(`${CITY_FORECAST}/${cityId}`);
};
