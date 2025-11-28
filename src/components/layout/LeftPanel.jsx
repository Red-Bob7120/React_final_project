import DaySelector from "../day/DaySelector.jsx";
import ActivityEditor from "../activity/ActivityEditor.jsx";
import ActivityList from "../activity/ActivityList.jsx";

function LeftPanel() {
  return (
    <div className="panel">
      <DaySelector />
      <ActivityEditor />
      <ActivityList />
    </div>
  );
}

export default LeftPanel;
