import React, { Component } from 'react';

import { Button } from 'reactstrap';
import Modal from "react-bootstrap/Modal";

class Popup extends React.Component {
    render() {
      return (
        <Modal show={this.props.openFlag} onHide={this.props.parentCloseCallback}>
        <Modal.Header closeButton>
            <Modal.Title>{this.props.popupConfig.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.popupConfig.body}</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={this.props.parentCloseCallback}>Cancel</Button>
            {(this.props.popupConfig.type === "confirmation") && <Button color="success" onClick={this.props.parentConfirmCallback}>Confirm Delete</Button> }
        </Modal.Footer>
      </Modal>
      );
    }
  }
  export default Popup;