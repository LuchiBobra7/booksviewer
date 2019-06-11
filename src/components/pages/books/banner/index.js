import React from "react";
import { Container } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner py-4 text-center text-md-left d-flex align-items-center bg-secondary text-white ">
      <Container className="">
        <Fade top delay={200}>
          <h2 className="title mb-4">
            Lorem ipsum dolor sit, amet
            <br /> consectetur adipisicing?
          </h2>
        </Fade>
        <Fade bottom delay={500}>
          <Link to="/about" className="btn btn-outline-light">
            View More
          </Link>
        </Fade>
      </Container>
    </div>
  );
};

export default Banner;
