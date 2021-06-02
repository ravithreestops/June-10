import React, { Component } from 'react';

class EditWorker extends Component {
    state = {
        item: this.props.selectedItem,
        editWorkerPage: this.props.editWorkerPage
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
    }
    saveWorker() {
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

                <div className="col edit-worker">
                    <div className="list-group-header section-header row">
                        <div className="col-4">

                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                                        <span className="mb-1 underline">Manage</span>
                                        <span className="mb-1 blue-color pl-2">Worker</span>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        <span className="mb-1">{(this.state.item.length !== 0) ? 'Edit' : 'Add'}</span>
                                        <span className="mb-1 blue-color pl-2">Worker</span>
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
                        <div className="col white-border-right">
                            <div>
                                <span>Worker Name</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_name}
                                    onChange={this.handleChange.bind(this, 'w_name')} />
                            </div>
                            <div>
                                <span>Phone</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_phone}
                                    onChange={this.handleChange.bind(this, 'w_phone')} />
                            </div>
                            <div>
                                <span>Address</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.w_address}
                                    onChange={this.handleChange.bind(this, 'w_address')}></textarea>
                            
                            </div>
                            <div>
                                <span>Email</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_email}
                                    onChange={this.handleChange.bind(this, 'w_email')} />
                            </div>
                            <div>
                                <span>Status</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.w_status}
                                    onChange={this.handleChange.bind(this, 'w_status')} />
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
export default EditWorker;