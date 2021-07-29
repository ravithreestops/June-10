import React, { Component } from 'react';
import ToolsJson from '../../data/inventoryData.json';
import WorkerJson from '../../data/workerData.json';


class EditOperations extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: this.props.selectedItem,
            toolsList: ToolsJson.inventoryList,
            selectedTools: [],
            selectedTool: {},
            Required: 0,

            workerList: WorkerJson.rows
        }
        this.Required = this.Required.bind(this);
    }
    
    Required(event) {
        this.setState({ Required: event.target.value })
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
    }
    handleInputChange(event) {
        this.setState({ selectedTool: this.state.toolsList[event.target.value] });
    }

    addTools(event) {
        this.state.selectedTool['required'] = this.state.Required;
        var newListTools = this.state.selectedTools;
        newListTools.push(this.state.selectedTool);
        this.setState({ selectedTools: newListTools });
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
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                                        <span className="mb-1 underline">Manage</span>
                                        <span className="mb-1 blue-color pl-2">Operation</span>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
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
                                    className="form-control" defaultValue={this.state.item.o_name}
                                    onChange={this.handleChange.bind(this, 'o_name')} />
                            </div>
                            <div>
                                <span>Description</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.o_desc}
                                    onChange={this.handleChange.bind(this, 'o_desc')}></textarea>
                            </div>

                            <div>
                            <div className="row">
                            <div className="col"><span>Tools and Materials</span></div>
                            <div className="col"><span>Required</span></div>
                            </div>
                                
                                <div className="row">
                                    <div className="col">
                                        <select className="form-control" name="city" onChange={this.handleInputChange.bind(this)}>
                                            <option selected>Select Tools</option>
                                            {this.state.toolsList.map((toolItem,index) => (
                                                <option key={toolItem.id} value={index}>{toolItem.item_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control col-2 d-inline" onChange={this.Required}/>
                                        
                                        <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4 d-inline" onClick={this.addTools.bind(this)}>Add</button>
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-1 quote-req-header">
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
                            {this.state.selectedTools && this.state.selectedTools.map(listitem => (

                                <div className="row mt-1" key={listitem.id}>
                                    <div className="col-sm" >
                                        <label className="description-truncate text-truncate">{listitem.item_name}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.required}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.availability}</label>
                                    </div>
                                </div>
                            ))}

                        </div>







                        <div className="col">
                            <div>
                                <span>Workers</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.worker}
                                    onChange={this.handleChange.bind(this, 'worker')} />
                            </div>


                            <div className="row mt-1 quote-req-header">
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

                            {this.state.workerList && this.state.workerList.map(listitem => (

                                <div className="row mt-1" key={listitem.id}>
                                    <div className="col-sm" >
                                        <label className="description-truncate text-truncate">{listitem.w_name}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.required}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.availability}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.availbilty_per_day}</label>
                                    </div>
                                    <div className="col-sm" >
                                        <label>{listitem.cost_per_day}</label>
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