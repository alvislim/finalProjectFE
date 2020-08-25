import React, { useState } from 'react';
import { Alert }           from 'react-bootstrap';

function SuccessAlert(props) {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="success" width={20}
            onClose={() => setShow(false)} dismissible
            >
              {props.success}
          </Alert>
        )
    }
    return '';
}

export default SuccessAlert;