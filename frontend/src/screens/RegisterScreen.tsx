import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Form from "../components/Form";
import "../styles/screens/RegisterScreen.scss";

interface RegisterScreenProps {}

// interface FormData {
//   email: string;
//   password: string;
// }

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRetyped, setPasswordRetyped] = useState<string>("");

  // const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="register-screen-wrapper">
      <h1>Sign Up</h1>
      <Form
        onSubmit={handleSubmit}
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        passwordRetyped={passwordRetyped}
        setPasswordRetyped={setPasswordRetyped}
        ctaName="Register"
      ></Form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
export default RegisterScreen;
