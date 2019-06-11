import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const feautures = [
  {
    title: "find book",
    img: "books.svg"
  },
  {
    title: "make tea",
    img:
      "tea.svg"
  },
  {
    title: "forget about time",
    img:
      "clock.svg"
  }
];

const Features = () => {
  return (
    <section className="bg-white">
      <Container>
        <Row>
          {feautures.map((item, i) => (
            <Col key={i} md="4" className="d-flex align-items-start">
              <Fade delay={i * 500}>
                <img
                  alt={item.title}
                  className="mr-2"
                  src={`/img/${item.img}`}
                  width="56"
                />
                <div>
                  <h6 className="feauture-title text-uppercase">
                    {item.title}
                  </h6>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae cum, nostrum totam alias officia nobis
                  </small>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;