import * as React from "react";

import "../styles/components/Form.scss";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

// const Form: React.FunctionComponent<FormProps> = (props) => {
// const Form = ({ onSubmit, formData, setFormData }: FormProps) => {
const Form: React.FunctionComponent<FormProps> = ({
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <div className="form-wrapper">
      <form
        onSubmit={
          // props.onSubmit(e);
          (e) => onSubmit(e)
        }
      >
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
              console.log(e.target.value);
            }}
            type="email"
            placeholder="Enter Your Email"
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
              console.log(password);
            }}
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
