import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/api', //Dummy URL
  headers: {
    'Content-type': 'application/json',
  },
});
