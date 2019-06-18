import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.localhost,
});

export default api;
