import axios from 'axios';

const API_URL = "https://funetus-api.herokuapp.com/admin/";

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            config.headers['Authorization'] = 'Bearer ' + user.token;
        }
        config.headers['Content-Type'] = 'application/json';
        console.log(config);
        return config;
    },
    error => {
        Promise.reject(error)
    });

axios.interceptors.response.use((response) => {
    return response
},
    function (error) {
        //window.location.href = `/`;
        return Promise.reject(error);
    });


class AdminService {

    getAllQuotes() {
        var config = {
            method: 'get',
            url: API_URL + 'quotes'
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getSingleQuote(quoteId) {
        var config = {
            method: 'get',
            url: API_URL + 'quotes/' + quoteId
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
            url: API_URL + 'quotes/' + quoteId
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    editQuote(quoteId,data) {
        var config = {
            method: 'PUT',
            url: API_URL + 'quotes/' + quoteId,
            data: data
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getAllWorkers() {
        var config = {
            method: 'get',
            url: API_URL + 'workers'
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    createWorker(data) {
        var config = {
            method: 'post',
            url: API_URL + 'workers',
            data: data
        };
        console.log(config);
        return axios(config)
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getAllOperations() {
        var config = {
            method: 'get',
            url: API_URL + 'operations'
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
            url: API_URL + 'inventory'
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
    createInventory(data) {
        var config = {
            method: 'post',
            url: API_URL + 'workers',
            data: data
        };
        console.log(config);
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
            url: API_URL + 'projects'
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