import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Clients from "./pages/clients";
// Importez les autres pages ici

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          {/* Ajoutez les autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;