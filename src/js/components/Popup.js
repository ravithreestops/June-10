import React from 'react';

import { Button } from 'reactstrap';
import Modal from "react-bootstrap/Modal";
import ForgotPassword from "../common/ForgotPassword";
import ToolsList from "../common/ToolsList";

class Popup extends React.Component {

  toolsListCallback = (list) => {
    this.props.parentCloseCallback(list);
  }

  renderPopupBody() {  
    switch(this.props.popupConfig.type) {
      case 'forgotPassword':
        return <ForgotPassword popupClose={this.props.parentCloseCallback}></ForgotPassword>;
      case 'toolsList':
        return <ToolsList popupClose={this.toolsListCallback}></ToolsList>;
      default:
        return this.props.popupConfig.body;
    }
  };

  render() {
    const popupConfigType = this.props.popupConfig.type;
    let button;

    if (popupConfigType === "confirmation") {
      button = <Button color="success" onClick={this.props.parentConfirmCallback}>Confirm Delete</Button>;
    } 
    return (
      <Modal show={this.props.openFlag} onHide={this.props.parentCloseCallback}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.popupConfig.header}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        { this.renderPopupBody() }
        </Modal.Body>
       
        <Modal.Footer>
          {button}
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Popup;