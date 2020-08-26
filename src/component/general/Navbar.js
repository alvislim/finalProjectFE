import React                                from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import api                                  from '../../api';
import { useHistory }                       from "react-router-dom";

function NavigationBar(props) {

    let history = useHistory();

    const handleLogout = async () => {
        try {
            const response = await api.logOut()
            console.log(response)
            if (response.data.success) history.push('/login')
        } catch (err) {
            throw err;
        }
      }

    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        {
                        props.loginFlag !== true ? 
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/register">Register</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Button variant='dark' onClick={handleLogout}>Logout</Button>
                        </Nav>
                        }
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavigationBar;
