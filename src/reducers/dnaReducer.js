import { buildDNAFromActivities } from "../utils/buildDNA.js";
//import { todayString } from "../utils/dateUtils.js";

function findDayIndex(days, date) {
  return days.findIndex((day) => day.date === date);
}

export function dnaReducer(state, action) {
  switch (action.type) {
    case "SET_DATE": {
      const date = action.payload;
      const daysCopy = [...state.days];
      let idx = findDayIndex(daysCopy, date);

      if (idx === -1) {
        daysCopy.push({
          date,
          activities: [],
          dnaSequence: "",
        });
      }

      return {
        ...state,
        currentDate: date,
        days: daysCopy,
      };
    }

    case "ADD_ACTIVITY": {
      const { date, activity } = action.payload;
      const daysCopy = [...state.days];
      let idx = findDayIndex(daysCopy, date);

      if (idx === -1) {
        daysCopy.push({
          date,
          activities: [],
          dnaSequence: "",
        });
        idx = daysCopy.length - 1;
      }

      const day = daysCopy[idx];

      const newActivity = {
        ...activity,
        id: state.nextId,
      };

      const newActivities = [...day.activities, newActivity];
      const newDNA = buildDNAFromActivities(newActivities);

      daysCopy[idx] = {
        ...day,
        activities: newActivities,
        dnaSequence: newDNA,
      };

      return {
        ...state,
        nextId: state.nextId + 1,
        days: daysCopy,
      };
    }

    case "UPDATE_ACTIVITY": {
      const { date, id, changes } = action.payload;
      const daysCopy = [...state.days];
      const idx = findDayIndex(daysCopy, date);
      if (idx === -1) return state;

      const day = daysCopy[idx];

      const newActivities = day.activities.map((a) =>
        a.id === id ? { ...a, ...changes } : a
      );

      const newDNA = buildDNAFromActivities(newActivities);

      daysCopy[idx] = {
        ...day,
        activities: newActivities,
        dnaSequence: newDNA,
      };

      return {
        ...state,
        days: daysCopy,
      };
    }

    case "REMOVE_ACTIVITY": {
      const { date, id } = action.payload;
      const daysCopy = [...state.days];
      const idx = findDayIndex(daysCopy, date);
      if (idx === -1) return state;

      const day = daysCopy[idx];
      const newActivities = day.activities.filter(
        (a) => a.id !== id
      );

      const newDNA = buildDNAFromActivities(newActivities);

      daysCopy[idx] = {
        ...day,
        activities: newActivities,
        dnaSequence: newDNA,
      };

      return {
        ...state,
        days: daysCopy,
      };
    }

    case "MUTATE_DNA": {
      const { date, rate } = action.payload;
      const daysCopy = [...state.days];
      const idx = findDayIndex(daysCopy, date);
      if (idx === -1) return state;

      const day = daysCopy[idx];
      const bases = day.dnaSequence.split("");

      const possible = ["A", "T", "G", "C"];

      const mutated = bases.map((b) => {
        if (Math.random() < rate) {
          const others = possible.filter((x) => x !== b);
          return others[Math.floor(Math.random() * others.length)];
        }
        return b;
      });

      daysCopy[idx] = {
        ...day,
        dnaSequence: mutated.join(""),
      };

      return { ...state, days: daysCopy };
    }

    default:
      return state;
  }
}
