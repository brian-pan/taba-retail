import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header logoName="Taba" />
        <div>
          {/* render child route elements*/}
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default App;
