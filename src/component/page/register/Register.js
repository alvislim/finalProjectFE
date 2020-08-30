import React, { useState }               from 'react';
import { useForm }                       from 'react-hook-form';
import { withRouter }                    from "react-router-dom";
import { Form, Button, Card, Container } from 'react-bootstrap';
import { PersonPlusFill }                from 'react-bootstrap-icons';
import axios                             from 'axios';
import url                               from '../../../url'
import WarningAlert                      from '../../general/WarningAlert';
import { useHistory }                    from "react-router-dom";
import NavigationBar                     from '../../general/Navbar';
import Footer                            from '../../general/Footer';
import LoadingScreen                     from '../../general/LoadingScreen';

function Register() {
  const { register, handleSubmit, errors } = useForm();
  const [passwordMismatch, setpasswordMismatch] = useState('');
  const [serverError, setserverError] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  const onSubmit = async (data, e) => {
    try {
      setIsLoading(true)
      e.preventDefault()
      if (data.password !== data.password2) {
        setpasswordMismatch('Password and Current Password do not match')
      } else {
        const response = await axios.post(`${url}/register`, data);
        if (response.data.success) {
          setIsLoading(false)
          history.push('/login')
        }
        else setserverError(response.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  };

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
        <Card body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1><PersonPlusFill size={60} /> REGISTER</h1>
            {passwordMismatch !== '' && <WarningAlert errors={passwordMismatch} />}
            {serverError !== '' && <WarningAlert errors={serverError} />}
            <Form.Group className='mt-4'>
              <Form.Label>Name </Form.Label>
              <Form.Control input type='text' name='name' ref={register({ required: 'Field is required' })} />
            </Form.Group>
            {errors.name && <WarningAlert errors={errors.name.message} />}

            <Form.Group>
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

            <Form.Group>
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control input type='password'
                name='password2'
                ref={register({ required: 'Field is required', minLength: { value: 8, message: 'Min length should be 8 for password' } })}
              />
            </Form.Group>
            {errors.password2 && <WarningAlert errors={errors.password2.message} />}

            <Button input type='submit' variant="dark">Submit</Button>
            <p className='mt-3'>Already have an account? Click<a href='/login'> Here</a></p>
          </Form>
        </Card>
      </Container>
      }
      <Footer />
    </div>
  )
}

export default withRouter(Register);