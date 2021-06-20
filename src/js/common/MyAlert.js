import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function MyAlert({alertConfig,showAlert}) {
    const [show, setShow] = useState(showAlert);
  
    return (
      <>
        <Alert variant={alertConfig.variant}>
          {alertConfig.heading && <Alert.Heading>{alertConfig.heading}</Alert.Heading>}
          <p>
            {alertConfig.message}
          </p>
        </Alert>
  
        
      </>
    );
  }

export default MyAlert;