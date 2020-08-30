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
                <Navbar.Brand>Buy no Buy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                     
                        <Nav className='mt-1 mr-auto'>
                            <Nav.Link href={props.loginFlag===true ? '/dashboard' : '/'}>Home</Nav.Link>
                            <Nav.Link href='/about'>About Us</Nav.Link>
                        </Nav>
              
                        <Nav style={{display: props.loginFlag!==true && 'none'}}>
                            <Navbar.Text className='mr-3'>
                            Signed in as: <a>{props.name}</a>
                            </Navbar.Text>
                            <Button variant='dark' onClick={handleLogout}>Logout</Button>
                        </Nav>

                        <Nav style={{display: props.loginFlag===true && 'none'}}>
                            <Button variant='dark' href='/login'>Login</Button>
                        </Nav>

                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavigationBar;
