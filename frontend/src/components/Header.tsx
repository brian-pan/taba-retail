import * as React from "react";
import "../styles/components/Header.scss";
import Button from "../widgets/Button";

interface HeaderProps {
  logoName: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <header>
      <div className="header__logo">
        <p className="header__logo-name">{props.logoName}</p>
      </div>
      <div className="header__buttons">
        <Button
          className="header__button header__button--sign-in"
          name="Sign In"
          variant="secondary"
        />
        <Button
          className="header__button header__button--sign-up"
          name="Sign Up"
          variant="secondary"
        />
      </div>
    </header>
  );
};

export default Header;
