import React, { Component } from 'react';

import {usersTag} from '../common/Constants';

class Sidebar extends Component {

    render() {
        var currentUserId = JSON.parse(localStorage.getItem('user')).userId;
        
        return (
            <React.Fragment>
                {currentUserId !== usersTag.WORKER_TAG ? 
                ( <div className="sidebar-div">
                    <ul className="nav flex-column">
                        <li className="nav-item nav-quote-req" data-toggle="tooltip" data-placement="right" title="Quote Requests">
                            <a className="nav-link active" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="1"></a>
                        </li>
                        <li className="nav-item nav-workers" data-toggle="tooltip" data-placement="right" title="Workers">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="2"></a>
                        </li>
                        <li className="nav-item nav-mail" data-toggle="tooltip" data-placement="right" title="Customers">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="3"></a>
                        </li>
                        <li className="nav-item nav-inventory" data-toggle="tooltip" data-placement="right" title="Inventory">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="5"></a>
                        </li>
                        <li className="nav-item nav-operations" data-toggle="tooltip" data-placement="right" title="Operations">
                            <a className="nav-link" href="#operations-page" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="6"></a>
                        </li>
                        <li className="nav-item nav-projects" data-toggle="tooltip" data-placement="right" title="Projects">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="7"></a>
                        </li>
                        <li className="nav-item nav-test" data-toggle="tooltip" data-placement="right" title="Inspections">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="4"></a>
                        </li>    
                    </ul>
                </div> )
                : 
                ( <div className="sidebar-div">
                    <ul className="nav flex-column">
                        <li className="nav-item nav-operations" data-toggle="tooltip" data-placement="right" title="Operations">
                            <a className="nav-link" href="#operations-page" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="1"></a>
                        </li>
                        <li className="nav-item nav-projects" data-toggle="tooltip" data-placement="right" title="Projects">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="2"></a>
                        </li>
                        <li className="nav-item nav-test" data-toggle="tooltip" data-placement="right" title="Inspections">
                            <a className="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="3"></a>
                        </li>    
                    </ul>
                </div> )
                }
            </React.Fragment>
        );
    }
}
export default Sidebar;