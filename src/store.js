import Vue from "vue";
import Vuex from "vuex";
import moment from "moment-timezone";
import { timeZoneList } from "@/utils/time-zone-list";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeZoneList: timeZoneList,
    from: timeZoneList.find(elem => elem.timeZone === "America/Los_Angeles"),
    to: timeZoneList.find(elem => elem.timeZone === "Europe/Budapest"),
    fromTime: {
      hour: 12,
      minute: 0
    }
  },
  getters: {
    toTime: state => {
      moment.tz.setDefault(state.from.timeZone);
      const fromDate = moment({
        hour: state.fromTime.hour,
        minute: state.fromTime.minute
      });

      const convertedDate = moment.tz(fromDate, state.to.timeZone);

      console.log(convertedDate.format("YYYY-MM-DD HH:mm"));

      const fromDay = fromDate.date();
      const convertedDay = convertedDate.date();

      const difference =
        fromDay === convertedDay
          ? "same day"
          : fromDay < convertedDay
          ? "next day"
          : "previous day";

      return {
        hour: convertedDate.hour(),
        minute: convertedDate.minute(),
        difference
      };
    }
  },
  mutations: {
    SET_FROM(state, value) {
      state.from = value;
    },
    SET_TO(state, value) {
      state.to = value;
    },
    SWITCH_FROM_TO(state) {
      let temp = state.from;
      state.from = state.to;
      state.to = temp;
    },
    SET_FROM_TIME(state, { hour, minute }) {
      if (hour) {
        state.fromTime.hour = hour;
      } else if (minute) {
        state.fromTime.minute = minute;
      }
    }
  },
  actions: {}
});
