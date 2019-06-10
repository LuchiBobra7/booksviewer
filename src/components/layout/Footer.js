import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <Container className="py-4">
                <Row>
                    <Col md="7">
                        <h5 className="footer-title mb-3">About</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Consequuntur voluptate, minus earum quod quae dolorem. Eveniet magnam quam repudiandae explicabo
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Col>
                    <Col md="3">
                        <h5 className="footer-title mb-3">Links</h5>
                        <ul>
                            <li>
                                <Link to="/about" className="footer-link">About Project</Link>
                            </li>
                            <li>
                                <Link to="/" className="footer-link">My Portfolio</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md="2">
                        <h5 className="footer-title mb-3">Credits</h5>
                        <ul>
                            <li>
                                <a href="https://images.unsplash.com/photo-1512045482940-f37f5216f639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" target="_blank" rel="noopener noreferrer" className="footer-link">Unsplash</a>
                            </li>
                            <li>
                                <a href="https://www.iconfinder.com" target="_blank" rel="noopener noreferrer" className="footer-link">Iconfinder</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
           
        </footer>
    );
};

export default Footer;