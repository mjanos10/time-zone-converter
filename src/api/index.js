import qs from "qs";
import sortBy from "lodash.sortby";

const URLS = {
  TIME_ZONE_LIST: `http://api.timezonedb.com/v2.1/list-time-zone?`
};

const fetchWithQuery = (url, queryObj = {}) => {
  console.log(process.env.VUE_APP_TIMEZONE_API_KEY);
  const query = qs.stringify({
    key: process.env.VUE_APP_TIMEZONE_API_KEY,
    format: "json",
    ...queryObj
  });
  return fetch(`${url}${query}`, {
    mode: "cors"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Request failed`);
  });
};

export const getTimeZoneList = async () => {
  const listKey = "timeZoneList";
  if (localStorage.getItem(listKey)) {
    return localStorage.getItem(listKey);
  }
  const response = await fetchWithQuery(URLS.TIME_ZONE_LIST);
  if (response.status !== "OK") {
    console.error(response);
    throw new Error(`An error occured while getting time zone list`);
  }
  const zones = sortBy(response.zones, "zoneName");
  localStorage.setItem(listKey, JSON.stringify(zones));
  return zones;
};
