import React from "react";
import PropTypes from "prop-types";

const Skeleton = ({ width = "auto", height, children }) => {
  return (
    <div className="bg-light mb-3" style={{ width: width, height: height }}>
      {children}
    </div>
  );
};

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node
};

export default Skeleton;