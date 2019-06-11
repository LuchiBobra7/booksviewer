import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width = "36px", height}) => {
  return (
    <Link to="/" className="navbar-brand d-flex align-items-center">
      <img alt="" width={width} height={height} className="mr-2" src="/img/logo.png" />
      <span>Book&Viewer</span>
    </Link>
  );
};

export default Logo;