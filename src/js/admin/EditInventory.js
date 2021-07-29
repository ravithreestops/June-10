import React, { Component } from 'react';

import AdminService from "../services/admin.service";

class EditInventory extends Component {
    state = {
        item: this.props.selectedItem,
        editInventoryPage: this.props.editInventoryPage
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
    }
    saveInventory() {
        console.log(this.state.item);
        if(this.state.item.id !== undefined) {
            alert("editted Successfuly");
        } else {
            //alert("New item added");
            this.createInventory();
        }
        this.props.parentCallback();
    }
    createInventory() {
        /**
         {
    "__comment": "Operations is not mandatory , you can tag operations later",
    "itemName": "Screw",
    "itemDesc": "Description For Screw",
    "availability": 250,
    "cost": 10,
    "supplier_email": "sanjith@g.com",
    "operations": [
        {
            "id": 1
        }
    ]
}
         */

console.log(this.state.item);
        var data = {
            "itemName": "Screw",
            "itemDesc": "Description For Screw",
            "availability": 250,
            "cost": 10,
            "supplier_email": "sanjith@g.com",
            "operations": [
                {
                    "id": 1
                }
            ]
        };

        AdminService.createInventory(data).then(
            response => {
                console.log(response);
                alert("New item added");
            },
            error => {
                console.log("Error");
            }
        ); 
    }
    resetReq() {

    }
    handleBreadCrumb() {
        this.props.parentCallback();
    }
    render() {
        return (
            <React.Fragment>

                <div className="col edit-inventory">
                    <div className="list-group-header section-header row">
                        <div className="col-4">

                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                                        <span className="mb-1 underline">Manage</span>
                                        <span className="mb-1 blue-color pl-2">Inventory</span>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        <span className="mb-1">{(this.state.item.length !== 0) ? 'Edit' : 'Add'}</span>
                                        <span className="mb-1 blue-color pl-2">Inventory</span>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="col-8 text-right">
                            <button type="button" className="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.resetReq()} >Reset</button>
                            <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick={() => this.saveInventory()}>Save</button>
                        </div>
                    </div>

                    <div className="blue-box-div row">
                        <div className="col white-border-right">
                            <div>
                                <span>Item Name</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.item_name}
                                    onChange={this.handleChange.bind(this, 'itemName')} />
                            </div>
                            <div>
                                <span>Description</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.item_desc}
                                    onChange={this.handleChange.bind(this, 'description')}></textarea>
                            </div>
                            <div>
                                <span>Availability</span>
                                <div >
                                    <input type="number"
                                        className="form-control d-inline" defaultValue={this.state.item.availability}
                                        onChange={this.handleChange.bind(this, 'availability')} />
                                    <a className="btn btn-blue ml-4 p-2 d-inline" href="mailto:someone@yoursite.com">Contact Supplier</a>

                                </div>

                            </div>
                            <div>
                                <span>Cost</span>
                                <input type="number"
                                    className="form-control" defaultValue={this.state.item.cost}
                                    onChange={this.handleChange.bind(this, 'cost')} />
                            </div>
                        </div>
                        <div className="col">
                        <span> {this.state.item.operations_tagged ? 'Operatios Tagged' : 'No Operatios Tagged'}</span>
                            
                            <div>
                                {this.state.item.operations_tagged && this.state.item.operations_tagged.map((operation, index) => (
                                    <span className="badge tool-badge">Operation {index + 1} - {operation}</span>
                                )
                                )}
                            </div>
                        </div>

                    </div>



                </div>


            </React.Fragment>
        );
    }
}
export default EditInventory;