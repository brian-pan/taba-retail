import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { areaOptions } from "../assets/areaOptions";

interface ShippingFormProps {}

const ShippingForm: React.FunctionComponent<ShippingFormProps> = () => {
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // @ts-ignore
  const { isPickUp, shippingAddress } = useSelector((state) => state.cart);

  // local state change when typing
  // watcher debounce save global state after 1s no typing
  return (
    <>
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Deliver Address"
            />
          </div>

          <div className="form-group">
            <label className="form-label form-label__area" htmlFor="formArea">
              Area
            </label>
            <select
              name="areaOptions"
              id="areaOptions"
              onChange={(e) => setArea(e.target.value)}
            >
              {areaOptions.map((areaOption) => {
                return (
                  <option value={areaOption.value} key={areaOption.value}>
                    {areaOption.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label
              className="form-label form-label__province"
              htmlFor="formProvince"
            >
              Province
            </label>
            <input
              className="form-input__province"
              id="formProvince"
              type="text"
              value="QC"
              disabled={true}
            />
          </div>
          <div className="form-group">
            <label
              className="form-label form-label__postalCode"
              htmlFor="formPostalCode"
            >
              PostalCode
            </label>
            <input
              className="form-input__PostalCode"
              id="formPostalCode"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
              maxLength={7}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ShippingForm;
