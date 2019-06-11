import React from "react";

const Logo = ({ width = "36px", height}) => {
  return (
    <a href="/" className="navbar-brand d-flex align-items-center">
      <img alt="" width={width} height={height} className="mr-2" src="/img/logo.png" />
      <span>Book&Viewer</span>
    </a>
  );
};

export default Logo;