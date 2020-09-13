import React, { useState } from 'react';
import { Alert }           from 'react-bootstrap';

function WarningAlert(props) {
    // const [show, setShow] = useState(true);
    if (props.showWarnAlert) {
        return (
            <Alert variant="warning" width={20}
            onClose={props.clickWarn} dismissible
            >
              {props.errors}
          </Alert>
        )
    }
    return '';
}

export default WarningAlert;