import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/apiSlices/usersApiSlice";
import { setCredentials } from "../slices/feSlices/authenticationSlice";
import { toast } from "react-toastify";

import Form from "../components/Form";
import "../styles/screens/LoginScreen.scss";

interface LoginScreenProps {}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: any) => state.authentication);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]); //[dependencies/cond. to trigger]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const BEresponse = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...BEresponse })); // set user data to LS
      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
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
