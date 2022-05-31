import { Dashboard } from "./Pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./Components/index";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
