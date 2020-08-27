import React                       from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import styles                      from './styles.module.css'


function Cards(props) {
    return (
        <div className={styles.box}>
        <Card style={{ width: '18rem', height:'100'}} className={styles.leading}>
             <Card.Img variant="top" src={props.payload.img} style={{width: '100%', height: '268px'}}/>
       
            
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                    <h6>Product Name:</h6>{props.payload.name}
                    </ListGroupItem>
                    <ListGroupItem><h6>Desired Price:</h6>${props.payload.price}</ListGroupItem>
                    <ListGroupItem><h6>Product Current Price:</h6> ${props.payload.desiredPrice}</ListGroupItem>
                </ListGroup>
            
                <Button variant="dark" className='rounded-0'>
                <Card.Link href={props.payload.url} style={{color:'white'}}>{props.priceMet ? 'Buy' : 'Item Link'}</Card.Link>
                </Button>
                <Button variant="dark" className='rounded-0' onClick={()=> props.handleNavigate(props.payload._id)}>More Info</Button>
                <Button variant="dark" className='rounded-0' onClick={()=> props.handleDelete(props.payload._id)}>Delete</Button>       
          
        </Card>
        </div>
    )
}

export default Cards;