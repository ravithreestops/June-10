import React, { Component } from 'react';
import CustomerJson from '../../data/customerData.json';

import EditCustomer from './EditCustomer';

class ManageCustomer extends Component {
    state = {
        searchValue: "",
        listitems: CustomerJson.rows,
        selectedItem: [],
        editCustomerPage: false
    }
    handleSearchChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    editCustomer() {
        this.setState({
            editCustomerPage: true
        });
    }
    addCustomer() {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editCustomerPage: true
        });
    }
    deleteCustomer() {
        var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
    }
    onCustomerSelected(selectedItem) {
        this.setState({
            selectedItem: selectedItem
        });
    }
    parentCallback = () => {
        this.setState({
            editCustomerPage: false
        });
    }
    renderCustomerList() {
        return (<div className="col admin-list-page">
            <div className="list-group-header section-header row">
                <div className="col-4">
                    <span className="mb-1 underline">Manage</span>
                    <span className="mb-1 blue-color pl-2">Customer</span>
                </div>
                <div className="col-8 text-right">
                    <div className="has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control search-box" placeholder="Search Customer..." onChange={this.handleSearchChange.bind(this)} />
                    </div>
                    <button className="btn delete-btn" onClick={() => this.deleteCustomer()}></button>
                    <button className="btn edit-btn" onClick={() => this.editCustomer()}></button>
                    <button className="btn add-btn" onClick={() => this.addCustomer()}></button>
                </div>
            </div>
            <div className="quote-req-list">
                <div className="row mt-1 quote-req-header">
                    <div className="col-sm">
                        <label>Customer Name</label>
                    </div>
                    <div className="col-sm">
                        <label>Phone</label>
                    </div>
                    <div className="col-sm">
                        <label>Address</label>
                    </div>
                    <div className="col-sm">
                        <label>Email</label>
                    </div>
                    <div className="col-sm">
                        <label>No of Request</label>
                    </div>
                </div>
                <div className="quote-req-table">
                    {this.state.listitems.filter(item =>
                        item.c_name.toLowerCase().includes(this.state.searchValue)).map(listitem => (


                            <div className="row mt-1" key={listitem.id}>


                                <div className="col-sm" >
                                    <label className="btn btn-default blue projectname-truncate text-truncate">
                                        <input type="radio" className="toggle"
                                            name="quoteItem" value={listitem.id}
                                            onChange={() => this.onCustomerSelected(listitem)} />
                                        {listitem.c_name}
                                    </label>

                                </div>

                                <div className="col-sm" >
                                    <label className="description-truncate text-truncate">{listitem.c_phone}</label>
                                </div>

                                <div className="col-sm" >
                                    <label>{listitem.c_address}</label>
                                </div>

                                <div className="col-sm" >
                                    <label>{listitem.c_email}</label>
                                </div>
                                
                                <div className="col-sm" >
                                    <label>{listitem.no_of_req}</label>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>);
    }
    render() {
        return (
            <React.Fragment>
                {this.state.editCustomerPage ? <EditCustomer selectedItem={this.state.selectedItem} parentCallback={this.parentCallback} /> : this.renderCustomerList()}
            </React.Fragment>
        );
    }
}
export default ManageCustomer;