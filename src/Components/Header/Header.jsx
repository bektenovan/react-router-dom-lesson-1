import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

//         <Navbar.Brand className='btn btn-success' href="#home">Home</Navbar.Brand>

const Header = () => {
    const location = useLocation()
    // console.log(location);
    return (
        <Navbar>
            <Container>
                <Link to='/'>
                    <Navbar.Brand className={location.pathname === '/' ? "btn btn-success" : "btn btn-light"} href="#home">Home</Navbar.Brand>
                </Link>
                <Link to='/add'>
                    <Navbar.Brand className={location.pathname === '/add' ? "btn btn-success" : "btn btn-light"} href="#home">Add</Navbar.Brand>
                </Link>
                <Link to='/contacts'>
                    <Navbar.Brand className={location.pathname === '/contacts' ? "btn btn-success" : "btn btn-light"} href="#home">Contacts</Navbar.Brand>
                </Link>


                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;