import * as React from "react";
import { useSelector } from "react-redux";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = (props) => {
  const { userInfo } = useSelector((state: any) => state.authentication);
  return <div>Welcome, {userInfo.email}</div>;
};

export default Hero;
