import React, { Component } from 'react';

class QuoteDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formInputList: this.props.dataFromParent.Measures,
            selectedItem: this.props.dataFromParent
        };
    }



    newQuote() {
        this.props.parentCallback();
    }
    editQuote() {
        this.props.parentEditCallBack();
    }
    saveQuote() {

    }





    handleAddClick() {
        alert("Clicked");
        debugger;
        var newKey = 0;
        var formInputList = this.state.formInputList, tmpObj = {};

        Object.keys(formInputList[0]).map(function(x,i){
            tmpObj[x] = '';
        });

        const list = [...this.state.formInputList];
        list.push(tmpObj);
        this.props.dataFromParent.Measures = list;
        this.setState({
            formInputList: this.props.dataFromParent.Measures
        });
        debugger;

        /*var rowKey = "data" + newKey;
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
        });*/
    }
    handleInputChange = (e) => {

    }
    handleRemoveClick = (index) => {

        /*var removeIndex;
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
        });*/

    }
    
    renderFormRow = (item, i) => {
        debugger;
        console.log(this.state.formInputList);
        const headerObj = Object.keys(this.props.dataFromParent.Measures[0]);
        if (item) {
            return (
                <div className="row mt-1">
                    {headerObj && headerObj.map((headerKey) => {
                        return (
                            <div className="col-sm">

                                <input
                                    className="form-control"
                                    defaultValue={item[headerKey]}
                                    onChange={e => this.handleInputChange(e)}
                                />

                            </div>
                        )
                    })}
                    <div className="col-sm">
                        <div className="btn-box">
                            <button
                                className="btn btn-primary btn-sm pr-4 pl-4"
                                onClick={() => this.handleRemoveClick()}>Remove</button>

                        </div>
                    </div>

                </div>
                )
        }


        /*
        return Object.keys(x).filter((obj) => Object.keys(x).indexOf(obj) === 0).map(obj => {
            return (

                <div className="row mt-1" key={obj}>

                    {x[obj].map((dataItem, j) => {
                        return (
                            <div className="col-sm">
                                <input
                                    className="form-control"
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
                                className="btn btn-primary btn-sm pr-4 pl-4"
                                onClick={() => this.handleRemoveClick(obj)}>Remove</button>

                        </div>
                    </div>

                </div>

            )
        })
*/

    }

    renderEditQuote() {

        /*
         <div className="form-group">
                        <label>Measurements</label>
                        <button className="btn add-btn " onClick={() => this.handleAddClick()}></button>


                        {this.renderFormRowHeader()}
                        {this.state.formInputList && this.state.formInputList.map((x, i) => {
                            return (this.renderFormRow(x, i));
                        })}

                    </div>

                    <div className="form-group">
                        <label>Attachments</label>
                        <label className="btn btn-blue btn-sm pr-4 pl-4 ml-2">
                            Browse <input type="file" hidden />
                        </label>

                        <div className="col-3 attachment-icon">
                            <small>{selectedQuote.Uploads.length}</small>
                            <small>Attachments</small>
                        </div>

                    </div>
                     */
        var selectedQuote = this.props.dataFromParent;
        
        if (selectedQuote) {

            return (
                <div className="blue-box-div">

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" defaultValue={selectedQuote.title} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea defaultValue={selectedQuote.desc} className="form-control" id="description" rows="3"></textarea>
                    </div>

                    <div className="form-group">
                        <label>Measurements</label>
                        <button className="btn add-btn " onClick={() => this.handleAddClick()}></button>


                        {this.renderMeasurementHeader()}
                        {this.props.dataFromParent.Measures && this.props.dataFromParent.Measures.map((x, i) => {
                        return (this.renderFormRow(x, i));
                        })}

                        

                    </div>

                    <div className="form-group">
                        <label>Attachments</label>
                        <label className="btn btn-blue btn-sm pr-4 pl-4 ml-2">
                            Browse <input type="file" hidden />
                        </label>

                        <div className="col-3 attachment-icon">
                            <small>{selectedQuote.Uploads.length}</small>
                            <small>Attachments</small>
                        </div>

                    </div>




                </div>
            )
        }
    }





    renderMeasurementHeader() {

        var formInputList = this.props.dataFromParent.Measures;
        if (formInputList) {
            if (formInputList[0]) {
                const headerObj = Object.keys(formInputList[0]);
                return (
                    <div className="row mt-1">
                        {headerObj && headerObj.map((item) => {
                            return (
                                <div className="col-sm">
                                    <span className="font-weight-bold">{item}</span>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        }
    }

    renderMeasurements(item, i) {

        const headerObj = Object.keys(this.props.dataFromParent.Measures[0]);
        if (item) {
            return (
                <div className="row mt-1">
                    {headerObj && headerObj.map((headerKey) => {
                        return (
                            <div className="col-sm">
                                <span >{item[headerKey]}</span>
                            </div>
                        )
                    })}
                </div>
            )
        }

    }

    renderQuoteDetails() {

        if (this.props.dataFromParent) {
            return (
                <div className="blue-box-div">
                    <div>
                        <span className="underline blue">Title</span>
                        <p>{this.props.dataFromParent.title}</p>
                    </div>
                    <div>
                        <span className="underline blue">Description</span>
                        <p>{this.props.dataFromParent.desc}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <span className="underline blue">Submitted On</span>
                            <p>{(new Date(this.props.dataFromParent.createdAt)).toLocaleDateString()}</p>
                        </div>
                        <div className="col-sm">
                            <span className="underline blue">Status</span>
                            <p> {this.props.dataFromParent.status}
                                <button type="button" className="btn btn-blue btn-sm pr-2 pl-2 mr-2 ml-2" >View</button>
                                <button type="button" className="btn btn-green btn-sm pr-2 pl-2" >Submit PO</button>
                            </p>
                        </div>

                    </div>
                    <div>
                        <span className="underline blue" >Measurements</span>
                    </div>

                    {this.renderMeasurementHeader()}
                    {this.props.dataFromParent.Measures && this.props.dataFromParent.Measures.map((x, i) => {
                        return (this.renderMeasurements(x, i));
                    })}

                    <div>
                        <span className="underline blue" >Attachments</span>

                        <div className="row mt-1">
                            {this.props.dataFromParent.Uploads && this.props.dataFromParent.Uploads.map((item) => {
                                return (
                                    <div className="col-sm">
                                        <span >{item['fileName']}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="app flex-row align-items-center" >

                <div className="list-group-header section-header row">
                    <div className="col">
                        <span className="mb-1 underline">Quote </span>
                        <span className="mb-1 blue-color pl-2"> Detail</span>
                    </div>
                    <div className="col text-right">
                        <button type="button" className="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.newQuote()}>New</button>


                        {this.props.isQuoteEditActive
                            ? <button type="button" className="btn btn-green btn-sm pr-4 pl-4 ml-2" onClick={() => this.saveQuote()}>Save</button>
                            : <button type="button" className="btn btn-green btn-sm pr-4 pl-4 ml-2" onClick={() => this.editQuote()}>Edit</button>
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