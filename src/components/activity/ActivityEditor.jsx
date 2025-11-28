import { useState } from "react";
import { useDNA } from "../../hooks/useDNA.js";
import { addActivity } from "../../reducers/dnaActions.js";

const INIT = {
  label: "",
  duration: 30,
  mood: "calm",
  code: "A",
};

function ActivityEditor() {
  const { state, dispatch } = useDNA();
  const [form, setForm] = useState(INIT);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "duration" ? Number(value) : value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.label.trim()) return;

    dispatch(addActivity(state.currentDate, form));
    setForm(INIT);
  };

  return (
    <div className="box">
      <h3>행동 입력</h3>
      <form onSubmit={onSubmit}>
        <input
          name="label"
          placeholder="행동"
          value={form.label}
          onChange={onChange}
        />

        <input
          name="duration"
          type="number"
          min="5"
          step="5"
          value={form.duration}
          onChange={onChange}
        />

        <select name="mood" value={form.mood} onChange={onChange}>
          <option value="calm">평온</option>
          <option value="happy">기쁨</option>
          <option value="stress">스트레스</option>
          <option value="sad">우울</option>
        </select>

        <select name="code" value={form.code} onChange={onChange}>
          <option value="A">A (공부)</option>
          <option value="T">T (휴식)</option>
          <option value="G">G (게임)</option>
          <option value="C">C (외출)</option>
        </select>

        <button>추가</button>
      </form>
    </div>
  );
}

export default ActivityEditor;
