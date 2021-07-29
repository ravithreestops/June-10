import React from 'react';
import Alert from 'react-bootstrap/Alert';

function MyAlert({alertConfig,showAlert}) {
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