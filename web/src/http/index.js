import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

api.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
  }

  return Promise.reject(error);
});

const http = {
  get: ({ url, config }) => {
    return api.get(url, config );
  },
  post: ({ url, data, config}) => {
    return api.post(url, data, config);
  },
  patch: ({ url, data, config }) => {
    return api.patch(url, data, config);
  },
  put: ({ url, data, config }) => {
    return api.put(url, data, config);
  },
  delete: ({ url, config }) => {
    return api.delete(url, config);
  },
};

export default http;

