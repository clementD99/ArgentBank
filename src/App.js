import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Login from "./pages/Login/Login";
import Profil from "./pages/Profil/Profil";
import Footer from "./composants/Footer/Footer";
import Header from "./composants/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
