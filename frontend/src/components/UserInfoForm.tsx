import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface UserInfoFormProps {}

const UserInfoForm: React.FunctionComponent<UserInfoFormProps> = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  // @ts-ignore
  const { userInfo } = useSelector((state) => state.authentication);

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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Phone Number"
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
