import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
