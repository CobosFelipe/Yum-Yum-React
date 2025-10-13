import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <AppRoutes />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
