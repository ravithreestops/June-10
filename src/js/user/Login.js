import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Form, Input, InputGroup, Row } from 'reactstrap';
import AuthService from "../services/auth.service";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    handleLogin(event) {
        var data = JSON.stringify({
            "email": this.state.Email,
            "password": this.state.Password
        });
        AuthService.login(data).then(
            response => {
                if (response && response.data) {
                    this.props.history.push("/AdminDashboard");
                }
            },
            error => {
                console.log("Error");
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
                                    <Button color="success" onClick={this.handleLogin} >Login</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>

        );
    }
}
export default Login;