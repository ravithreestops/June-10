import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import Header from '../common/Header';
import Footer from '../common/Footer';

import QuoteList from './QuoteList'
import Quote from './Quote';
import QuoteDetail from './QuoteDetail' 

class Dashboard extends Component {
    state = {
        isQuoteDetailActive:false,
        quoteItem : null
     }
     selectedOuoteItem = (childData) =>{
        console.log("selectedOuoteItem");
        if(childData != undefined){
            this.setState({
                isQuoteDetailActive:true,
                isQuoteEditActive: false,
                quoteItem: childData
              });
        } else {
            this.setState({
                isQuoteDetailActive:false,
                isQuoteEditActive: false
              });
        }
        
    }
    quoteEdit = () => {
        this.setState({
            isQuoteEditActive:true
          });
    }
    render() {
        return (  
            <React.Fragment>
                 <Header/>
                 <div className="page-body row">
                    <div className="col">
                        <QuoteList parentCallback = {this.selectedOuoteItem}/>
                    </div>
                    <div className="col">
                        {!this.state.isQuoteDetailActive ? <Quote /> : null }  
                        {this.state.isQuoteDetailActive ? <QuoteDetail isQuoteEditActive = {this.state.isQuoteEditActive} parentEditCallBack = {this.quoteEdit} dataFromParent = {this.state.quoteItem} parentCallback = {this.selectedOuoteItem}/> : null }
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default Dashboard;