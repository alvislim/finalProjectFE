import React, { useState } from 'react';
import { Alert }           from 'react-bootstrap';

function SuccessAlert(props) {
    // const [show, setShow] = useState(true);
    if (props.showAlert) {
        return (
            <Alert variant="success" width={20}
            onClose={props.clickAlert} dismissible
            >
              {props.success}
          </Alert>
        )
    }
    return '';
}

export default SuccessAlert;