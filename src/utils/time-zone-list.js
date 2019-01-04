import sortBy from "lodash.sortby";
import { listTimeZones, getUTCOffset, findTimeZone } from "timezone-support";

const padTime = (time, addPlus) => {
  const string = String(time);
  if (time < 0 && string.length === 2) {
    return `-0${string[1]}`;
  }
  if (time < 0) {
    return string;
  }
  if (addPlus) {
    return "+" + string.padStart(2, "0");
  }
  return string.padStart(2, "0");
};

const list = listTimeZones().map(timeZone => {
  const fullTimeZone = findTimeZone(timeZone);
  const { offset, abbreviation } = getUTCOffset(new Date(), fullTimeZone);
  const hours = offset / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return {
    timeZone,
    abbreviation,
    offset,
    formattedOffset: `${padTime(rhours, true)}:${padTime(rminutes)}`,
    text: `${padTime(rhours, true)}:${padTime(
      rminutes
    )} - ${timeZone} (${abbreviation})`
  };
});
export const timeZoneList = sortBy(list, "offset");
