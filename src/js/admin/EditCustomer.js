import React, { Component } from 'react';

class EditCustomer extends Component {
    state = {
        item: this.props.selectedItem,
        editCustomerPage: this.props.editCustomerPage
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
    }
    saveCustomer() {
        if(this.state.item.id != undefined) {
            alert("editted Successfuly");
        } else {
            alert("New item added");
        }
        this.props.parentCallback();
    }
    resetReq() {

    }
    handleBreadCrumb() {
        this.props.parentCallback();
    }
    render() {
        return (
            <React.Fragment>

                <div className="col edit-customer">
                    <div className="list-group-header section-header row">
                        <div className="col-4">

                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                                        <span className="mb-1 underline">Manage</span>
                                        <span className="mb-1 blue-color pl-2">Customer</span>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        <span className="mb-1">{(this.state.item.length !== 0) ? 'Edit' : 'Add'}</span>
                                        <span className="mb-1 blue-color pl-2">Customer</span>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="col-8 text-right">
                            <button type="button" className="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.resetReq()} >Reset</button>
                            <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick={() => this.saveWorker()}>Save</button>
                        </div>
                    </div>

                    <div className="blue-box-div row">
                        <div className="col">
                            <div>
                                <span>Customer Name</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_name}
                                    onChange={this.handleChange.bind(this, 'c_name')} />
                            </div>
                            <div>
                                <span>Phone</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_phone}
                                    onChange={this.handleChange.bind(this, 'c_phone')} />
                            </div>
                            <div>
                                <span>Address</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.w_address}
                                    onChange={this.handleChange.bind(this, 'c_address')}></textarea>
                            
                            </div>
                            <div>
                                <span>Email</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_email}
                                    onChange={this.handleChange.bind(this, 'c_email')} />
                            </div>
                            
                            
                        </div>
                       

                    </div>



                </div>


            </React.Fragment>
        );
    }
}
export default EditCustomer;