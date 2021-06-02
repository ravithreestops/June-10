import React, { useState } from "react";

var rowIndex = 0;
function Quote() {
    const inputList = [{
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
    ];
    const newInputList = [{
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
    ];
    const [formInputList, setFormInputList] = useState([{
        "data0": inputList
    }]);

    // handle input change
    const handleInputChange = (e, index, j) => {
        const list = [...formInputList];
        list.map((item) => {

            if (item[index]) {
                item[index][j].value = e.target.value;
                setFormInputList(list);                
            }
        })
    };

    const handleFormChange = (event) => {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        debugger;
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        var removeIndex;
        const removeList = [...formInputList];
        removeList.map((item, k) => {

            if (item[index]) {
                removeIndex = k;
            }
        })
        const list = [...formInputList];
        list.splice(removeIndex, 1);
        setFormInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        rowIndex = rowIndex + 1;
        const rowKey = "data" + rowIndex;
        
        const newFormInputList = {
            [rowKey]: newInputList
        }
        setFormInputList([...formInputList, newFormInputList]);
    };

    const renderFormRowHeader = () => {
        if(formInputList[0]) {
            const headerObj = formInputList[0][Object.keys(formInputList[0])];
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
        
    };
    const cancelQuote = () => { 
        
      };
      const sendQuoteReq = () => {
        console.log(formInputList);
      };

    const renderFormRow = (x) => {
        return Object.keys(x).filter((obj) => Object.keys(x).indexOf(obj) == 0).map(obj => {
            return (

                <div className="row mt-1" key={obj}>

                    {x[obj].map((dataItem, j) => {
                        return (
                            <div className="col-sm">
                                <input
                                    class="form-control"
                                    name={dataItem.name}
                                    value={dataItem.value}
                                    onChange={e => handleInputChange(e, obj, j)}
                                />
                            </div>

                        )
                    }
                    )}

                    <div className="col-sm">
                        <div className="btn-box">
                            <button
                                class="btn btn-primary btn-sm pr-4 pl-4"
                                onClick={() => handleRemoveClick(obj)}>Remove</button>

                        </div>
                    </div>

                </div>

            )
        })
    };

    return (
        <div className="app flex-row align-items-center">
            <div className="list-group-header section-header row">
                <div className="col">
                    <span className="mb-1 underline">Send New </span>
                    <span className="mb-1 blue-color pl-2">Quote Request</span>
                </div>
                <div className="col text-right">
                    <button type="button" class="btn btn-blue btn-sm pr-4 pl-4" onClick={() => cancelQuote()} >Reset</button>
                    <button type="button" class="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick= {() => sendQuoteReq()}>Send</button>
                </div>
            </div>
            <div className="blue-box-div" id="create-quote-form">

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" 
                    name="title"
                    onChange={e => handleFormChange(e)}
                    />
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                </div>


                <div class="form-group">
                    <label>Measurements</label>
                    <button class="btn add-btn " onClick={handleAddClick}></button>
                    {renderFormRowHeader()}
                    {formInputList.map((x, i) => {
                        return (renderFormRow(x, i));
                    })}
                </div>

                <div>
                    <label>Attachments</label>
                    <label class="btn btn-blue btn-sm pr-4 pl-4 ml-2">
                        Browse <input type="file" hidden />
                    </label>
                </div>
            </div>



        </div>
    );
}

export default Quote;