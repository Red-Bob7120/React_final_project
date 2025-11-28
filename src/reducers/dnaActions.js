export const setDate = (date) => ({
  type: "SET_DATE",
  payload: date,
});

export const addActivity = (date, activity) => ({
  type: "ADD_ACTIVITY",
  payload: { date, activity },
});

export const updateActivity = (date, id, changes) => ({
  type: "UPDATE_ACTIVITY",
  payload: { date, id, changes },
});

export const removeActivity = (date, id) => ({
  type: "REMOVE_ACTIVITY",
  payload: { date, id },
});

export const mutateDNA = (date, rate = 0.1) => ({
  type: "MUTATE_DNA",
  payload: { date, rate },
});
