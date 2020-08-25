import React            from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import styles           from './styles.module.css'


function Cards(props) {
    return (
        <div className={styles.box}>
        <Card style={{ width: '18rem', height:'30rem'}} className={styles.leading}>
             <Card.Img variant="top" src={props.payload.img} style={{width: '266px', height: '266px'}}/>
            <Card.Body>
                <Card.Title>{props.payload.name}</Card.Title>
                <Card.Text>
                    Desired Price: ${props.payload.price}
                </Card.Text>
                <Card.Text>
                    Product Current Price: ${props.payload.desiredPrice}
                </Card.Text>
                <Container>
                {props.priceMet ? 
                <Button variant='warning'>
                    <Card.Link href={props.payload.url} style={{color:'white'}}>BUY NOW!</Card.Link>
                </Button>
                :
                <Button variant='dark'>
                    <Card.Link href={props.payload.url} style={{color:'white'}}>Item Link</Card.Link>
                </Button>
                }
                <Button variant="dark" className='ml-2' onClick={()=> props.handleDelete(props.payload._id)}>Delete</Button>
                </Container>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Cards;