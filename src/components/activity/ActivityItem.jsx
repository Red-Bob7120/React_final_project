import { memo } from "react";
import { useDNA } from "../../hooks/useDNA.js";
import { removeActivity } from "../../reducers/dnaActions.js";

function ActivityItem({ activity }) {
  const { state, dispatch } = useDNA();

  const onRemove = () => {
    dispatch(removeActivity(state.currentDate, activity.id));
  };

  return (
    <li className="item">
      <strong>{activity.label}</strong> [{activity.code}]  
      <div>{activity.duration}분 / {moodName(activity.mood)}</div>
      <button onClick={onRemove}>삭제</button>
    </li>
  );
}

function moodName(mood) {
  return (
    {
      calm: "평온",
      happy: "기쁨",
      stress: "스트레스",
      sad: "우울",
    }[mood] || mood
  );
}

export default memo(ActivityItem);
