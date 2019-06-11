import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="main-content mb-5">{children}</div>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
