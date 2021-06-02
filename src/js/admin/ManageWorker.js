import React, { Component } from 'react';
import WorkerJson from '../../data/workerData.json';

import EditWorker from './EditWorker';

class ManageWorker extends Component {
    state = {
        searchValue: "",
        listitems: WorkerJson.rows,
        selectedItem: [],
        editWorkerPage: false
    }
    handleSearchChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    editWorker() {
        this.setState({
            editWorkerPage: true
        });
    }
    addWorker() {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editWorkerPage: true
        });
    }
    deleteWorker() {
        var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
    }
    onWorkerSelected(selectedItem) {
        this.setState({
            selectedItem: selectedItem
        });
    }
    parentCallback = () => {
        this.setState({
            editWorkerPage: false
        });
    }
    renderWorkerList() {
        return (<div className="col admin-list-page">
            <div className="list-group-header section-header row">
                <div className="col-4">
                    <span className="mb-1 underline">Manage</span>
                    <span className="mb-1 blue-color pl-2">Worker</span>
                </div>
                <div className="col-8 text-right">
                    <div className="has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control search-box" placeholder="Search worker..." onChange={this.handleSearchChange.bind(this)} />
                    </div>
                    <button className="btn delete-btn" onClick={() => this.deleteWorker()}></button>
                    <button className="btn edit-btn" onClick={() => this.editWorker()}></button>
                    <button className="btn add-btn" onClick={() => this.addWorker()}></button>
                </div>
            </div>
            <div className="quote-req-list">
                <div className="row mt-1 quote-req-header">
                    <div className="col-sm">
                        <label>Worker Name</label>
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
                        <label>Status</label>
                    </div>
                    <div className="col-sm">
                        <label>Operations</label>
                    </div>
                    <div className="col-sm">
                        <label>Created On</label>
                    </div>
                </div>
                <div className="quote-req-table">
                    {this.state.listitems.filter(item =>
                        item.w_name.toLowerCase().includes(this.state.searchValue)).map(listitem => (


                            <div className="row mt-1" key={listitem.id}>


                                <div className="col-sm" >
                                    <label className="btn btn-default blue projectname-truncate text-truncate">
                                        <input type="radio" className="toggle"
                                            name="quoteItem" value={listitem.id}
                                            onChange={() => this.onWorkerSelected(listitem)} />
                                        {listitem.w_name}
                                    </label>

                                </div>

                                <div className="col-sm" >
                                    <label className="description-truncate text-truncate">{listitem.w_phone}</label>
                                </div>

                                <div className="col-sm" >
                                    <label>{listitem.w_address}</label>
                                </div>

                                <div className="col-sm" >
                                    <label>{listitem.w_email}</label>
                                </div>

                                <div className="col-sm" >
                                    <label>{listitem.w_status}</label>
                                </div>

                                <div className="operation-div col-sm" >

                                    <label className="operation-text-truncate">{listitem.w_operations}</label>
                                    <span className="badge badge-light float-right">{listitem.w_operations && listitem.w_operations.length}</span>

                                </div>

                                <div className="col-sm" >
                                    <label>{listitem.createdAt}</label>
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
                {this.state.editWorkerPage ? <EditWorker selectedItem={this.state.selectedItem} parentCallback={this.parentCallback} /> : this.renderWorkerList()}
            </React.Fragment>
        );
    }
}
export default ManageWorker;