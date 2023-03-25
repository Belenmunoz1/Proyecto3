

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {

    // 'Access-Control-Allow-Origin': 'http://localhost:3001/api',
    // 'Access-Control-Allow-Methods': 'POST ,GET , DELETE , PUT ',
    // 'Access-Control-Allow-Headers': 'Content-type, X-Auth-Token, Origin,Authorization',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;