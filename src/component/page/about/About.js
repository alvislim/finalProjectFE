import Footer                             from '../../general/Footer';
import NavigationBar                      from '../../general/Navbar';
import React, { useEffect, useState }     from 'react';
import { withRouter }                     from "react-router-dom";
import { Container }                      from 'react-bootstrap';
import { useHistory }                     from "react-router-dom";
import url                                from '../../../url';
import api                                from '../../../api'

function About() {

    const [loginFlag, setLoginFlag] = useState(false);

    let history = useHistory();

    useEffect(() => {
        const verifyUserAuthenticate = async () => {
          try {
            let response = await api.verifyUser()
            if (response.data) {
              setLoginFlag(true)
            } else history.push('/login')
          } catch (err) {
            console.log(err)
            history.push('/login')
          }
        }
        verifyUserAuthenticate()
      }, [])

    return(
        <React.Fragment>
            <NavigationBar loginFlag={loginFlag} />
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