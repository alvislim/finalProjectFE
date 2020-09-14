import React, { useState }               from 'react';
import { withRouter }                    from "react-router-dom";
import { useForm }                       from 'react-hook-form';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { PersonCheckFill }               from 'react-bootstrap-icons';
import axios                             from 'axios';
import url                               from '../../../url'
import WarningAlert                      from '../../general/WarningAlert';
import { useHistory }                    from "react-router-dom";
import styles                            from './styles.module.css'
import NavigationBar                     from '../../general/Navbar';
import Footer                            from '../../general/Footer';
import LoadingScreen                     from '../../general/LoadingScreen';


function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [loginErrors, setloginErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWarnAlert, setShowWarnAlert] = useState(true);

  let history = useHistory();

  const onSubmit = async (data, e) => {
    try {
      setIsLoading(true)
      e.preventDefault();
      const response = await axios.post(`${url}/login`, data, { withCredentials: true })
      console.log(response.data)
      if (response.data.success) {
        history.push('/dashboard')
        setIsLoading(false)
      } else {
        setShowWarnAlert(true)
        setIsLoading(false)
        setloginErrors(response.data.message)
      }
      
    } catch (err) {
      console.log(err)
    }
  }

  const clickWarn = () => {
    setShowWarnAlert(!showWarnAlert)
  }

  return (
    <div>
      <NavigationBar />
      {
        isLoading ? 
          <div style={{height:'100vh'}} className='d-flex justify-content-center mt-5'>
            <LoadingScreen/>
          </div>
        :
          <Container className='mt-5 text-center mb-5' style={{height:'100vh'}}>
          <Card body className={styles.card}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h1><PersonCheckFill size={60} /> LOGIN</h1>
              {loginErrors && <WarningAlert errors={loginErrors} showWarnAlert={showWarnAlert} clickWarn={clickWarn}/>}
              <Form.Group className='mt-4'>
                <Form.Label>Email </Form.Label>
                <Form.Control input type='email' name='email' ref={register({ required: 'Field is required' })} />
              </Form.Group>
              {errors.email && <WarningAlert errors={errors.email.message} showWarnAlert={showWarnAlert} clickWarn={clickWarn}/>}

              <Form.Group>
                <Form.Label>Password </Form.Label>
                <Form.Control input type='password'
                  name='password'
                  ref={register({ required: 'Field is required', minLength: { value: 8, message: 'Min length should be 8 for password' } })}
                />
              </Form.Group>
              {errors.password && <WarningAlert errors={errors.password.message} showWarnAlert={showWarnAlert} clickWarn={clickWarn}/>}

              <Button input type='submit' variant="dark">Submit</Button>
              <p className='mt-3'>Don't have an account yet? Click<a href='/register'> Here</a></p>
            </Form>
          </Card>
        </Container>
      }



        <Footer/>

      
    </div>
  )
}

export default withRouter(Login);