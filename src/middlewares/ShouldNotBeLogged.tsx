import { Navigate } from "react-router-dom";
import { _AuthApi } from "../services/auth/auth.service";
import PropTypes from "prop-types";

const ShouldNotBeLogged = ({ children }) => {
  if (_AuthApi.getToken()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ShouldNotBeLogged;
ShouldNotBeLogged.propTypes = {
  children: PropTypes.any,
};
