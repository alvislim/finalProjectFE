import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import url from '../../../url';
import axios from 'axios';
import api from '../../../api'
import WarningAlert from '../../general/WarningAlert';
import SuccessAlert from '../../general/SuccessAlert';
import NavigationBar from '../../general/Navbar';
import Footer from '../../general/Footer';
import ItemCard from '../../general/ItemCard';
import styles from './styles.module.css';


function Dashboard() {
  const { register, handleSubmit, errors } = useForm();
  const [userData, setUserData] = useState({});
  const [loginFlag, setLoginFlag] = useState(false);
  const [successPost, setSuccessPost] = useState('');
  const [errorPost, seterrorPost] = useState('');
  const [show, setShow] = useState(false);

  let history = useHistory();

  useEffect(() => {
    const verifyUserAuthenticate = async () => {
      try {
        let response = await api.verifyUser()
        if (response.data) {
          setUserData(response.data)
          console.log(response.data.email)
          setLoginFlag(true)
        } else history.push('/login')
      } catch (err) {
        console.log(err)
      }
    }
    verifyUserAuthenticate()
  }, [])

  const onSubmit = async (data, e) => {
    try {
      const email = userData.email
      const response = await axios.post(`${url}/coldstorage`, { ...data, email })
      console.log(response)
      if (response.data.success) {
        setSuccessPost(response.data.message)
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err)
      seterrorPost('We aplogized, we are currently having some issues with our server')
    }
  };

  const handleClick = async () => {
    setShow(!show)
  }

  return (
    <div>
      <NavigationBar loginFlag={loginFlag} />
      {/* <Container> */}
      <div className={styles.box}>
        <Button variant="dark" className='mx-auto' onClick={handleClick}>
          {show ? 'hide' : 'Add products to track'}
        </Button>
      </div>
      <Container className='mt-2 mb-5 text-center' style={{ display: show ? '' : 'none' }}>
        <Card body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2> Cold Storage Exclusive Price checker </h2>
            {successPost !== '' && <SuccessAlert success={successPost} />}
            {errorPost !== '' && <WarningAlert success={errorPost} />}
            <Form.Group className='mt-4'>
              <Form.Label>Name Of Product</Form.Label>
              <Form.Control input type='text' name='name' ref={register({ required: 'Field is required' })} />
            </Form.Group>
            {errors.name && <WarningAlert errors={errors.name.message} />}

            <Form.Group>
              <Form.Label>URL </Form.Label>
              <Form.Control input type='text' name='url' ref={register({ required: 'Field is required' })} />
            </Form.Group>
            {errors.url && <WarningAlert errors={errors.url.message} />}

            <Form.Group>
              <Form.Label>Price </Form.Label>
              <Form.Control input type='number'
                name='price'
                ref={register({ required: 'Field is required', min: { value: 1, message: 'Price should be more than 0' } })}
              />
            </Form.Group>
            {errors.price && <WarningAlert errors={errors.price.message} />}

            <Button input type='submit' variant="dark">Submit</Button>
          </Form>
        </Card>
      </Container>
      {/* </Container> */}
      <ItemCard />
      <Footer />
    </div>
  )
}

export default withRouter(Dashboard);