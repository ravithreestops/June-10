import React, { Component } from 'react';
import inventoryJson from '../../data/inventoryData.json';

import EditInventory from './EditInventory';

class ManageInventory extends Component {
    state = {
        searchValue: "",
        listitems: inventoryJson.inventoryList,
        selectedItem: [],
        editInventoryPage: false
    }
    handleSearchChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    editInventory() {
        this.setState({
            editInventoryPage: true
        });
    }
    addInventory() {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editInventoryPage: true
        });
    }
    deleteInventory() {
        var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
    }
    onInventorySelected(selectedItem) {
        this.setState({
            selectedItem: selectedItem
        });
    }
    parentCallback = () => {
        this.setState({
            editInventoryPage:false
          });
    }
    renderInventoryList() {
        return (<div className="col admin-list-page">
            <div className="list-group-header section-header row">
                <div className="col-4">
                    <span className="mb-1 underline">Manage</span>
                    <span className="mb-1 blue-color pl-2">Inventory</span>
                </div>
                <div className="col-8 text-right">
                    <div className="has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control search-box" placeholder="Search quote requests..." onChange={this.handleSearchChange.bind(this)} />
                    </div>
                    <button className="btn delete-btn" onClick={() => this.deleteInventory()}></button>
                    <button className="btn edit-btn" onClick={() => this.editInventory()}></button>
                    <button className="btn add-btn" onClick={() => this.addInventory()}></button>
                </div>
            </div>
            <div className="quote-req-list">
                <div className="row mt-1 quote-req-header">
                    <div className="col-sm">
                        <label>Item Name</label>
                    </div>
                    <div className="col-sm">
                        <label>Description</label>
                    </div>
                    <div className="col-sm">
                        <label>Availability</label>
                    </div>
                    <div className="col-sm">
                        <label>Operations Taged</label>
                    </div>
                    <div className="col-sm">
                        <label>Cost</label>
                    </div>
                    <div className="col-sm">
                        <label>Created On</label>
                    </div>
                    <div className="col-sm">
                        <label>Modified On</label>
                    </div>
                </div>
                <div className="quote-req-table">
                {this.state.listitems.filter(item =>
                        item.item_name.toLowerCase().includes(this.state.searchValue)).map(listitem => (
                    

                        <div className="row mt-1" key={listitem.id}>
                            
                            
                            <div className="col-sm" >
                                <label className="btn btn-default blue projectname-truncate text-truncate">
                                    <input type="radio" className="toggle"
                                        name="quoteItem" value={listitem.id}
                                        onChange={() => this.onInventorySelected(listitem)} />
                                    {listitem.item_name}
                                </label>
                                            
                            </div>



                            <div className="col-sm" >
                                <label className="description-truncate text-truncate">{listitem.item_desc}</label>
                            </div>
                            <div className="col-sm" >
                                <label>{listitem.availability}</label>
                            </div>
                            <div className="operation-div col-sm" >

                           
        <label className="operation-text-truncate">{listitem.operations_tagged}</label>
        <span className="badge badge-light float-right">{listitem.operations_tagged && listitem.operations_tagged.length}</span>
        
      

                                
                            
                                </div>
                            <div className="col-sm" >
                                <label>{listitem.cost}</label>
                            </div>
                            <div className="col-sm" >
                                <label>{listitem.createdAt}</label>
                            </div>
                            <div className="col-sm" >
                                <label>{listitem.updatedAt}</label>
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
                {this.state.editInventoryPage ? <EditInventory selectedItem={this.state.selectedItem} parentCallback= {this.parentCallback}/> : this.renderInventoryList()}
            </React.Fragment>
        );
    }
}
export default ManageInventory;