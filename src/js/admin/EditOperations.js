import React, { Component } from 'react';

import AdminService from "../services/admin.service";

class EditOperations extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: this.props.selectedItem,
            toolsList: [],
            selectedTool: {},
            Required: 0,
            workerList: [],
            selectedWorker: {}
        }
        this.getAllTools();
        this.getAllWorkers();
        this.Required = this.Required.bind(this);
    }

    getAllTools() {
        AdminService.getAllInventory().then(
            response => {
                this.setState({
                    toolsList: response.data.rows
                });
            },
            error => {
                console.log("Error");
            }
        );
    }

    getAllWorkers() {
        AdminService.getAllWorkers().then(
            response => {
                this.setState({
                    workerList: response.data.rows
                });
            },
            error => {
                console.log("Error");
            }
        );
    }

    Required(event) {
        this.setState({ Required: event.target.value })
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
    }
    handleToolSelection(event) {
        this.state.selectedTool["Inventories"] = this.state.toolsList.find(o => o.id == event.target.value);
    }
    handleWorkerSelection(event) {
        this.state.selectedWorker["Workers"] = this.state.workerList.find(o => o.id == event.target.value);
    }

    addTools(event) {
        
        this.state.selectedTool.Inventories['required'] = this.state.Required;
        var selectedOperation = this.state.item;
        selectedOperation.OperationInventories.push(this.state.selectedTool);
        this.setState({ item: selectedOperation });
     
    }
    addWorker(event) {
        var selectedOperation = this.state.item;
        selectedOperation.OperationWorkers.push(this.state.selectedWorker);
        this.setState({ item: selectedOperation });
    }

    saveOperation() {
        /*console.log(this.state.item);
        if(this.state.item.id != undefined) {
            alert("editted Successfuly");
        } else {
            alert("New item added");
        }*/
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

                <div className="col edit-inventory">
                    <div className="list-group-header section-header row">
                        <div className="col-4">

                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                                        <span className="mb-1 underline">Manage</span>
                                        <span className="mb-1 blue-color pl-2">Operation</span>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <span className="mb-1">{(this.state.item.length !== 0) ? 'Edit' : 'Add'}</span>
                                        <span className="mb-1 blue-color pl-2">Operation</span>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="col-8 text-right">
                            <button type="button" className="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.resetReq()} >Reset</button>
                            <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick={() => this.saveOperation()}>Save</button>
                        </div>
                    </div>

                    <div className="blue-box-div row">
                        <div className="col white-border-right">
                            <div>
                                <span>Operation Name</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.name}
                                    onChange={this.handleChange.bind(this, 'name')} />
                            </div>
                            <div>
                                <span>Description</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.desc}
                                    onChange={this.handleChange.bind(this, 'desc')}></textarea>
                            </div>

                            <div>
                            <div className="row">
                            <div className="col"><span>Tools and Materials</span></div>
                            <div className="col"><span>Required</span></div>
                            </div>
                                
                                <div className="row">
                                    <div className="col">
                                        <select className="form-control" onChange={this.handleToolSelection.bind(this)}>
                                            <option selected>Select Tools</option>
                                            {this.state.toolsList.map((toolItem) => (
                                                <option key={toolItem.id} value={toolItem.id}>{toolItem.itemName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control col-2 d-inline" onChange={this.Required}/>
                                        
                                        <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4 d-inline" onClick={this.addTools.bind(this)}>Add</button>
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-1 quote-req-header font-weight-bold">
                                <div className="col-sm">
                                    <label>Tool/Material Name</label>
                                </div>
                                <div className="col-sm">
                                    <label>Required</label>
                                </div>
                                <div className="col-sm">
                                    <label>Availability</label>
                                </div>
                            </div>
                            {this.state.item.OperationInventories && this.state.item.OperationInventories.map(listitem => (

                                <div className="row mt-1" key={listitem.Inventories.id}>
                                    <div className="col-sm" >
                                        <label className="description-truncate text-truncate">{listitem.Inventories.itemName}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.Inventories.required}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.Inventories.availability}</label>
                                    </div>
                                </div>
                            ))}

                        </div>







                        <div className="col">
                            

                            <div className="row">
                                    <div className="col">
                                    <select className="form-control" onChange={this.handleWorkerSelection.bind(this)}>
                                            <option selected>Select Worker</option>
                                            {this.state.workerList.map((item) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col"> 
                                        <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4 d-inline" onClick={this.addWorker.bind(this)}>Add</button>
                                    </div>
                                </div>




                            {this.state.item.OperationWorkers && 
                            <div className="row mt-1 quote-req-header font-weight-bold">
                                <div className="col-sm">
                                    <label>Worker Profession</label>
                                </div>
                                <div className="col-sm">
                                    <label>Required</label>
                                </div>
                                <div className="col-sm">
                                    <label>Available</label>
                                </div>
                                <div className="col-sm">
                                    <label>Hours</label>
                                </div>
                                <div className="col-sm">
                                    <label>Cost</label>
                                </div>
                            </div>
                        }

                            { this.state.item.OperationWorkers && this.state.item.OperationWorkers.map(listitem => (

                                <div className="row mt-1" >
                                    <div className="col-sm" >
                                        <label className="description-truncate text-truncate">{listitem.Workers && listitem.Workers.name}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label></label>
                                    </div>
                                </div>
    
                                ))}


                        </div>

                    </div>



                </div>


            </React.Fragment>
        );
    }
}
export default EditOperations;