import React, { Component } from 'react';
import { Button, Modal } from 'reactstrap';
class QuoteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editEnabled: false,
            rowIndex: 0,
            formInputList: this.props.dataFromParent.measurements,
            show: false
        }
        this.setState({ editEnabled: this.props.setQuoteActive })
    }

    handleClose() {
       // this.setState({ show: false })
    }
    handleShow() {
       // this.setState({ show: true })
    } 


    newQuote() {
        this.props.parentCallback();
    }
    editQuote() {
        this.props.parentEditCallBack();
    }
    saveQuote() {

    }
    renderMeasurementHeader() {
        var formInputList = this.state.formInputList;
        if (formInputList) {
            if (formInputList[0]) {
                const headerObj = formInputList[0][Object.keys(formInputList[0])];
                return (
                    <div className="row mt-1">
                        {headerObj.map((item) => {
                            return (
                                <div className="col-sm">
                                    <span className="underline blue">{item.name}</span>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        }
    }

    renderMeasurements(x, i) {
        return Object.keys(x).filter((obj) => Object.keys(x).indexOf(obj) === 0).map(obj => {
            return (

                <div className="row mt-1" key={obj}>

                    {x[obj].map((dataItem, j) => {
                        return (
                            <div className="col-sm">
                                <span>{dataItem.value}</span>
                            </div>
                        )
                    }
                    )}
                </div>
            )
        })
    }

    handleAddClick() {
        var newKey = 0;
        if(this.state.formInputList.length > 0) {
            newKey = Number(Object.keys(this.state.formInputList[this.state.formInputList.length - 1])[0].replace("data", "")) + 1;
        }
        
        var rowKey = "data" + newKey;
        var newInputList = [{
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

        var newFormInputObj = {
            [rowKey]: newInputList
        }

        const list = [...this.state.formInputList];
        list.push(newFormInputObj);
        this.setState({
            formInputList: list
        });
    }
    handleInputChange = (e, index, j) => {

    }
    handleRemoveClick = (index) => {

        var removeIndex;
        const removeList = [...this.state.formInputList];
        removeList.map((item, k) => {

            if (item[index]) {
                removeIndex = k;
            }
        })
        const list = [...this.state.formInputList];
        list.splice(removeIndex, 1);
        //setFormInputList(list);
        this.setState({
            formInputList: list
        });

    }
    renderFormRowHeader = () => {
        var formInputList = this.props.dataFromParent.measurements;
        if (formInputList[0]) {
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

    }
    renderFormRow = (x) => {
        return Object.keys(x).filter((obj) => Object.keys(x).indexOf(obj) === 0).map(obj => {
            return (

                <div className="row mt-1" key={obj}>

                    {x[obj].map((dataItem, j) => {
                        return (
                            <div className="col-sm">
                                <input
                                    class="form-control"
                                    name={dataItem.name}
                                    defaultValue={dataItem.value}
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
    renderEditQuote() {
        return (
            <div className="blue-box-div">


                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" defaultValue={this.props.dataFromParent.title} />
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea defaultValue={this.props.dataFromParent.content} class="form-control" id="description" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label>Measurements</label>
                    <button class="btn add-btn " onClick={() => this.handleAddClick()}></button>


                    {this.renderFormRowHeader()}
                    {this.state.formInputList && this.state.formInputList.map((x, i) => {
                        return (this.renderFormRow(x, i));
                    })}

                </div>

                 <div class="form-group">
                    <label>Attachments</label>
                    <label class="btn btn-blue btn-sm pr-4 pl-4 ml-2">
                        Browse <input type="file" hidden />
                    </label>

                    <div className="col-3 attachment-icon">
                                        <small>{this.props.dataFromParent.attachments.length}</small>
                                        <small>Attachments</small>
                                    </div>

                 </div>       

            </div>
        )
    }
    renderQuoteDetails() {
        return (
            <div className="blue-box-div">

                <div>
                    <span className="underline blue">Title</span>
                    <p>{this.props.dataFromParent.title}</p>
                </div>


                <div>
                    <span className="underline blue">Description</span>
                    <p>{this.props.dataFromParent.content}</p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <span className="underline blue">Submitted On</span>
                        <p>{this.props.dataFromParent.modifiedOn}</p>
                    </div>

                    <div className="col-sm">
                        <span className="underline blue">Status</span>
                        <p>{this.props.dataFromParent.status}
                            <button type="button" class="btn btn-blue btn-sm pr-2 pl-2 mr-2 ml-2" onClick={() => this.handleShow()}>View</button>
                            <button type="button" class="btn btn-green btn-sm pr-2 pl-2" >Submit PO</button>
                        </p>
                    </div>

                   
                </div>
                <div>
                    <span className="blue-color" >Measurements</span>
                </div>

                {this.renderMeasurementHeader()}

                {this.props.dataFromParent.measurements && this.props.dataFromParent.measurements.map((x, i) => {
                    return (this.renderMeasurements(x, i));
                })}

                <div>
                    <span className="underline blue" >Attachments</span>
                    <p>{this.props.dataFromParent.attachments}</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="app flex-row align-items-center" >




<Modal show={this.state.show} onHide={this.handleClose} animation={false}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
</Modal>




                <div className="list-group-header section-header row">
                    <div className="col">
                        <span className="mb-1 underline">Quote </span>
                        <span className="mb-1 blue-color pl-2"> Detail</span>
                    </div>
                    <div className="col text-right">
                        <button type="button" class="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.newQuote()}>New</button>


                        {this.props.isQuoteEditActive
                            ? <button type="button" class="btn btn-green btn-sm pr-4 pl-4 ml-2" onClick={() => this.saveQuote()}>Save</button>
                            : <button type="button" class="btn btn-green btn-sm pr-4 pl-4 ml-2" onClick={() => this.editQuote()}>Edit</button>
                        }

                    </div>
                </div>

                {this.props.isQuoteEditActive
                    ? this.renderEditQuote()
                    : this.renderQuoteDetails()
                }

            </div>











        );
    }
}
export default QuoteDetail;