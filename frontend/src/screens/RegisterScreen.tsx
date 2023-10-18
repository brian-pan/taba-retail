import * as React from "react";
import { useState } from "react";

import Form from "../components/Form";

interface RegisterScreenProps {}

// interface FormData {
//   email: string;
//   password: string;
// }

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      ></Form>
    </div>
  );
};
export default RegisterScreen;
