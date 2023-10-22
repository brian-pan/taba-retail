import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/apiSlices/usersApiSlice";
import { setCredentials } from "../slices/feSlices/authenticationSlice";
import { toast } from "react-toastify";

import Form from "../components/Form";
import Loader from "../components/Loader";
import "../assets/styles/screens/RegisterScreen.scss";

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

  const { userInfo } = useSelector((state: any) => state.authentication);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordRetyped) {
      toast.error("Passwords do not match");
    } else {
      try {
        const BEresponse = await register({
          name: userName,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...BEresponse }));
        navigate("/");
      } catch (error: any) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  // const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

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
      {isLoading && <Loader />}
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
export default RegisterScreen;
