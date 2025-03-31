import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <AppRoutes/>
      <Footer />
    </>
  );
}

export default App;
