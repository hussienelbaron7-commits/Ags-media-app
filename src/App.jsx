
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicPortal from "./PublicPortal";
import DesignerDashboard from "./DesignerDashboard";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PublicPortal />} />
      <Route path="/dashboard" element={<DesignerDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
