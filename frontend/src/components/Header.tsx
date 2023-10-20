import * as React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useLogoutMutation } from "../slices/apiSlices/usersApiSlice";
import { clearCredentials } from "../slices/feSlices/authenticationSlice";
import "../styles/components/Header.scss";

interface HeaderProps {
  logoName: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const { userInfo } = useSelector((state: any) => state.authentication);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation() as any;

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__logo-name" to="/">
          {props.logoName}
        </Link>
      </div>

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
                <Link className="header__dropdown-content" to="/">
                  <span className="header__dropdown-content-icon-wrapper">
                    <FaUser className="header__dropdown-content-icon" />
                  </span>
                  <span className="header__dropdown-content-label">
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
            <Link className="header__link header__link--sign-up" to="/register">
              <FaUser className="header__link-icon header__link-icon--sign-up" />
              Sign Up
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
