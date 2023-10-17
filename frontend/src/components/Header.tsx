import * as React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "../styles/components/Header.scss";

interface HeaderProps {
  logoName: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <header>
      <div className="header__logo">
        <Link className="header__logo-name" to="/">
          {props.logoName}
        </Link>
      </div>
      <div className="header__links">
        <Link className="header__link header__link--sign-in" to="/login">
          <FaSignInAlt /> Sign In
        </Link>
        <Link className="header__link header__link--sign-up" to="/register">
          <FaUser /> Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
