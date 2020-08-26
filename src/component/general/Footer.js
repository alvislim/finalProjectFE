import React               from 'react';
import { Card }            from 'react-bootstrap';

function Footer() {
    return (

            <Card className="card bg-dark text-white pt-3 rounded-0 sticky-bottom">
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.Body>
            </Card>
 
    )
}

export default Footer;