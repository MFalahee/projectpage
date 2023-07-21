import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <ProjectPage visible={true} />
      <Footer />
    </div>
  );
}

export default App;
