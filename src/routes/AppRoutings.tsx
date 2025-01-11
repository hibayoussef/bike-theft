import { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
// import Layout from "../components/layout/Layout";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "../components/shared/404/NotFound";
import Loader from "../components/shared/Loader";
import ShouldNotBeLogged from "../middlewares/ShouldNotBeLogged";
import Home from "../pages/Home/pages/home";
import AuthRouting from "./AuthRouting";
import Layout from "../components/layout/Layout";

const AppRoutings = () => {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <ShouldNotBeLogged>
            <AuthRouting />
          </ShouldNotBeLogged>
        }
      />

      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <ErrorBoundary fallback={<p>Something went wrong</p>}>
              <ShouldNotBeLogged>
                <Home />
              </ShouldNotBeLogged>
            </ErrorBoundary>
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<Loader />}>
            <ShouldNotBeLogged>
              <Home />
            </ShouldNotBeLogged>
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutings;
