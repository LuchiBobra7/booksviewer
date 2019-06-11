import React from "react";
import { Navbar, Container } from "reactstrap";
import Logo from '../Logo';
import SearchForm from './SearchForm';

const Header = props => {
  return (
    <Navbar color="light" light fixed="top" className="header bg-white">
      <Container>
        <Logo/>
        <SearchForm/>
      </Container>
    </Navbar>
  );
};

export default Header;