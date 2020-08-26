import React            from 'react';
import { Spinner, Row } from 'react-bootstrap';

function LoadingScreen() {
    return (
        <Row className="justify-content-md-center">
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="dark" />
        </Row> 
    )
}

export default LoadingScreen;