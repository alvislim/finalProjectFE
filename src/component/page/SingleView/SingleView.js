import React, { useState, useEffect }                  from 'react';
import api                                             from '../../../api'
import { useHistory }                                  from "react-router-dom";
import { Container, Card, ListGroup, ListGroupItem, Button }   from 'react-bootstrap';
import BootstrapTable                                  from 'react-bootstrap-table-next';
import paginationFactory                               from 'react-bootstrap-table2-paginator';
import LoadingScreen                                   from '../../general/LoadingScreen';
import Footer                                          from '../../general/Footer';
import NavigationBar                                   from '../../general/Navbar';
import ToolkitProvider, { Search }                     from 'react-bootstrap-table2-toolkit';
import { Line }                                        from 'react-chartjs-2';
import * as moment                                     from 'moment';


function SingleView(props) {

    const [userData, setUserData] = useState({});
    const [loginFlag, setLoginFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [prodId, setProId] = useState('');
    const [userItem, setUserItem] = useState([]);
    const [relevantItems, setRelevantItems] = useState([]);
    const [chartData, setChartData] = useState({});
    const [show, setShow] = useState(false);

    let history = useHistory();

    useEffect(() => {
        chart()
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

    const handleClick = async () => {
        setShow(!show)
        console.log(relevantItems.length)
      }

    const columns = [
       { dataField: 'prodName', text: 'Item Name', sort: true },
       { dataField: 'prodPrice', text: 'Item Price', sort: true }
    ]

    const { SearchBar } = Search

    const chart = async () => {
        try {
            let prodPrice = [];
            let dates = [];
            let id = { id: props.match.params.id }
            let getItemData = await api.getById(id)
            let dailyItemData = getItemData.data.payload.condolidatedPrice
            dailyItemData.map(item => {
                prodPrice.push(item.prices)
                dates.push(moment(item.date).local().format('MMMM DD'))
            })
            console.log(dates)
            setChartData({
                labels: dates,
                datasets: [{
                    label: 'Daily Price',
                    data: prodPrice,
                    backgroundColor: ['rgba(75, 192, 192, 0.6)'],
                    borderWidth: 4
                }]
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{height:'100%'}}>
            <NavigationBar loginFlag={loginFlag}/>
                {isLoading ?
                    <Container className='mt-5' style={{height:'100vh'}}>
                        <div className='d-flex justify-content-center'>
                         <LoadingScreen />
                        </div>
                    </Container> 
                    :
                    <div>

                    <Button variant='outline-dark' className='mt-2 ml-2'>
                        <a href='/dashboard' style={{color:'black', textDecoration:'none'}}>Back</a>
                    </Button>
                    
                    <Container >
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
                            <Button variant="outline-dark" className='mb-2' onClick={handleClick}>
                                {show ? 'Show' : 'Hide'}
                            </Button>
                        <div style={{ display: show ? 'none' : '' }}>
                            <div className='d-flex justify-content-center mb-5'>
                                <Line data={chartData} options={{
                                    response: true,
                                    title: {text: 'Daily Price track', display: true},
                                }}/>
                            </div>
                        </div>
              

                {relevantItems.length === 1 ?

                <Container className='text-center mt-5' style={{height:'100vh'}}>
                    <Card.Subtitle>We are unable to retrieve any results from <Card.Title>'{userItem.name}'</Card.Title></Card.Subtitle>
                </Container>
                    :
                    <div>
                        <h6>Below data is fetched from Sheng Shiong with the key word '{userItem.name}'</h6>
                        <span><h6>Alternatively, you can visit Sheng Shiong <a href='https://www.allforyou.sg/'>here</a></h6></span>
                    <ToolkitProvider
                        keyField='name'
                        data={relevantItems}
                        columns={columns}  
                        search
                    >
                        {
                            props => (
                        <div className='mb-5'>
                            <SearchBar { ...props.searchProps } placeholder='Search the products fetched from Sheng Shiong' />
                            <BootstrapTable
                                { ...props.baseProps }
                                pagination={paginationFactory()}
                                bootstrap4
                            />
                        </div>
                            )
                        }
                        </ToolkitProvider>
                    </div>
                }   
                </Container>
                </div>
                }   
                    
                <Footer />
       
        </div>
    )
}

export default SingleView;