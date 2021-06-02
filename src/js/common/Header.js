import React, { Component } from 'react';
import LogoImage from '../../images/Logo.png';

class Header extends Component {
    state = {
        userName : "Sanjith Jacob"
    }
    avatarGenerator() {
        return ("S J");
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-header sticky-top">
                    <img className="logo-header" alt="Logo" src={LogoImage} />
                    <span className="float-right" data-letters={this.avatarGenerator()} >{this.state.userName}</span>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;