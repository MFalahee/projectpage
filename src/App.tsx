import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import IdlePage from "./pages/IdlePage";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<IdlePage />} />
        <Route path="/pp" element={<ProjectPage visible={true} />} />
      </Routes>
    </div>
  );
}

export default App;
