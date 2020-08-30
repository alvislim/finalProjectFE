import Footer                             from '../../general/Footer';
import NavigationBar                      from '../../general/Navbar';
import React                              from 'react';
import { withRouter }                     from "react-router-dom";
import { Form, Button, Card, Container }  from 'react-bootstrap';

function About() {
    return(
        <React.Fragment>
            <NavigationBar />
            <div style={{height:'100vh'}}>
            
            <Container className='text-center mt-5 mb-5'>
                        <h1>About Us</h1>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem', fontSize:'19px'}} className="font-weight-normal">
                            A young aspiring software developer.  
                        </p>               
                 </Container> 
            
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default withRouter(About);