import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Form from "../components/Form";
import "../styles/screens/LoginScreen.scss";

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="login-screen-wrapper">
      <h1>Sign In</h1>
      <Form
        onSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        ctaName="Login"
      ></Form>
      <p>
        New to Tabagie? <Link to="/register">Register Now!</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
