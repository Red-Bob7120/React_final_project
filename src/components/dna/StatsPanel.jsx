import { useMemo } from "react";
import { useDNA } from "../../hooks/useDNA.js";

function StatsPanel() {
  const { state } = useDNA();
  const day = state.days.find((d) => d.date === state.currentDate);
  const activities = day?.activities || [];
  const seq = day?.dnaSequence || "";

  const stats = useMemo(() => {
    const totalMinutes = activities.reduce((s, a) => s + a.duration, 0);

    const baseCount = { A: 0, T: 0, G: 0, C: 0 };
    for (const b of seq) if (baseCount[b] !== undefined) baseCount[b]++;

    let longest = 0;
    let cur = 0;
    let prev = null;

    for (const b of seq) {
      if (b === prev) cur++;
      else cur = 1;
      prev = b;
      if (cur > longest) longest = cur;
    }

    return {
      totalMinutes,
      baseCount,
      longest,
    };
  }, [activities, seq]);

  return (
    <div className="box">
      <h3>분석</h3>
      <p>총 활동 시간: {stats.totalMinutes}분</p>
      <p>
        A:{stats.baseCount.A} / T:{stats.baseCount.T} / G:
        {stats.baseCount.G} / C:{stats.baseCount.C}
      </p>
      <p>가장 긴 연속 패턴: {stats.longest}</p>
    </div>
  );
}

export default StatsPanel;
