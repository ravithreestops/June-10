import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Form, Input, InputGroup, Row } from 'reactstrap';
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import MyAlert from "../common/MyAlert";
import {loginMessages} from '../common/Constants';

import Popup from "../common/Popup";


class Login extends Component {

    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
            showAlert: false,
            alertConfig: {
                "variant": "danger"
            },
            popupConfig: {},
            isPopupOpen: false
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.loginValidation = this.loginValidation.bind(this);
    }

    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    loginValidation(event) {
        if(this.state.Email === '' || this.state.Password === '') {
            this.state.alertConfig.message = loginMessages.REQUIRED;
            this.setState({ showAlert: true });
        }else if (!isEmail(this.state.Email)) {
            this.state.alertConfig.message = loginMessages.EMAILERROR;
            this.setState({ showAlert: true });
         } else {
            this.handleLogin(event);
         }
    }
    handleLogin(event) {

        var data = JSON.stringify({
            "email": this.state.Email,
            "password": this.state.Password
        });
        AuthService.login(data).then(
            response => {
                console.log(response);
                if (response && response.data) {
                    if(response.data.userId === 5) {
                        this.props.history.push("/Dashboard");
                    } else if(response.data.userId === 15){
                        this.props.history.push("/AdminDashboard");
                    }
                    
                } else {
                    this.state.alertConfig.message = loginMessages.ERROR;
                    this.setState({ showAlert: true });
                }
            },
            error => {
                this.state.alertConfig.message = loginMessages.ERROR;
                this.setState({ showAlert: true });
            }
        );

        /*
                if(this.state.Email === 'admin' && this.state.Password === 'admin') {
                    this.props.history.push("/AdminDashboard");
                } else if(this.state.Email != '' && this.state.Password!= '') {
                    this.props.history.push("/Dashboard");
                } else {
                    alert(loginMessages.ERROR);
                }
             */


    }
    forgotPassword  = () =>  {
        this.setState({
            isPopupOpen: true,
            popupConfig : {
                header: "Message",
                body: "sgfsdgfdg gfds",
                type: "message"
            }
        });
    }
    handleClose = () => {
        this.setState({
            isPopupOpen: false
        });
    };

    handleModalYes = () => {
        this.setState({
            isPopupOpen: false
        });
    };
    render() {
        return (
            
           <Row className="justify-content-center login-div">
                <Col md="9" lg="7" xl="6">
                    <CardGroup>
                        <Card className="p-2">
                            <CardBody>
                                <Form>
                                    <InputGroup className="mb-3">
                                        <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <Input type="password" onChange={this.Password} placeholder="Enter Password" />
                                    </InputGroup>

                                    <p className="forgot-password text-right">Forgot <a onClick = {this.forgotPassword} href="#" >password?</a></p>

                                    <Button color="success" onClick={this.loginValidation} >Login</Button>
                                </Form>
                                {this.state.showAlert && < MyAlert alertConfig = {this.state.alertConfig} showAlert={this.state.showAlert} />}
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
                <Popup popupConfig = {this.state.popupConfig} openFlag = {this.state.isPopupOpen} parentCloseCallback={this.handleClose.bind(this)} parentConfirmCallback = {this.handleModalYes.bind(this)}></Popup>
            </Row>
        );
    }
}
export default Login;