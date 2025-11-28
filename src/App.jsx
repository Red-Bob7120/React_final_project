import DNAContextProvider from "./context/DNAContextProvider.jsx";
import LeftPanel from "./components/layout/LeftPanel.jsx";
import RightPanel from "./components/layout/RightPanel.jsx";

function App() {
  return (
    <DNAContextProvider>
      <div className="app-container">
        <LeftPanel />
        <RightPanel />
      </div>
    </DNAContextProvider>
  );
}

export default App;
