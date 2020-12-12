import http from '../http';

const get = () => {
  return http.get({
    url: '/crypto/btc',
    config: {
      headers: {
        authorization: localStorage.getItem('token'),
      }
    }
  });
}

const bitcoinIndex = {
  get,
};

export default bitcoinIndex;
