import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import "./styles/App.scss";

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
      </div>
    </>
  );
};
export default App;
