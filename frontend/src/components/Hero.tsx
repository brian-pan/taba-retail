import * as React from "react";
import { useSelector } from "react-redux";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  const { userInfo } = useSelector((state: any) => state.authentication);
  return (
    <div>
      <p>Hero Div</p>
    </div>
  );
};

export default Hero;
