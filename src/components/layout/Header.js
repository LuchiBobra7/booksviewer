import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Context from "../../Context";
import { Form, Input, Button, Navbar, Container } from 'reactstrap';
import { withRouter } from "react-router";

const Header = (props) => {
    const { query, setQuery } = useContext(Context);
    const [searchQuery, setSearchQuery ] = useState(query)
    const searchBooks = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value)
    }
    const inputEl = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchQuery)
        props.history.push('/')
    }
    return (
        <header className="header">
            <Navbar color="light" light fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img alt="" width="36" className="mr-2" src="/logo.png"/>
                        <span>Book&Viewer</span>
                    </Link>
                    <Form inline className="d-none d-md-flex search-form" onSubmit={(e) => handleSubmit(e)}>
                        <Input 
                            ref={inputEl}
                            className="rounded-0 pl-0 border-0 bg-transparent" 
                            onChange={(e) => searchBooks(e)}
                            placeholder="Search by Title..."/>
                        <Button className="pr-0 rounded-0 text-dark" color="link">
                            <i className="icons icon-magnifier"/>
                        </Button>
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
};

export default withRouter(Header);