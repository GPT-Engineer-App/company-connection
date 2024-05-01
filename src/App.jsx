import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import QAPage from "./pages/QAPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/qa" element={<QAPage />} />
      </Routes>
    </Router>
  );
}

export default App;
