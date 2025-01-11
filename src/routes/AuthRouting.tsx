import Layout from "../components/layout/Layout";
import NotFound from "../components/shared/404/NotFound";
import Loader from "../components/shared/Loader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { LoginPage, SignUpPage } from "./route";

const AuthRouting = () => {
  return (
    <Routes>
      <Route>
        <Route
          path="login"
          element={
            <Suspense fallback={<Loader />}>
              {/* <LoginPage /> */}
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<Loader />}>
              {/* <SignUpPage /> */}
            </Suspense>
          }
        />
        {/* <Route
          path="account-type"
          element={
            <Suspense fallback={<Loader />}>
              <AccountType />
            </Suspense>
          }
        />
        <Route
          path="otp"
          element={
            <Suspense fallback={<Loader />}>
              <OTPPage />
            </Suspense>
          }
        /> */}

        <Route
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
          path="*"
        />
      </Route>
    </Routes>
  );
};

export default AuthRouting;
