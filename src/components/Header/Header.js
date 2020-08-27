import React from 'react';
import logo from '../../images/logo.png';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../../assets/css/bootstrap.min.css'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar bg="dark" variant="dark" text="white" sticky="true" fixed="top">
                <Navbar.Brand href="#home">
                    <img src={logo} />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#courses">Courses</Nav.Link>
                    <Nav.Link href="#categories">Categories</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;