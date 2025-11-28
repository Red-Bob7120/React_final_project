import { useDNA } from "../../hooks/useDNA.js";

function DaySelector() {
  const { state, dispatch } = useDNA();

  const onChange = (e) => {
    dispatch({
      type: "SET_DATE",
      payload: e.target.value,
    });
  };

  return (
    <div className="box">
      <label>
        날짜 선택
        <input
          type="date"
          value={state.currentDate}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default DaySelector;
