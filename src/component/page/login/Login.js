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



function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [loginErrors, setloginErrors] = useState('');

  let history = useHistory();

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${url}/login`, data, { withCredentials: true })
      console.log(response.data)
      if (!response.data.success) setloginErrors(response.data.message)
      history.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <NavigationBar />
      
      <Container className='mt-5 text-center mb-5' style={{width:'50%', height:'100vh'}}>
        <Card body className={styles.card}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1><PersonCheckFill size={60} /> LOGIN</h1>
            {loginErrors !== '' && <WarningAlert errors={loginErrors} />}
            <Form.Group className='mt-4'>
              <Form.Label>Email </Form.Label>
              <Form.Control input type='email' name='email' ref={register({ required: 'Field is required' })} />
            </Form.Group>
            {errors.email && <WarningAlert errors={errors.email.message} />}

            <Form.Group>
              <Form.Label>Password </Form.Label>
              <Form.Control input type='password'
                name='password'
                ref={register({ required: 'Field is required', minLength: { value: 8, message: 'Min length should be 8 for password' } })}
              />
            </Form.Group>
            {errors.password && <WarningAlert errors={errors.password.message} />}

            <Button input type='submit' variant="dark">Submit</Button>
          </Form>
        </Card>
      </Container>


        <Footer/>

      
    </div>
  )
}

export default withRouter(Login);