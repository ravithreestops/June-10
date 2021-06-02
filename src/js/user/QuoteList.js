import React, { Component } from 'react';

class QuoteList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        activeId : 0
    }
    selectQuote(item) {
        this.props.parentCallback(item);
        this.setState({
            activeId:item.id
          });
    }
    state = {
        searchValue: "",
        listitems: [
            {
                id: 0,
                title: "Quote Req1 - Custom Tools 1.2.5",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                tools: ["Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100"],
                createdOn: "1/10/2020",
                modifiedOn: "12/10/2020",
                status: "PO Submitted",
                attachments: ["url1", "url2"],
                measurements: [{
                    "data0": [{
                        "name": "Item Name",
                        "type": "text",
                        "value": "333"
                    }, {
                        "name": "Unit",
                        "type": "text",
                        "value": "444"
                    },
                    {
                        "name": "Quantity ",
                        "type": "text",
                        "value": "fdsfs"
                    }
                    ]
                }, {
                    "data1": [{
                        "name": "Item Name",
                        "type": "text",
                        "value": "wqwewqe"
                    }, {
                        "name": "Unit",
                        "type": "text",
                        "value": "333"
                    },
                    {
                        "name": "Quantity ",
                        "type": "text",
                        "value": "2222"
                    }
                    ]
                }]

            },
            {
                id: 1,
                title: "Quote Req2 - Custom Tools 1.2.5",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                tools: ["Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100"],
                createdOn: "5/10/2020",
                modifiedOn: "25/10/2020",
                status: "Work in progress",
                attachments: ["url1", "url2", "url3"],
                measurements: []
            },
            {
                id: 2,
                title: "Quote Req2 - Custom Tools 1.2.5",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                tools: ["Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100"],
                createdOn: "1/10/2020",
                modifiedOn: "1/10/2020",
                status: "Work in progress",
                attachments: ["url1", "url2", "url3"],
                measurements: []
            },
            {
                id: 3,
                title: "Quote Req2 - Custom Tools 1.2.5",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                tools: ["Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100"],
                createdOn: "11/10/2020",
                modifiedOn: "20/10/2020",
                status: "Work in progress",
                attachments: ["url1", "url2", "url3"],
                measurements: []
            }, {
                id: 4,
                title: "Quote Req2 - Custom Tools 1.2.5",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                tools: ["Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100"],
                createdOn: "Dec 9",
                modifiedOn: "Dec 20",
                status: "Work in progress",
                attachments: ["url1", "url2", "url3"],
                measurements: []
            },
            {
                id: 5,
                title: "Quote Req2 - Custom Tools 1.2.5",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                tools: ["Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100", "Tool01 - 32mm 100"],
                createdOn: "Dec 9",
                modifiedOn: "Dec 20",
                status: "Work in progress",
                attachments: ["url1", "url2", "url3"],
                measurements: []
            }
        ]

    }

    handleChange(e) {
        this.setState({
            searchValue: e.target.value.toLowerCase()
        });
    }

    render() {
        return (
            <React.Fragment>

                <div className="list-group-header section-header row">
                    <div className="col-4">
                        <span className="mb-1 underline">My Quote</span>
                        <span className="mb-1 blue-color pl-2">Requests</span>
                    </div>
                    <div className="col-8">
                        <div className="has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control search-box" onChange={this.handleChange} placeholder="Search quotes..." />
                        </div>
                    </div>
                </div>

                <div className="list-group">

                    {this.state.listitems.filter(item =>
                        item.title.toLowerCase().includes(this.state.searchValue)).map(listitem => (

                            <a className={
                                (listitem.id === this.state.activeId ? " active list-group-item list-group-item-action" : "list-group-item list-group-item-action")
                              }
                            aria-current="true" key={listitem.id} id={listitem.id} onClick={() => this.selectQuote(listitem)} >
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1 underline half">{listitem.title}</h5>

                                </div>
                                <p className="mb-1 ellipses_two">{listitem.content}</p>
                                <div>
                                    {listitem.tools.map(tool => (
                                        <span className="badge tool-badge">{tool}</span>
                                    )
                                    )}
                                </div>
                                <div className="row list-item-detail">
                                    <div className="col-2 calender-icon">
                                        <small>{listitem.createdOn}</small>
                                    </div>
                                    <div className="col-5 flag-icon">
                                        <small>{listitem.status}</small>
                                        <span className="date-badge badge">{listitem.modifiedOn}</span>
                                    </div>

                                    <div className="col-3 attachment-icon">
                                        <small>{listitem.attachments.length}</small>
                                        <small>Attachments</small>
                                    </div>
                                    <div className="col-2 rightarrow-icon">
                                        <small>View details</small>
                                    </div>
                                </div>
                            </a>

                        ))}

                </div>

            </React.Fragment>
        );
    }
}
export default QuoteList;