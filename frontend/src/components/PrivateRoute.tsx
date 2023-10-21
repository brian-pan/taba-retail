import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface PrivateRouteProps {}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = () => {
  const { userInfo } = useSelector((state: any) => state.authentication);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
