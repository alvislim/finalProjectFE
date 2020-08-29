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
                <Navbar.Brand>Buy no Buy?</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                     
                    <Nav className="mr-auto" style={{display: props.loginFlag !== true ? 'none' : ''}}>
                        <Nav.Link href="/dashboard">Home</Nav.Link>
                    </Nav>
                   
                        {
                        props.loginFlag !== true ? 
                        <Nav style={{display: props.loginFlag !== true ? 'none' : ''}}>
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
