import React, { useState,Component } from "react";

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowIndex : 0,
            inputList: [{
                "name": "Item Name",
                "type": "text",
                "value": ""
            }, {
                "name": "Unit",
                "type": "text",
                "value": ""
            },
            {
                "name": "Quantity ",
                "type": "text",
                "value": ""
            }
            ],
    
            newInputList : [{
                "name": "Item Name",
                "type": "text",
                "value": ""
            }, {
                "name": "Unit",
                "type": "text",
                "value": ""
            },
            {
                "name": "Quantity ",
                "type": "text",
                "value": ""
            }
            ],

            formInputList: [{
                "data0": [{
                    "name": "Item Name",
                    "type": "text",
                    "value": ""
                }, {
                    "name": "Unit",
                    "type": "text",
                    "value": ""
                },
                {
                    "name": "Quantity ",
                    "type": "text",
                    "value": ""
                }
                ]
            }],
            setFormInputList: [{
                "data0": [{
                    "name": "Item Name",
                    "type": "text",
                    "value": ""
                }, {
                    "name": "Unit",
                    "type": "text",
                    "value": ""
                },
                {
                    "name": "Quantity ",
                    "type": "text",
                    "value": ""
                }
                ]
            }]
            
        }
    }
    
    cancelQuote() {

    }
    sendQuoteReq() {
        
    }
    handleAddClick() {
        var index = this.state.rowIndex + 1;
        this.setState({
            rowIndex : index
        });

        var rowKey = "data" + this.state.rowIndex;
        
        var newFormInputList = {
            [rowKey]: this.state.newInputList
        }
        var oldList = [...this.state.formInputList];
        oldList.push(newFormInputList);
        this.setState({
            formInputList : oldList
        });
        
    }
    renderFormRowHeader() {
        if(this.state.formInputList[0]) {
            var headerObj = this.state.formInputList[0][Object.keys(this.state.formInputList[0])];
            return (
                <div className="row mt-1">
                    {headerObj.map((item) => {
                        return (
                            <div className="col-sm">
                                <label>{item.name}</label>
                            </div>
                        )

                    })}
                <div className="col-sm">
                    <label></label>
                </div>
                </div>
            )
        }

    }
    // handle input change
    handleInputChange = (e, index, j) => {
        var list = [...this.state.formInputList];
        list.map((item) => {

            if (item[index]) {
                item[index][j].value = e.target.value;
                //this.state.setFormInputList(list);
                this.setState({
                    formInputList:list
                  });
            }
        })
    }

    // handle click event of the Remove button
    handleRemoveClick = index => {
        var removeIndex;
        var removeList = [...this.state.formInputList];
        removeList.map((item, k) => {

            if (item[index]) {
                removeIndex = k;
            }
        })
        var list = [...this.state.formInputList];
        list.splice(removeIndex, 1);
        this.setState({
            formInputList: list
          });
    }

    renderFormRow(x) {
        debugger;
        return Object.keys(x).filter((obj) => Object.keys(x).indexOf(obj) == 0).map(obj => {
            return (

                <div className="row mt-1" id={obj} key={obj}>

                    {x[obj].map((dataItem, j) => {
                        return (
                            <div className="col-sm">
                                <input
                                    class="form-control"
                                    name={dataItem.name}
                                    value={dataItem.value}
                                    id={dataItem.name + obj}
                                    onChange={e => this.handleInputChange(e, obj, j)}
                                />
                            </div>

                        )
                    }
                    )}

                    <div className="col-sm">
                        <div className="btn-box">
                            <button
                                class="btn btn-primary btn-sm pr-4 pl-4"
                                onClick={() => this.handleRemoveClick(obj)}>Remove</button>

                        </div>
                    </div>

                </div>

            )
        })

    }
    render() {
        return (
            <div className="app flex-row align-items-center">
                <div className="list-group-header section-header row">
                    <div className="col">
                        <span className="mb-1 underline">Send New </span>
                        <span className="mb-1 blue-color pl-2">Quote Request</span>
                    </div>
                    <div className="col text-right">
                        <button type="button" class="btn btn-primary btn-sm pr-4 pl-4" onClick={() => this.cancelQuote()} >Reset</button>
                        <button type="button" class="btn btn-secondary btn-sm ml-2 pr-4 pl-4" onClick= {() => this.sendQuoteReq()}>Send</button>
                    </div>
                </div>

                <div className="quote-req" id="create-quote-form">

                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" />
                    </div>

                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                        <label>Measurements</label>
                        <button class="btn btn-primary btn-sm pr-2 pl-2 ml-3" onClick={() => this.handleAddClick()} >Add</button>
                        {this.renderFormRowHeader()}
                        
                        {this.state.formInputList.map((x, i) => {
                            return (this.renderFormRow(x, i));
                        })}



                    </div>

                    <div>
                        <label>Attachments</label>
                        <button type="button" class="btn btn-primary btn-sm pr-2 pl-2 ml-3">Browse</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Quote;