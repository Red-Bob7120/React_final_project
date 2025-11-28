export function buildDNAFromActivities(activities) {
  let sequence = "";

  activities.forEach((act) => {
    const unit = Math.max(1, Math.round(act.duration / 30));
    sequence += act.code.repeat(unit);
  });

  return sequence;
}
