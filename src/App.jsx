import DNAContextProvider from "./context/DNAContextProvider.jsx";
import LeftPanel from "./components/layout/LeftPanel.jsx";
import RightPanel from "./components/layout/RightPanel.jsx";

function App() {
  return (
    <DNAContextProvider>
      <div className="page-shell">
        <header className="page-header">
          <div>
            <p className="eyebrow">Daily DNA Lab</p>
            <h1>나만의 하루 유전자 기록</h1>
            <p className="subtitle">
              하루의 행동을 기록하고 DNA 시퀀스로 변환해 변화를 한눈에 살펴보세요.
            </p>
          </div>
          <div className="header-badge">오늘의 상태</div>
        </header>

        <div className="app-container">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </DNAContextProvider>
  );
}

export default App;