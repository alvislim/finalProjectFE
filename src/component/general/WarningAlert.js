import React, { useState } from 'react';
import { Alert }           from 'react-bootstrap';

function WarningAlert(props) {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="warning" width={20}
            onClose={() => setShow(false)} dismissible
            >
              {props.errors}
          </Alert>
        )
    }
    return '';
}

export default WarningAlert;