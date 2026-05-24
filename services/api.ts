import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',

  headers: {
    'Content-Type': 'application/json',

    'x-api-key': 'pro_4dcb5bdbdd1f5a2014098b1c47f6c01bbf76e9c653d3cb6fe25bca0c38a2ad10',
  },
});

export default API;