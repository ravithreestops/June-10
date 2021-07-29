import axios from 'axios';

const API_URL = "https://funetus-api.herokuapp.com/";

class UserService {

    createQuote(data) {
        var config = {
            method: 'post',
            url: API_URL + 'quotes',
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

}

export default new UserService();