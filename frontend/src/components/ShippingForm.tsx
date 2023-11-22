import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { areaOptions } from "../assets/areaOptions";
import { saveShippingAddress } from "../slices/feSlices/cartSlice";

interface ShippingFormProps {}

const ShippingForm: React.FunctionComponent<ShippingFormProps> = () => {
  // @ts-ignore
  const { cartOrderInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(saveShippingAddress({ address, postalCode, area }));
  };

  useEffect(() => {
    handleOnChange();
  }, [address, area, postalCode]);

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
              type="text"
              placeholder="Deliver Address"
              onChange={(e) => setAddress(e.target.value)}
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
              className="form-input__postalCode"
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
