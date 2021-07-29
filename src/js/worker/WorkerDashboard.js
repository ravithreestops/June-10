import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import Slidebar from '../components/Sidebar';


import WorkerOperations from './WorkerOperations';
import WorkerProjects from './WorkerProjects';
import WorkerSchedule from './WorkerTimesheet';

class WorkerDashboard extends React.Component {
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
                                    <WorkerOperations></WorkerOperations>
                                )
                            case '2':
                                return (
                                    <WorkerProjects></WorkerProjects>
                                )
                            case '3':
                                return(
                                    <WorkerSchedule></WorkerSchedule>
                                )
                            default:
                                return (
                                    <WorkerOperations></WorkerOperations>
                                )
                        }

                    })()}

                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default WorkerDashboard;