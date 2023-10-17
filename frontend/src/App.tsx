import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import "./styles/App.scss";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header logoName="Taba" />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default App;
