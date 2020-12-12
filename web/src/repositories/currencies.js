import http from '../http';

const get = () => {
  return http.get({
    url: '/currencies',
    config: {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }
  });
}

const post = ({ currency, value}) => {
  return http.post({
    url: '/crypto/btc',
    data: {
      currency,
      value,
    },
    config: {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }
  });
}

const currencies = {
  get,
  post,
};

export default currencies;
