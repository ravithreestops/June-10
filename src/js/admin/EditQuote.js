import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { Accordion, Card } from "react-bootstrap";

import { statusColorClass } from '../common/Utils.js';
import Popup from "../components/Popup";

import AdminService from "../services/admin.service";

import operationJson from '../../data/quoteItem.json';

class QuoteReqUpdate extends Component {
  state = {
    selectedItem: {},
    open: false,
    operationsList: operationJson.operationsList,
    popupConfig: {},
    isPopupOpen: false,
    selectedOperationId: 0
  }
  constructor(props) {
    super(props);
    this.getSingleQuote();
  }
  getSingleQuote = () => {
    AdminService.getSingleQuote(this.props.selectedQuoteId).then(
      response => {
        if (response) {
          this.setState({
            selectedItem: response.data
          });
        }
      },
      error => {
        console.log("Error");
      }
    );
  };
  resetReq() {

  }
  showAvailableTools(id) {
    this.setState({
      selectedOperationId: id,
      isPopupOpen: true,
      popupConfig: {
        header: "Available Tools",
        body: '',
        type: "toolsList"
      }
    });
  }


  saveQuoteUpdate() {

    // need to change based on measurements
    var data = {
      "title": "Custom Tools Edit test",
      "desc": "is simply dummy text of the printing and typesetti",
      "measures": [{ "name": "subin", "unit": "1", "qty": "12" }],
      "uploads": [{
        "fileName": "haaaajkdfjkldsajfdsfdslk",
        "filePath": "1234567890qsfdsfdfghdwertg"
      }]
    };
    AdminService.editQuote(this.props.selectedQuoteId, data).then(
      response => {
        console.log(response);
      },
      error => {
        console.log("Error");
      }
    );

  }
  handleBreadCrumb() {
    this.props.parentCallback();
  }
  deleteOperation() {
    alert("Do you want to delete this");
  }
  removeTool() {
    alert("Do you want to remove tool");
  }
  handleChange = e => {
    console.log(e);
  }
  handleReqAvailChange = event => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    alert(value);
    this.setState({ value });
  }
  handleClose = (list) => {
    if(list) {
      var newToolsList = [...this.state.operationsList[0].tools, ...list];
      this.setState(prevState => ({
        operationsList: prevState.operationsList.map(
          obj => (obj.id === this.state.selectedOperationId ? Object.assign(obj, { tools: newToolsList }) : obj)
        )
      }));
    }
    
    this.setState({
      isPopupOpen: false
    });
  };

  handleModalYes = () => {
    this.setState({
      isPopupOpen: false
    });
    AdminService.deleteQuote(this.state.selectedItem.id).then(
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
    );


  };
  render() {

    var userData = {};
    var uploads = [];
    if (this.state.selectedItem) {
      userData = this.state.selectedItem.User;
      uploads = this.state.selectedItem.Uploads;
    }

    return (
      <React.Fragment>
        <Popup popupConfig={this.state.popupConfig} openFlag={this.state.isPopupOpen} parentCloseCallback={this.handleClose} parentConfirmCallback={this.handleModalYes.bind(this)}></Popup>


        <div className="col admin-quote-page">
          <div className="list-group-header section-header row">
            <div className="col-4">

              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li key="breadcrumb1" className="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                    <span className="mb-1 underline">Quote</span>
                    <span className="mb-1 blue-color pl-2">Requests</span>
                  </li>
                  <li key="breadcrumb2" className="breadcrumb-item active" aria-current="page">
                    <span className="mb-1">Update</span>
                    <span className="mb-1 blue-color pl-2">Quote</span>
                  </li>
                </ul>
              </nav>

            </div>
            <div className="col-8 text-right">
              <button type="button" className="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.resetReq()} >Reset</button>
              <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick={() => this.saveQuoteUpdate()}>Save</button>
            </div>
          </div>

          <div>
            <div className="blue-box-div row">
              <div className="col-3 white-border-right">
                <div className="quote-data-div">
                  <span className="underline half blue">Title</span>
                  <span className={"badge p-2 ml-2 float-right " + statusColorClass(this.state.selectedItem.status)}>{this.state.selectedItem.status}</span>
                  <p className="green-text-color">{this.state.selectedItem.title}</p>
                </div>

                <div className="quote-data-div">
                  <span className="underline half blue">Description</span>
                  <p className="green-text-color">{this.state.selectedItem.desc}</p>
                </div>

                <div className="quote-data-div">
                  <span className="underline half blue">Submitted By</span>
                  <p className="green-text-color">{userData && userData.name}</p>
                </div>

                <div className="quote-data-div">
                  <span className="underline half blue">Submitted On</span>
                  <p className="green-text-color">{(new Date(this.state.selectedItem.createdAt)).toLocaleDateString()}</p>
                </div>
                <div className="quote-data-div">
                  <span className="underline half blue">Attachments</span>
                  <p className="green-text-color">{uploads && uploads.length}</p>

                </div>
              </div>
              <div className="col quote-measurements">
                <div className="row">
                  <div className="col">
                    <span className="underline blue">Make a Quote</span>
                  </div>
                  <div className="col text-right">
                    <span className="blue">Total Cost</span>
                    <span className="badge btn-blue p-2 ml-2">54354.00</span>
                  </div>
                </div>

                <div className="card-header measurements-header row mt-1 font-weight-bold">
                  <div className="col-sm">
                    <label>Operation</label>
                  </div>
                  <div className="col-sm">
                    <label>Hours</label>
                  </div>
                  <div className="col-sm">
                    <label>Workers</label>
                  </div>
                  <div className="col-sm">
                    <label>Inspection</label>
                  </div>
                  <div className="col-sm">
                    <label>Cost</label>
                  </div>
                  <div className="col-sm">
                    <label>Tools</label>
                  </div>

                </div>

                <Accordion>

                  {this.state.operationsList && this.state.operationsList.map((operation, i) => {
                    return (

                      <Card key={i+"cardKey"}>
                        <Accordion.Toggle as={Card.Header} eventKey={i + ""}>

                          <div className="row mt-1 green-text-color">
                            <div className="col-sm">
                              <label>{operation.operationName}</label>
                            </div>
                            <div className="col-sm">
                              <label>{operation.hours}</label>
                            </div>
                            <div className="col-sm">
                              <label>{operation.workers}</label>
                            </div>
                            <div className="col-sm">
                              <label>{operation.inspection}</label>
                            </div>
                            <div className="col-sm">
                              <label>{operation.cost}</label>
                            </div>
                            <div className="col-sm">
                              <label>{operation.tools && operation.tools.length}</label>
                              <button onClick={this.deleteOperation.bind(this)} className="btn delete-btn float-right mr-5" ></button>
                            </div>
                          </div>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i + ""}>
                          <Card.Body>
                            <Button color="success" size="sm" onClick={() => this.showAvailableTools(operation.id)}>Add tools</Button>
                            {operation.tools &&

                              <Table responsive="sm">
                                <tbody>
                                  <tr className="green-text-color2">
                                    <th>
                                      <input type="checkbox" value="" name="selectAllTools" onChange={this.handleChange} />
                                    </th>
                                    <th>Tool Name</th>
                                    <th>Unit</th>
                                    <th>Available Quantity</th>
                                    <th>Required Quantity</th>
                                    <th>Cost</th>
                                    <th><button className="btn delete-btn" onClick={this.removeTool.bind(this)}></button></th>
                                  </tr>

                                  {operation.tools && operation.tools.map((tool, i) => {
                                    return (
                                      <tr key={tool.id+"row"}>
                                        <td>
                                          <input type="checkbox" value="" />
                                        </td>
                                        <td>{tool.item_name}</td>
                                        <td>{tool.unit}</td>
                                        <td>{tool.availability}</td>
                                        <td>
                                          <input
                                            onChange={this.handleReqAvailChange}
                                            defaultValue={tool.availability}
                                            type="number"
                                            min="1"
                                            max={tool.availability + ""}
                                          />
                                        </td>
                                        <td>{tool.cost}</td>
                                        <td></td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            }
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                    );
                  })}
                </Accordion>

              </div>

            </div>

          </div>

        </div>

      </React.Fragment>
    );
  }
}
export default QuoteReqUpdate;