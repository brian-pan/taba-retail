import * as React from "react";
import Hero from "../components/Hero";

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  return (
    <div className="home-screen-wrapper">
      <h1>Home Screen Page</h1>
      <Hero />
    </div>
  );
};

export default HomeScreen;
