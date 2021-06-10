import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import Slidebar from '../common/Sidebar';

import AdminQuoteReq from './AdminQuoteReq';
import ManageInventory from './ManageInventory';
import ManageOperations from './ManageOperations';
import ManageWorker from './ManageWorker';
import ManageProjects from './ManageProjects';
import ManageCustomer from './ManageCustomer';
import ManageInspections from './ManageInspections';

class AdminDashboard extends React.Component {
    state = {
        pageName: '1'
    }
    switchPage(e) {
        this.setState({
            pageName: e.target.dataset.id
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="page-body row">
                    <Slidebar onClick={this.switchPage.bind(this)}></Slidebar>
                    {(() => {
                        switch (this.state.pageName) {
                            case '1':
                                return (
                                    <AdminQuoteReq></AdminQuoteReq>
                                )
                            case '2':
                                return (
                                    <ManageWorker></ManageWorker>
                                )
                            case '3':
                                return (
                                    <ManageCustomer></ManageCustomer>
                                )
                            case '4':
                                return (
                                    <ManageInspections></ManageInspections>
                                )
                            case '5':
                                return (
                                    <ManageInventory></ManageInventory>
                                )
                            case '6':
                                return (
                                    <ManageOperations></ManageOperations>
                                )
                            case '7':
                                return (
                                    <ManageProjects></ManageProjects>
                                )
                            default:
                                return (
                                    <div>You are a User.</div>
                                )
                        }

                    })()}

                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default AdminDashboard;