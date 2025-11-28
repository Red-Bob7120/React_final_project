import { todayString } from "../utils/dateUtils.js";

export const initialState = {
  currentDate: todayString,
  nextId: 1,
  days: [
    {
      date: todayString,
      activities: [],
      dnaSequence: "",
    },
  ],
};
