import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import { Button, ButtonGroup } from 'reactstrap';
import LogoImage from '../../images/Logo.png';

class Header extends Component {
    
    logOut() {
        localStorage.removeItem("user");
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-header sticky-top">
                    <img className="logo-header" alt="Logo" src={LogoImage} />
                    <div className="float-right">
                        <Dropdown as={ButtonGroup}>
                            <Button >{JSON.parse(localStorage.getItem('user')).userName}</Button>
                            <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item >Profile</Dropdown.Item>
                                <Dropdown.Item href = "/" onClick={() => this.logOut()}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;