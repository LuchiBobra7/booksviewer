import React from "react";
import { Container, Row, Col } from "reactstrap";
import About from './About';
import Credits from './Credits';
import Links from './Links';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <Container className="py-4">
        <Row>
          <Col md="4">
            <About/>
          </Col>
          <Col md="6">
            <Credits/>
          </Col>
          <Col md="2">
            <Links/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
