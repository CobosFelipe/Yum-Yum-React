import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";

//Componentes
import Inicio from "../pages/Inicio";
import Navbar from "../components/Nav";
import Productos from "../pages/Productos";
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Carrito from "../pages/Carrito";
import Factura from "../pages/Factura";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos/:categoria" element={<Productos />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Factura" element={<Factura />} />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default AppRoutes;
