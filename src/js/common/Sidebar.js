import React, { Component } from 'react';

class Sidebar extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="sidebar-div">
                    <ul class="nav flex-column">
                        <li class="nav-item nav-quote-req" data-toggle="tooltip" data-placement="right" title="Quote Requests">
                            <a class="nav-link active" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="1"></a>
                        </li>
                        <li class="nav-item nav-workers" data-toggle="tooltip" data-placement="right" title="Workers">
                            <a class="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="2"></a>
                        </li>
                        <li class="nav-item nav-mail" data-toggle="tooltip" data-placement="right" title="Customers">
                            <a class="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="3"></a>
                        </li>
                        <li class="nav-item nav-inventory" data-toggle="tooltip" data-placement="right" title="Inventory">
                            <a class="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="5"></a>
                        </li>
                        <li class="nav-item nav-operations" data-toggle="tooltip" data-placement="right" title="Operations">
                            <a class="nav-link" href="#operations-page" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="6"></a>
                        </li>
                        <li class="nav-item nav-projects" data-toggle="tooltip" data-placement="right" title="Projects">
                            <a class="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="7"></a>
                        </li>
                        <li class="nav-item nav-test" data-toggle="tooltip" data-placement="right" title="Inspections">
                            <a class="nav-link" data-toggle="tab" onClick={ (e) => this.props.onClick(e) } data-id="4"></a>
                        </li>
                        
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
export default Sidebar;