import axios from 'axios';

const baseURL = process.env.HOST_SERVICE || 'http://localhost:3005/';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});