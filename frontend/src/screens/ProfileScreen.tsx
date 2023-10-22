import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/feSlices/authenticationSlice";
import { useUpdateProfileMutation } from "../slices/apiSlices/usersApiSlice";
import { toast } from "react-toastify";

import Form from "../components/Form";
import Loader from "../components/Loader";

interface ProfileScreenProps {}

const ProfileScreen: React.FunctionComponent<ProfileScreenProps> = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRetyped, setPasswordRetyped] = useState<string>("");

  const { userInfo } = useSelector((state: any) => state.authentication);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //initial load
    setUserName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.setUserName, userInfo.setEmail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordRetyped) {
      toast.error("Passwords do not match");
    } else {
      try {
        const BEresponse = await updateProfile({
          _id: userInfo._id,
          name: userName,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...BEresponse }));
        toast.success("Profile Updated");
        navigate("/");
      } catch (error: any) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="register-screen-wrapper">
      <h1>Update Profile</h1>
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
        ctaName="Update"
      ></Form>
      {isLoading && <Loader />}
    </div>
  );
};
export default ProfileScreen;
