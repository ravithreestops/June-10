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
        return config;
    },
    error => {
        Promise.reject(error)
    });

axios.interceptors.response.use((response) => {
    return response
},
    function (error) {
       // window.location.href = `/`;
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
    changeStatus(quoteId,data) {
        var config = {
            method: 'post',
            url: API_URL + '/quotes/'+quoteId+'/changeStatus',
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

    tagQuote(data) {
        //https://funetus-api.herokuapp.com/admin/quotes/tagQuotes
        var config = {
            method: 'PUT',
            url: API_URL + 'quotes/tagQuotes',
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
        
        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteWorker(id) {
        var config = {
            method: 'DELETE',
            url: API_URL + 'workers/' + id
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
            url: API_URL + 'operation'
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deleteOperation(id) {
        var config = {
            method: 'DELETE',
            url: API_URL + 'operation/' + id
        };

        return axios(config)
            .then(function (response) {
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
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    createInventory(data) {
        var config = {
            method: 'post',
            url: API_URL + 'inventory',
            data: data
        };
        console.log(config);
        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deleteInventory(id) {
        var config = {
            method: 'DELETE',
            url: API_URL + 'inventory/' + id
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getAllProjects() {
        var config = {
            method: 'get',
            url: API_URL + 'project'
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    deleteProject(id) {
        var config = {
            method: 'DELETE',
            url: API_URL + 'project/' + id
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    
    getAllCustomers() {
        var config = {
            method: 'get',
            url: API_URL + 'customer'
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteCustomer(id) {
        var config = {
            method: 'DELETE',
            url: API_URL + 'customer/' + id
        };

        return axios(config)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default new AdminService();