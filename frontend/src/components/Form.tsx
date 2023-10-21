import * as React from "react";

import "../styles/components/Form.scss";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  userName?: string;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordRetyped?: string;
  setPasswordRetyped?: React.Dispatch<React.SetStateAction<string>>;
  ctaName?: string;
  isCtaHide?: boolean;
}

// const Form: React.FunctionComponent<FormProps> = (props) => {
// const Form = ({ onSubmit, formData, setFormData }: FormProps) => {
const Form: React.FunctionComponent<FormProps> = ({
  onSubmit,
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  passwordRetyped,
  setPasswordRetyped,
  ctaName,
  isCtaHide,
}) => {
  const isLogin =
    window.location.href.split("/").slice(-1).toString() === "login";
  const isEmailDisabled =
    window.location.href.split("/").slice(-1).toString() === "profile";

  return (
    <div className="form-wrapper">
      <form
        onSubmit={
          // props.onSubmit(e);
          (e) => onSubmit(e)
        }
      >
        {!isLogin && (
          <div className="form-group">
            <label
              className="form-label form-label__user-name"
              htmlFor="formUserName"
            >
              User Name
            </label>
            <input
              className="form-input__user-name"
              id="formUserName"
              value={userName}
              onChange={(e) => {
                setUserName?.(e.target.value);
              }}
              type="text"
              placeholder="Enter User Name"
            />
          </div>
        )}
        <div className="form-group">
          <label className="form-label form-label__email" htmlFor="formEmail">
            Email
          </label>
          <input
            className="form-input__email"
            id="formEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter Your Email"
            disabled={isEmailDisabled}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        {!isLogin && (
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
              value={passwordRetyped}
              onChange={(e) => {
                setPasswordRetyped?.(e.target.value);
              }}
              type="password"
              placeholder="Confirm Your Password"
            />
          </div>
        )}

        {!isCtaHide && (
          <button className="form-cta" type="submit">
            {ctaName}
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
