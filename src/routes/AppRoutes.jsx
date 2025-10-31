import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";

//Componentes
import Inicio from "../pages/Inicio";
import Navbar from "../components/Nav";
import Productos from "../pages/Productos";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Footer from "../components/Footer";
import ProductosCategoria from "../pages/ProductosCategoria";
import AdminRoute from "./AdminRoutes";
import ProductosDashboard from "../components/Dashboard/ProductosDashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Productos/:categoria" element={<ProductosCategoria />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Login" element={<Login />} />
        {/* Rutas Protegidas */}
        <Route element={<AdminRoute />}>
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          <Route path="/Dashboard/Products" element={<ProductosDashboard />} />
          {/* <Route path="/Dashboard/Products" element={<AdminProducts />} />
          <Route path="/Dashboard/Orders" element={<div>Gestión de Órdenes</div>} /> */}
        </Route>
        {/* Redirección */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
