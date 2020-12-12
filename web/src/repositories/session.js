import http from '../http';

const login = ({ email, password }) => {
  return http.post({
    url: '/login',
    data: {
      email,
      password,
    }
  });
}

const session = {
  login,
};

export default session;
