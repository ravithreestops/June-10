import React, { Component } from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';

import QuoteList from './QuoteList';
import Quote from './Quote';
import QuoteDetail from './QuoteDetail' ;

import AdminService from "../services/admin.service";

class Dashboard extends Component {
    state = {
        isQuoteDetailActive:false,
        quoteItem : null,
        selectedQuoteId: null
     }
     selectedOuoteItem = (childData) =>{
        console.log("selectedOuoteItem");
        console.log(childData);
        if(childData !== undefined){

            this.getSingleQuote(childData.id);


           



        } else {
            this.setState({
                isQuoteDetailActive:false,
                isQuoteEditActive: false
              });
        }
        
    }

    getSingleQuote = (id) => {
        AdminService.getSingleQuote(id).then(
            response => {
              console.log(response);
              
                if(response) {

                  /*this.setState({
                    selectedItem: response.data,
                    formInputList: response.data.Measures
                  });*/

                  this.setState({
                    isQuoteDetailActive:true,
                    isQuoteEditActive: false,
                    quoteItem: response.data
                    
                  });


                }
            },
            error => {
              console.log("Error");
            }
          );   
    };

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