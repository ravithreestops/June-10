import React, { Component } from 'react';

class EditCustomer extends Component {
    state = {
        item: this.props.selectedItem,
        editCustomerPage: this.props.editCustomerPage
    }
    handleChange(propertyName, event) {
        var item = this.state.item;
        item[propertyName] = event.target.value;
        this.setState({ item: item });
    }
    saveCustomer() {
        if(this.state.item.id !== undefined) {
            alert("editted Successfuly");
        } else {
            this.createCustomer();
        }
        this.props.parentCallback();
    }

    createCustomer() {
        console.log(this.state.item);
       /* var data = {
            "name": this.state.item.name,
            "phone": this.state.item.phone,
            "address" : this.state.item.address,
            "email": this.state.item.email,
            "avail_per_day": this.state.item.avail_per_day,
            "cost_per_hr" : this.state.item.cost_per_hr,
            "total_avail_per_week": this.state.item.total_avail_per_week,
            "professionId": this.state.item.professionId
        };

        AdminService.createWorker(data).then(
            response => {
                console.log(response);
                alert("New item added");
            },
            error => {
                console.log("Error");
            }
        ); */
    }

    resetReq() {

    }
    handleBreadCrumb() {
        this.props.parentCallback();
    }
    render() {
        return (
            <React.Fragment>

                <div className="col edit-customer">
                    <div className="list-group-header section-header row">
                        <div className="col-4">

                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item" onClick={this.handleBreadCrumb.bind(this)}>
                                        <span className="mb-1 underline">Manage</span>
                                        <span className="mb-1 blue-color pl-2">Customer</span>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <span className="mb-1">{(this.state.item.length !== 0) ? 'Edit' : 'Add'}</span>
                                        <span className="mb-1 blue-color pl-2">Customer</span>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="col-8 text-right">
                            <button type="button" className="btn btn-blue btn-sm pr-4 pl-4" onClick={() => this.resetReq()} >Reset</button>
                            <button type="button" className="btn btn-green btn-sm ml-2 pr-4 pl-4" onClick={() => this.saveCustomer()}>Save</button>
                        </div>
                    </div>

                    <div className="blue-box-div row">
                        <div className="col">
                            <div>
                                <span>Customer Name</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.name}
                                    onChange={this.handleChange.bind(this, 'name')} />
                            </div>
                            <div>
                                <span>Phone</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.phone}
                                    onChange={this.handleChange.bind(this, 'c_phone')} />
                            </div>
                            <div>
                                <span>Address</span>
                                <textarea className="form-control" rows="3"
                                    defaultValue={this.state.item.address}
                                    onChange={this.handleChange.bind(this, 'address')}></textarea>
                            
                            </div>
                            <div>
                                <span>Email</span>
                                <input type="text"
                                    className="form-control" defaultValue={this.state.item.email}
                                    onChange={this.handleChange.bind(this, 'email')} />
                            </div>
                            
                            
                        </div>
                       

                    </div>



                </div>


            </React.Fragment>
        );
    }
}
export default EditCustomer;