import axios from 'axios';

const baseURL = process.env.HOST_SERVICE || 'https://rmv-grades-api.herokuapp.com/';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});