import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface UserInfoFormProps {}

const UserInfoForm: React.FunctionComponent<UserInfoFormProps> = () => {
  // @ts-ignore
  const { userInfo } = useSelector((state) => state.authentication);
  // @ts-ignore
  const { cartOrderInfo } = useSelector((state) => state.cart);
  const { personalInfo } = cartOrderInfo;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  // local state change when typing
  // watcher debounce save global state after 1s no typing
  return (
    <>
      <div className="user-info-form-wrapper form-wrapper">
        <form>
          <div className="form-group">
            <label className="form-label form-label__email" htmlFor="formEmail">
              Email
            </label>
            <input
              className="form-input__email"
              id="formEmail"
              value={userInfo.email}
              type="text"
              disabled={true}
            />
          </div>
          <div className="form-group">
            <label
              className="form-label form-label__full-name"
              htmlFor="formFullName"
            >
              Full Name
            </label>
            <input
              className="form-input__full-name"
              id="formFullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label
              className="form-label form-label__phone-number"
              htmlFor="formPhoneNumber"
            >
              Phone Number
            </label>
            <input
              className="form-input__phone-number"
              id="formPhoneNumber"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              pattern="([0-9]{3})[0-9]{3}-[0-9]{4}"
              maxLength={10}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label form-label__notes" htmlFor="formNotes">
              Notes
            </label>
            <textarea
              className="form-input__notes"
              id="formNotes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes for delivery/order (optional)"
              maxLength={200}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInfoForm;
