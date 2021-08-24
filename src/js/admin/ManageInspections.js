import React, { Component } from 'react';
import Popup from "../components/Popup";
import { validationMessages } from '../common/Constants';
import InspectionJson from '../../data/inspectionData.json';


class ManageInspection extends Component {
    state = {
        listitems: InspectionJson.inspectionsList,
        selectedItem: [],
        editInspectionPage: false,
        popupConfig: {},
        isPopupOpen: false
    }

    editInspection() {
       
        if (this.state.selectedItem && this.state.selectedItem.length === 0) {
            this.setState({
                isPopupOpen: true,
                popupConfig : {
                    header: "Message",
                    body:validationMessages.NO_ITEM,
                    type: "message"
                }
            });
        } else {
            this.setState({
                editInspectionPage: true
            });
        }
    }
    addInspection() {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editInspectionPage: true
        });
    }

    handleClose = () => {
        this.setState({
            isPopupOpen: false
        });
    }

    handleModalYes = () => {
        this.setState({
            isPopupOpen: false
        });
        /*AdminService.deleteInspection(this.state.selectedItem.id).then(
            response => {
                var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
                this.setState({
                    listitems: tempList,
                    selectedItem: []
                });
            },
            error => {
              console.log("Error");
            }
          ); */  
    }

    deleteInspection() {
        /*var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
        */
        if (this.state.selectedItem && this.state.selectedItem.length === 0) {
            this.setState({
                isPopupOpen: true,
                popupConfig : {
                    header: "Message",
                    body:validationMessages.NO_ITEM,
                    type: "message"
                }
            });
        } else {
            this.setState({
                isPopupOpen: true,
                popupConfig : {
                    header: "Confirm to Delete",
                    body:validationMessages.DELETE_CONFIRM+this.state.selectedItem.item_name,
                    type: "confirmation"
                }
            });
        }

    }
    onInspectionSelected(selectedItem) {
        this.setState({
            selectedItem: selectedItem
        });
    }
    parentCallback = () => {
        this.setState({
            editInspectionPage: false
        });
    }
    handleFormChange(propertyName, event) {
       
    }
    saveTaxUpdate() {

    }
    handleBreadCrumb() {
        this.setState({
            editInspectionPage: false
        });
    }
    handleChange(propertyName, event) {
        var item = this.state.selectedItem;
        item[propertyName] = event.target.value;
        this.setState({ selectedItem: item });
    }
   
    saveInspection() {
        if(this.state.selectedItem.id !== undefined) {
            alert("editted Successfuly");
        } else {
            alert("Added new");
        }
        
    }
  
    renderEditInspection() {
        return(<div className="col edit-customer">
        <div className="list-group-header section-header row">
            <div className="col-6">

                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                            <span className="mb-1 underline">Manage</span>
                            <span className="mb-1 blue-color pl-2">Inspection</span>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <span className="mb-1">{(this.state.selectedItem.length !== 0) ? 'Edit' : 'Add'}</span>
                            <span className="mb-1 blue-color pl-2">Customer</span>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="col-6 text-right">
                <button type="button" className="btn btn-blue btn-sm pr-4 pl-4"  >Reset</button>
                <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick={() => this.saveInspection()}>Save</button>
            </div>
        </div>

        <div className="blue-box-div row">
            <div className="col">
                <div>
                    <span>Inspection Name</span>
                    <input type="text"
                        className="form-control" defaultValue={this.state.selectedItem.item_name}
                        onChange={this.handleChange.bind(this, 'item_name')} />
                </div>
                
                <div>
                    <span>Description</span>
                    <textarea className="form-control" rows="3" 
                                    defaultValue={this.state.selectedItem.desc}
                                    onChange={this.handleChange.bind(this, 'desc')}
                        ></textarea>
                
                </div>
                <div>
                    <span>Cost</span>
                    <input type="text"
                        className="form-control"  defaultValue={this.state.selectedItem.inspection_cost}
                        onChange={this.handleChange.bind(this, 'inspection_cost')}/>
                </div>
                
                
            </div>
           

        </div>



    </div>);
    }
    renderTax() {
        return(
            <div className="col admin-list-page">
                <div className="list-group-header section-header row">
                <div className="col-3">
                    <span className="mb-1 underline">Manage</span>
                    <span className="mb-1 blue-color pl-2">Tax</span> 
                </div>
            </div>
            <div className="col-6 blue-box-div tax-div d-inline-block">
                            <label className="pr-2">Tax</label>
                            <input type="number" className="form-control d-inline-block"
                                        
                                        onChange={this.handleFormChange.bind(this, 'tax')}
                                    />
                            <label className="pl-2">%</label>


              <button type="button" className="btn btn-info btn-sm float-right mr-4" onClick={() => this.saveTaxUpdate()}>Update</button>

            </div>
            </div>
        );
    }
    renderInspectionList() {
        return (<div className="col admin-list-page">
            <div className="list-group-header section-header row">
                <div className="col-6">
                    <span className="mb-1 underline">Manage</span>
                    <span className="mb-1 blue-color pl-2">Inspection</span>

                    
                </div>
                <div className="col-6 text-right inspection-btngrp pt-2">
                    <button className="btn delete-btn" onClick={() => this.deleteInspection()}></button>
                    <button className="btn edit-btn" onClick={() => this.editInspection()}></button>
                    <button className="btn add-btn" onClick={() => this.addInspection()}></button>
                    
                </div>


            </div>
            <div className="quote-req-list ">
                <div className="row mt-1 quote-req-header">
                    <div className="col-sm">
                        <label>Inspection Name</label>
                    </div>
                    <div className="col-sm">
                        <label>Inspection Desc</label>
                    </div>
                    <div className="col-sm">
                        <label>Inspection Cost</label>
                    </div>
                </div>
                <div className="quote-req-table">
                    {this.state.listitems.map(listitem => (
                            <div className="row mt-1" key={listitem.id}>
                                <div className="col-sm" >
                                    <label className="btn btn-default blue projectname-truncate text-truncate">
                                        <input type="radio" className="toggle"
                                            name="quoteItem" value={listitem.id}
                                            onChange={() => this.onInspectionSelected(listitem)} />
                                        {listitem.item_name}
                                    </label>

                                </div>
                                <div className="col-sm" >
                                    <label className="">{listitem.desc}</label>
                                </div>
                                <div className="col-sm" >
                                    <label className="">{listitem.inspection_cost}</label>
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
                {!this.state.editInspectionPage && this.renderInspectionList()}
                {this.state.editInspectionPage && this.renderEditInspection()}
                {this.renderTax()}
                <Popup popupConfig = {this.state.popupConfig} openFlag = {this.state.isPopupOpen} parentCloseCallback={this.handleClose.bind(this)} parentConfirmCallback = {this.handleModalYes.bind(this)}></Popup>
            </React.Fragment>
        );
    }
}
export default ManageInspection;