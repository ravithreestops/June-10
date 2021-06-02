import React, { Component } from 'react';
import InspectionJson from '../../data/inspectionData.json';


class ManageInspection extends Component {
    state = {
        searchValue: "",
        listitems: InspectionJson.inspectionsList,
        selectedItem: [],
        editInspectionPage: false
    }
    handleSearchChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    editInspection() {
        this.setState({
            editInspectionPage: true
        });
    }
    addInspection() {
        this.setState({
            selectedItem: []
        });
        this.setState({
            editInspectionPage: true
        });
    }
    deleteInspection() {
        var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
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
    renderInspectionList() {
        return (<div className="col admin-list-page">
            <div className="list-group-header section-header row">
                <div className="col-4">
                    <span className="mb-1 underline">Manage</span>
                    <span className="mb-1 blue-color pl-2">Inspection</span>
                </div>
                <div className="col-8 text-right">
                    <div className="has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control search-box" placeholder="Search Inspection..." onChange={this.handleSearchChange.bind(this)} />
                    </div>
                    <button className="btn delete-btn" onClick={() => this.deleteInspection()}></button>
                    <button className="btn edit-btn" onClick={() => this.editInspection()}></button>
                    <button className="btn add-btn" onClick={() => this.addInspection()}></button>
                </div>
            </div>
            <div className="quote-req-list">
                <div className="row mt-1 quote-req-header">
                    <div className="col-sm">
                        <label>Inspection Name</label>
                    </div>
                    <div className="col-sm">
                        <label>fgfdgfg</label>
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
                                            onChange={() => this.onInspectionSelected(listitem)} />
                                        {listitem.item_name}
                                    </label>

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
                {this.renderInspectionList()}
            </React.Fragment>
        );
    }
}
export default ManageInspection;