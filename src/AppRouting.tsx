import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/pages/home";
import React from "react";
import Loader from "./components/shared/Loader";
import BikeCardDetailsRouting from "./modules/BikeCardDetails/BikeCardDetailsRouting";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route
        path="/login"
        element={
          <AuthRedirect shouldBeLogged={false}>
            <Login />
          </AuthRedirect>
        }
      />
      <Route path="/new-account" element={<CreateAccount />} />
      <Route path="/register" element={<Register />} />
      <Route path="/expierence" element={<TeacherAccountFields />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/check-code/:email" element={<VerificationCodeForm />} /> */}

      {/* Admin */}
      <Route
        path="/bikes/:id/*"
        element={
          <React.Suspense fallback={<Loader />}>
            <BikeCardDetailsRouting />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouting;
