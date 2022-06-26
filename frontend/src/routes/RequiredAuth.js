import { useSelector } from "react-redux";
import { getIsSignedIn } from "../store/selectors/auth";

import { Navigate, useLocation } from "react-router";

const RequiredAuth = ({ children }) => {
  const isLogged = useSelector(getIsSignedIn);
  const currentLocation = useLocation();

  if (!isLogged) {
    return <Navigate to="login" state={{ from: currentLocation }} replace />;
  }

  return children;
};

export default RequiredAuth;
