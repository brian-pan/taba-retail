import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

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
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={handleSubmit}></Form>
    </FormContainer>
  );
};

export default LoginScreen;
