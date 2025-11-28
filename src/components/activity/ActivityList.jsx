import { useDNA } from "../../hooks/useDNA.js";
import ActivityItem from "./ActivityItem.jsx";

function ActivityList() {
  const { state } = useDNA();
  const day = state.days.find((d) => d.date === state.currentDate);

  if (!day || day.activities.length === 0)
    return (
      <div className="box">
        <h3>오늘의 행동</h3>
        <p>아직 없습니다.</p>
      </div>
    );

  return (
    <div className="box">
      <h3>오늘의 행동</h3>
      <ul>
        {day.activities.map((a) => (
          <ActivityItem key={a.id} activity={a} />
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
