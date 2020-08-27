import React, { useState, useEffect }     from 'react';
import api                                from '../../../api'
import { useHistory }                     from "react-router-dom";
import { Container, Card, ListGroup, ListGroupItem }                      from 'react-bootstrap';
import BootstrapTable                     from 'react-bootstrap-table-next';
import paginationFactory                  from 'react-bootstrap-table2-paginator';
import LoadingScreen                      from '../../general/LoadingScreen';
import Footer                             from '../../general/Footer';
import NavigationBar                      from '../../general/Navbar';

function SingleView(props) {

    const [userData, setUserData] = useState({});
    const [loginFlag, setLoginFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [prodId, setProId] = useState('');
    const [userItem, setUserItem] = useState([]);
    const [relevantItems, setRelevantItems] = useState([]);
    let history = useHistory();

    useEffect(() => {
        const verifyUserAuthenticate = async () => {
            try {
                let response = await api.verifyUser()
                setProId(props.match.params.id)
                setIsLoading(true)
                if (response.data) {
                    setUserData(response.data)
                    let id = { id: props.match.params.id }
                    let getItemData = await api.getById(id)
                    setUserItem(getItemData.data.payload)
                    setRelevantItems(getItemData.data.payload.recommendedProducts)
                    setIsLoading(false)
                    setLoginFlag(true)
                } else if (!response.data) history.push('/login')
            } catch (err) {
                console.log(err)
            }
        }
        verifyUserAuthenticate()
    }, [])

    const columns = [
       {dataField: 'prodName', text: 'Item Name', sort: true },
       {dataField: 'prodPrice', text: 'Item Price', sort: true }
    ]

    return (
        <React.Fragment>
            <NavigationBar/>
                {isLoading ?
                    <Container className='mt-5' style={{height:'100%'}}>
                        <LoadingScreen />
                    </Container> 
                    :
                    <Container style={{height:'100vh'}}>
                        <div className='d-flex justify-content-center mt-5 mb-3'>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={userItem.img} style={{width: '100%', height: '268px'}}/>
                            </Card>
                            <Card>
                            <ListGroup className="list-group-flush">
                            <ListGroupItem>
                            <h6>Product Name:</h6>{userItem.name}
                            </ListGroupItem>
                                <ListGroupItem><h6>Desired Price:</h6>${userItem.price}</ListGroupItem>
                                <ListGroupItem><h6>Product Current Price:</h6> ${userItem.desiredPrice}</ListGroupItem>
                            </ListGroup>
                            </Card>
                        </div>
                {relevantItems.length == 0 ?
                <Container className='text-center mt-5'>
                    <Card.Subtitle>We are unable to retrieve any results from <Card.Title>'{userItem.name}'</Card.Title></Card.Subtitle>
                </Container>
                    :
                    <div>
                        <h6>Below data is fetched from Sheng Shiong with the key word '{userItem.name}'</h6>
                        <span><h6>Alternatively, you can visit Sheng Shiong <a href='https://www.allforyou.sg/'>here</a></h6></span>
                            <BootstrapTable
                                bootstrap4
                                keyField='name'
                                data={relevantItems}
                                columns={columns} 
                                pagination={paginationFactory()}
                                button='black'
                            />
                    </div>
                }   
                   
                </Container>
                }
          
                <Footer />
       
        </React.Fragment>
    )
}

export default SingleView;