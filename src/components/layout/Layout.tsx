import PropTypes from "prop-types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.any,
};
