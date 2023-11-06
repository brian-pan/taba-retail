import * as React from "react";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useLogoutMutation } from "../slices/apiSlices/usersApiSlice";
import { clearCredentials } from "../slices/feSlices/authenticationSlice";
import logo from "../assets/images/logo/logo-old.png";
import "../assets/styles/components/Header.scss";
import { cartItemType } from "../types";

interface HeaderProps {
  logoName: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const { userInfo } = useSelector((state: any) => state.authentication);
  const { cartItems } = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation() as any;

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      setIsDropDownOpen(false);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link
          className="header__logo-link"
          to="/"
          aria-labelledby="headerLogoImage"
        >
          <img
            className="header__logo-image"
            id="headerLogoImage"
            src={logo}
            alt={props.logoName}
          />
        </Link>
      </div>

      <div>
        <Link className="header__link header__link--sign-up" to="/cart">
          <FaShoppingCart className="header__link-icon header__link-icon--cart" />
          Cart
          {cartItems.length > 0 && (
            <span>
              {cartItems.reduce(
                (acc: number, curr: cartItemType) => acc + curr.qty,
                0
              )}
            </span>
          )}
        </Link>
        {userInfo ? (
          <>
            <div className="header__dropdown-component">
              <div className="header__dropdown-wrapper">
                <button
                  className={`header__dropdown-icon-wrapper ${
                    isDropDownOpen && "header__dropdown-icon-wrapper--is-open"
                  }`}
                  onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                >
                  <IoCaretDown
                    className={`header__dropdown-icon ${
                      isDropDownOpen && "header__dropdown-icon--is-open"
                    }`}
                  />
                </button>
                <div className="header__dropdown-name-wrapper">
                  {userInfo.name}
                </div>
              </div>
              {isDropDownOpen && (
                <div className="header__dropdown-content-wrapper">
                  <Link className="header__dropdown-content" to="/profile">
                    <span className="header__dropdown-content-icon-wrapper">
                      <FaUser className="header__dropdown-content-icon" />
                    </span>
                    <span
                      className="header__dropdown-content-label"
                      onClick={() => setIsDropDownOpen(false)}
                    >
                      Update Profile
                    </span>
                  </Link>
                  <Link
                    className="header__dropdown-content"
                    to="/"
                    onClick={handleLogout}
                  >
                    <span className="header__dropdown-content-icon-wrapper">
                      <FaSignOutAlt className="header__dropdown-content-icon" />
                    </span>
                    <span className="header__dropdown-content-label">
                      Sign Out
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="header__links">
              <Link className="header__link header__link--sign-in" to="/login">
                <span>
                  <FaSignInAlt className="header__link-icon header__link-icon--sign-in" />
                </span>
                <span>Sign In</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
