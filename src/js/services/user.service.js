import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://funetus-api.herokuapp.com/";

class UserService {

  createQuote(data) {
    var config = {
        method: 'post',
        url: API_URL + 'quotes',
        headers: authHeader(),
        body: data
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

/*
{"message":"Validation failed.",
"data":[{"value":"","msg":"Please enter a Title of Min 3 Characters.","param":"title","location":"body"},{"value":"","msg":"Please enter a Description.","param":"desc","location":"body"},{"msg":"Please add measures","param":"measures","location":"body"}]}
*/