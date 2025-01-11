import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
import SmallScreenSideBar from "./SmallScreenSideBar";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isHome = location.pathname === "/";

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [createAccountOpen, setCreateAccountOpen] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = () => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "student") navigate(`/student/profile`);
    else if (["admin", "super-admin", "super_admin"].includes(userRole!))
      navigate(`/profile`);
    else navigate(`/teacher/profile`);
  };

  //   const handleLogout = () => {
  //     _AuthApi.destroyToken();
  //     navigate("/");
  //   };

  const handleNavigate = () => {
    const routes: Record<string, string> = {
      super_admin: "/accounts/students",
      admin: "/accounts/teachers",
      teacher: "/teacher/courses/all",
      student: "/student/courses/all",
    };
    navigate(routes[role!] || "/");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      {token ? (
        <>
          {!isHome && (
            <MenuItem onClick={() => navigate("/")}>الصّفحة الرئيسيّة</MenuItem>
          )}
          {isHome && (
            <MenuItem onClick={handleNavigate}>العودة للموقع</MenuItem>
          )}
          {/* <MenuItem onClick={handleLogout}>تسجيل الخروج</MenuItem> */}
        </>
      ) : (
        <MenuItem onClick={() => navigate("/login")}>تسجيل الدّخول</MenuItem>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>الملف الشّخصي</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2C3971",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
          minHeight: "100px",
        }}
      >
        <Toolbar
          sx={{
            minHeight: 100,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="بسم اللّه الرّحمن الرّحيم"
              style={{ maxWidth: "100px", height: "50%", marginLeft: "1rem" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* {token && <NotificationsDropdown />} */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* {token && <NotificationsDropdown />} */}
            <SmallScreenSideBar />
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* <CreateAccount
        open={createAccountOpen}
        onClose={() => setCreateAccountOpen(false)}
      /> */}
    </Box>
  );
};

export default Header;
