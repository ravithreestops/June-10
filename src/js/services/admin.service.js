import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://funetus-api.herokuapp.com/";

class AdminService {

  getAllQuotes() {
    var config = {
        method: 'get',
        url: API_URL + 'quotes',
        headers: authHeader()
    };

    return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
  }
  deleteQuote(quoteId) {
    var config = {
        method: 'DELETE',
        url: API_URL + 'quotes/'+quoteId,
        headers: authHeader()
    };

    return axios(config)
        .then(function (response) {
            alert("resp");
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  getAllWorkers() {
    var config = {
        method: 'get',
        url: API_URL + 'workers',
        headers: authHeader()
    };

    return axios(config)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  getAllOperations() {
    var config = {
        method: 'get',
        url: API_URL + 'operations',
        headers: authHeader()
    };

    return axios(config)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  getAllInventory() {
    var config = {
        method: 'get',
        url: API_URL + 'inventory',
        headers: authHeader()
    };

    return axios(config)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  getAllProjects() {
    var config = {
        method: 'get',
        url: API_URL + 'projects',
        headers: authHeader()
    };

    return axios(config)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
  }

}

export default new AdminService();