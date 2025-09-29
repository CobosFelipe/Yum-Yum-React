import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/ProductContext";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <CartProvider>
      {/* <Navbar /> */}
      <AppRoutes/>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
