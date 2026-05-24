import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;