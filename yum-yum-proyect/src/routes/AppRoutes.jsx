import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";

//Componentes
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import Navbar from "../components/Nav";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
