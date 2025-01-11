import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { _AuthApi } from "../services/auth/auth.service";

const ShouldBeLogged = ({ children }) => {
  let location = useLocation();

  if (!_AuthApi.getToken()) {
    // if (false) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/signup" state={location.pathname} replace />;
    // return <Navigate to="/home" />;
  }

  return children;
};

export default ShouldBeLogged;
ShouldBeLogged.propTypes = {
  children: PropTypes.any,
};
