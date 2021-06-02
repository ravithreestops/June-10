import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Modal, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {loginMessages} from '../common/Constants';

import Popup from '../common/Popup';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
            showPopup: false
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        debugger;
        if(this.state.Email === 'admin' && this.state.Password === 'admin') {
            this.props.history.push("/AdminDashboard");
        } else if(this.state.Email != '' && this.state.Password!= '') {
            this.props.history.push("/Dashboard");
        } else {
            alert(loginMessages.ERROR);
        }
       // debugger;
       /* fetch('http://localhost:51282/Api/login/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");

            })*/
            //this.props.history.push("/Dashboard");

    } 
    render() {
       /* return (
            <div className='app'>
              <h1>hihi</h1>
              <button onClick={this.togglePopup.bind(this)}>show popup</button>
              {this.state.showPopup ? 
                <Popup
                  text='Close Me'
                  closePopup={this.togglePopup.bind(this)}
                />
                : null
              }
            </div>
          );
          */
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
                                <Button  color="success"  onClick={this.login} >Login</Button>
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