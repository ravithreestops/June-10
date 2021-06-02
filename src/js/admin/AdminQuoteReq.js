import React, { Component } from 'react';
import QuoteReqUpdate from './QuoteReqUpdate';
import jsonData from '../../data/data.json';
import {validationMessages} from '../common/Constants';
import {statusColorClass} from '../common/Utils.js';

class AdminQuoteReq extends Component {

    state = {
        searchValue: "",
        selectedItem: [],
        listitems: jsonData.quotes,
        updateQuotePage: false
    }
    handleSearchChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }
    onQuotereqSelected (selectedItem) {
        this.setState({
            selectedItem: selectedItem
            });
    }
    deleteOperations() {
        var tempList = this.state.listitems.filter(item => item.id !== this.state.selectedItem.id);
        this.setState({
            listitems: tempList
        });
        this.setState({
            selectedItem: []
        });
    }

    editQuote() {
        if(this.state.selectedItem && this.state.selectedItem.length === 0) {
            alert(validationMessages.NO_Item);
        } else {
            this.setState({
                updateQuotePage: true
            });
        }
    }
    parentCallback = () => {
        this.setState({
            selectedItem: []
        });
        this.setState({
            updateQuotePage:false
          });
    }

    renderQuoteList () {
        return(<div className="col admin-list-page">
        <div className="list-group-header section-header row">
            <div className="col-4">
                <span className="mb-1 underline">Quote</span>
                <span className="mb-1 blue-color pl-2">Requests</span>
            </div>
            <div className="col-8 text-right">
                <div className="has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control search-box" placeholder="Search quote requests..." onChange={this.handleSearchChange.bind(this)}/>
                </div>
                <button className="btn delete-btn" onClick={() => this.deleteOperations()}></button>
                <button className="btn edit-btn" onClick= {() => this.editQuote()}></button>
            </div>
        </div>
        <div className="quote-req-list">
            <div className="row mt-1 quote-req-header">
                <div className="col-4">
                    <label>Title</label>
                </div>
                <div className="col-sm">
                    <label>Submitted by</label>
                </div>
                <div className="col-sm">
                    <label>Received On</label>
                </div>
                <div className="col-sm">
                    <label>Modified On</label>
                </div>
                <div className="col-sm">
                    <label>Status</label>
                </div>
                <div className="col-sm text-right">
                    <label>Attachments</label>
                </div>
            </div>
            <div className="quote-req-table">
            {this.state.listitems.filter(item =>
                                item.title.toLowerCase().includes(this.state.searchValue)).map(item => (
                <div className="row mt-1" key={item.id}>

                    <div className="col-4" >
                       

                        <label className="btn btn-default blue projectname-truncate text-truncate">
                                                <input type="radio" className="toggle"
                                                    name="quoteItem" value={item.id}
                                                    onChange={() => this.onQuotereqSelected(item)} />
                                                {item.title}
                                            </label>


                    </div>

                    <div className="col-sm">
                        <label>{item.createdAt}</label>
                    </div>
                    <div className="col-sm">
                        <label>{item.createdOn}</label>
                        
                    </div>
                    <div className="col-sm">
                        <label>{item.updatedAt}</label>
                    </div>
                    <div className="col-sm">
                        <span className = {"badge " + statusColorClass(item.status)} >{item.status}</span>
                    </div>
                    <div className="col-sm text-right">
                        <span className="badge attachment-badge">{item.attachments.length}</span>
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
                {this.state.updateQuotePage ? <QuoteReqUpdate selectedQuote= {this.state.selectedItem} parentCallback= {this.parentCallback}/> : this.renderQuoteList() }
            </React.Fragment>
        );
    }
}
export default AdminQuoteReq;