import React, { Component } from 'react';
import {statusColorClass} from '../common/Utils.js';
import EditProject from './EditProject';

import AdminService from "../services/admin.service";

class ManageProjects extends Component {
    state = {
        searchValue: "",
        listitems: [],
        selectedItem: [],
        editProjectPage: false
    }
    constructor(props) {
        super(props);
        this.getAllProjectList();
    }
    getAllProjectList() {
        AdminService.getAllProjects().then(
            response => {
                if(response){
                    this.setState({
                        listitems: response.data.projects
                    });
                }
            },
            error => {
              console.log("Error");
            }
          );
    }
    handleSearchChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    editProjects() {
        this.setState({
            editProjectPage: true
        });
    }
    deleteProjects() {
        var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
    }
    addProjects() {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editProjectPage: true
        });
    }
    onProjectSelected(selectedItem) {
        this.setState({
            selectedItem: selectedItem
        });
    }
    parentCallback = () => {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editProjectPage:false
          });
    }
    renderProjectList() {
        return(
            <div className="col admin-list-page" id="projects-page">
                    <div className="list-group-header section-header row">

                        <div className="col-4">
                            <span className="mb-1 underline">Manage</span>
                            <span className="mb-1 blue-color pl-2">Projects</span>
                        </div>

                        <div className="col-8 text-right">
                            <div className="has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control search-box" placeholder="Search quote requests..." onChange={this.handleSearchChange.bind(this)} />
                            </div>
                            <button className="btn delete-btn" onClick={() => this.deleteProjects()}></button>
                            <button className="btn edit-btn" onClick={() => this.editProjects()}></button>
                            <button className="btn add-btn" onClick={() => this.addProjects()}></button>
                        </div>
                    </div>
                    <div className="quote-req-list">
                        <div className="row mt-1 quote-req-header">
                            <div className="col-sm">
                                <label>Project Name</label>
                            </div>
                            <div className="col-sm">
                                <label>Description</label>
                            </div>
                            <div className="col-sm">
                                <label>Hours Commited</label>
                            </div>
                            <div className="col-sm">
                                <label>Hours Left</label>
                            </div>

                            <div className="col-sm">
                                <label>Start Date</label>
                            </div>
                            <div className="col-sm">
                                <label>End Date</label>
                            </div>
                            
                            
                            <div className="col-sm">
                                <label>Status</label>
                            </div>
                        </div>
                        <div className="quote-req-table">

                            {this.state.listitems.filter(item =>
                                item.p_name.toLowerCase().includes(this.state.searchValue)).map(listitem => (

                                    <div className="row mt-1" key={listitem.id}>
                                        <div className="col-sm" >
                                            <label className="btn btn-default blue projectname-truncate text-truncate">
                                                <input type="radio" className="toggle"
                                                    name="projectItem" value={listitem.id}
                                                    onChange={() => this.onProjectSelected(listitem)} />
                                                {listitem.p_name}
                                            </label>
                                            
                                        </div>
                                        <div className="col-sm" >
                                            <label className="description-truncate text-truncate">{listitem.p_desc}</label>
                                        </div>
                                        <div className="col-sm" >
                                            <label>{listitem.hours_commited}</label>
                                        </div>
                                        <div className="col-sm" >
                                            <label>{listitem.hours_left}</label>
                                        </div>
                                        <div className="col-sm" >
                                            <label>{listitem.start_date}</label>
                                        </div>
                                        <div className="col-sm" >
                                            <label>{listitem.end_date}</label>
                                        </div>
                                        <div className="col-sm" >
                                            <label className = {"badge " + statusColorClass(listitem.p_status)} >{listitem.p_status}</label>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
        );
    }
    render() {
        return (
            <React.Fragment>
                {this.state.editProjectPage ? <EditProject selectedItem={this.state.selectedItem} parentCallback= {this.parentCallback}/> : this.renderProjectList()}
            </React.Fragment>
        );
    }
}
export default ManageProjects;