import React, { Component } from 'react';

class EditOperations extends Component {
    state = {
        item: this.props.selectedItem
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
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
                                <span>Project Name</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.projectName}
                                    onChange={this.handleChange.bind(this, 'projectName')} />
                            </div>
                            <div>
                                <span>Description</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.description}
                                    onChange={this.handleChange.bind(this, 'description')}></textarea>
                            </div>
                            
                        </div>
                       
                       <div className="col">
                       <div>
                                <span>Workers</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.worker}
                                    onChange={this.handleChange.bind(this, 'worker')} /></div>
                       </div>

                    </div>



                </div>


            </React.Fragment>
        );
    }
}
export default EditOperations;