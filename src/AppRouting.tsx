import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/pages/home";

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
      {/* <Route
        path="/*"
        element={
          <AuthRedirect
            shouldBeLogged={true}
            allowedRoles={["super_admin", "admin"]}
          >
            <React.Suspense fallback={<Loader />}>
              <DashboardRouting />
              <ReactQueryDevtools initialIsOpen={false} />
            </React.Suspense>
          </AuthRedirect>
        }
      /> */}
    </Routes>
  );
};

export default AppRouting;
