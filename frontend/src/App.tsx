import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/styles/App.scss";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header logoName="Taba" />
        <ToastContainer />

        <div>
          {/* render child route elements*/}
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};
export default App;
