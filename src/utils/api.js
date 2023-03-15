import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.interiorkarwalo.com/api/v1/admin',
});

export default instance;
