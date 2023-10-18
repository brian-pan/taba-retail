import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

import * as React from "react";

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit(e)}></Form>
    </div>
  );
};

export default LoginScreen;
