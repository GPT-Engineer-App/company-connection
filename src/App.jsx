import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import QAPage from "./pages/QAPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import ResidencyApplicationPage from "./pages/ResidencyApplicationPage.jsx";
import NaturalizationProcessPage from "./pages/NaturalizationProcessPage.jsx";
import AsylumServicesPage from "./pages/AsylumServicesPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/qa" element={<QAPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/residency-application" element={<ResidencyApplicationPage />} />
        <Route path="/naturalization-process" element={<NaturalizationProcessPage />} />
        <Route path="/asylum-services" element={<AsylumServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
