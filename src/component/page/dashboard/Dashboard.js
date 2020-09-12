import React, { useEffect, useState }     from 'react';
import { withRouter }                     from "react-router-dom";
import { useHistory }                     from "react-router-dom";
import { useForm }                        from 'react-hook-form';
import { Form, Button, Card, Container }  from 'react-bootstrap';
import url                                from '../../../url';
import axios                              from 'axios';
import api                                from '../../../api'
import WarningAlert                       from '../../general/WarningAlert';
import SuccessAlert                       from '../../general/SuccessAlert';
import Footer                             from '../../general/Footer';
import NavigationBar                      from '../../general/Navbar';
import LoadingScreen                      from '../../general/LoadingScreen';
import Cards                              from '../../general/Cards';
import styles                             from './styles.module.css';
import Fuse                               from 'fuse.js';


function Dashboard() {
  const { register, handleSubmit, errors } = useForm();
  const [userData, setUserData] = useState({});
  const [successPost, setSuccessPost] = useState('');
  const [errorPost, seterrorPost] = useState('');
  const [show, setShow] = useState(false);
  const [userItem, setUserItem] = useState([]);
  const [loginFlag, setLoginFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  let history = useHistory();

  useEffect(() => {
    const verifyUserAuthenticate = async () => {
      try {
        let response = await api.verifyUser()
        setIsLoading(true)
        if (response.data) {
          setUserData(response.data)
          let email = response.data
          let getItemData = await api.getItem(email)
          setUserItem(getItemData.data.payload)
          setIsLoading(false)
          setLoginFlag(true)
        } else history.push('/login')
      } catch (err) {
        console.log(err)
        history.push('/login')
      }
    }
    verifyUserAuthenticate()
  }, [])

  const handleDelete = async (id) => {
    try {
        setIsLoading(true)
        const data = { id: id }
        const response = await api.deleteItem(data)
        console.log(response.data.success)
        if(response.data.success) {
            let getItemData = await api.getItem(userData)
            setUserItem(getItemData.data.payload)
            setIsLoading(false)
            setSuccessPost(response.data.message)
        }
    } catch (err) {
        console.log(err)
    }
}

  const onSubmit = async (data, e) => {
    try {
      setIsLoading(true)
      const email = userData.email
      const response = await axios.post(`${url}/coldstorage`, { ...data, email }, { withCredentials: true })
      console.log(response)
      if (response.data.success) {
        let getItemData = await api.getItem(userData)
        setUserItem(getItemData.data.payload)
        setIsLoading(false)
        setSuccessPost(response.data.message)
        setShow(false)
      } else {
        setIsLoading(false)
        seterrorPost('We aplogized, we are currently having some issues with our server')
      }
    } catch (err) {
      console.log(err)
      setIsLoading(false)
      seterrorPost('We aplogized, we are currently having some issues with our server')
    }
  };

  const handleClick = async () => {
    setShow(!show)
  }

  const handleNavigate = async (id) => {
    console.log(id)
    history.push(`/${id}`)
  }

  const fuse = new Fuse(userItem, {
    keys: [
      'name',
      'price',
      'desiredPrice'
    ]
  })

  const results = fuse.search(query)
  const searchResults = query ? results.map(result => result.item) : userItem

  function handleOnSearch(e) {
    const { value } = e.currentTarget
    setQuery(value)
  }

  return (
    <div style={{height:'100vh'}}>
      <NavigationBar loginFlag={loginFlag} name={userData.name}/>

      <div className='d-flex justify-content-center mt-5 mb-3'>
        <Form>
          <Form.Control input type='text' value={query} onChange={handleOnSearch} placeholder='Enter keyword to search'/>
        </Form>
      </div>

          {successPost !== '' && <SuccessAlert success={successPost} />}
          {errorPost !== '' && <WarningAlert errors={errorPost} />}

          <div className={styles.box}>
            <Button variant="outline-dark" className='mx-auto' onClick={handleClick}>
              {show ? 'hide' : 'Add products to track'}
            </Button>
          </div>

      {isLoading ?

      <div style={{height:'100vh'}} className='d-flex justify-content-center'>
        <LoadingScreen/>
      </div>

      :

      <div>
        <Container className='mt-2 mb-5 text-center' style={{ display: show ? '' : 'none' }}>
        <Card body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2> Cold Storage Exclusive Price checker </h2>
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
                ref={register({ required: 'Field is required' })}
              />
            </Form.Group>
            {errors.price && <WarningAlert errors={errors.price.message} />}

            <Button input type='submit' variant="dark">Submit</Button>
          </Form>
        </Card>
      </Container>
      

        <div>
            {userItem == 0 ? 
              <Container className='text-center mt-5' style={{height:'100vh'}}>
                <Card.Subtitle>Please click on the above Button to start TRACKING now!</Card.Subtitle>
              </Container>
                :
              <div className={styles.cards}>
              {searchResults.map((items,i) => {
                  if(items.desiredPrice <= items.price) {
                      return (
                          <Cards payload={items} key={i} handleDelete={handleDelete} handleNavigate={handleNavigate} priceMet={true} />
                      )
                  } else {
                      return (
                          <Cards payload={items} key={i} handleDelete={handleDelete} handleNavigate={handleNavigate} />
                      )
                  }

              })}
              </div>
            }
        </div>
    </div>
    }

      <Footer />
    </div>
  )
}

export default withRouter(Dashboard);