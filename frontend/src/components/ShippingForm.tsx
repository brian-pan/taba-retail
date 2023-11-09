import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface ShippingFormProps {}

const ShippingForm: React.FunctionComponent<ShippingFormProps> = (props) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // @ts-ignore
  const { isPickUp } = useSelector((state) => state.cart);

  return (
    <>
      {!isPickUp && (
        <div className="form-wrapper">
          <form>
            <div className="form-group">
              <label
                className="form-label form-label__address"
                htmlFor="formAddress"
              >
                Address
              </label>
              <input
                className="form-input__address"
                id="formAddress"
                // value={userName}
                // onChange={(e) => {
                //   setUserName?.(e.target.value);
                // }}
                type="text"
                placeholder="Deliver Address"
              />
            </div>

            <div className="form-group">
              <label
                className="form-label form-label__email"
                htmlFor="formEmail"
              >
                Email
              </label>
              <input
                className="form-input__email"
                id="formEmail"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                // disabled={isEmailDisabled}
              />
            </div>
            <div className="form-group">
              <label
                className="form-label form-label__password"
                htmlFor="formPassword"
              >
                Password
              </label>
              <input
                className="form-input__password"
                id="formPassword"
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                type="password"
                placeholder="Enter Your Password"
              />
            </div>

            <div className="form-group">
              <label
                className="form-label form-label__password form-label__password--retyped"
                htmlFor="formPasswordRetyped"
              >
                Confirm Password
              </label>
              <input
                className="form-input__password form-input__password--retyped"
                id="formPasswordRetyped"
                // value={passwordRetyped}
                // onChange={(e) => {
                //   setPasswordRetyped?.(e.target.value);
                // }}
                type="password"
                placeholder="Confirm Your Password"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ShippingForm;
