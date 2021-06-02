import React, { Component } from 'react';
import { Button, CardBody, CardGroup, Col, Container, Form, Table, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Accordion, Card } from "react-bootstrap";
import { statusColorClass } from '../common/Utils.js';

class QuoteReqUpdate extends Component {
  state = {
    selectedItem: this.props.selectedQuote,
    open: false,
    operationsList: [
      {
        "id": 0,
        "operationName": "Op1",
        "hours": 230,
        "workers": 3,
        "inspection": "Standard",
        "cost": 200,
        "tools": [
          {
            "id": "tool1",
            "item_name": "Tool1",
            "unit": "cm",
            "availability": 2,
            "cost": 10
          },
          {
            "id": "tool2",
            "item_name": "Tool2",
            "unit": "inch",
            "availability": 20,
            "cost": 50
          }
        ]
      },
      {
        "id": 1,
        "operationName": "Op2",
        "hours": 20,
        "workers": 10,
        "inspection": "Standard",
        "cost": 230,
        "tools": [
          {
            "id": "tool1",
            "item_name": "Tool1",
            "unit": "cm",
            "availability": 2,
            "cost": 10
          },
          {
            "id": "tool2",
            "item_name": "Tool2",
            "unit": "inch",
            "availability": 20,
            "cost": 50
          }
        ]
      }
    ]

  }
  setCollapse(tmp) {
    this.setState({
      open: tmp
    });
  }
  resetReq() {

  }
  saveQuoteUpdate() {

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
    debugger;
    console.log(e);
  }
  handleReqAvailChange = event => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    alert(value);
    this.setState({ value });
  }
  render() {
    return (
      <React.Fragment>

        <div className="col admin-quote-page">
          <div className="list-group-header section-header row">
            <div className="col-4">

              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                    <span className="mb-1 underline">Quote</span>
                    <span className="mb-1 blue-color pl-2">Requests</span>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
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
                  <p className="green-text-color">{this.state.selectedItem.submittedBy}</p>
                </div>

                <div className="quote-data-div">
                  <span className="underline half blue">Submitted On</span>
                  <p className="green-text-color">{this.state.selectedItem.createdAt}</p>
                </div>
                <div className="quote-data-div">
                  <span className="underline half blue">Attachments</span>
                  <p className="green-text-color">{this.state.selectedItem.attachments.length}</p>
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
                   
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={i+""}>

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
                              <label>{operation.tools.length}</label>
                              <button onClick={this.deleteOperation.bind(this)} className="btn delete-btn float-right mr-5" ></button>
                            </div>
                          </div>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i+""}>
                          <Card.Body>
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

                                  {operation.tools.map((tool, i) => {
                                    return (
                                      <tr>
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
                                          max={tool.availability+""}
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