import axios from 'axios';

// urls
const URL_PATH = 'http://localhost:3000'; // json-server default
const LIST = `${URL_PATH}/items`;

const execute = (method, endpoint, data = {}, config = {}, headers = {}) => {
  const defaultHeaders = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 0,
  };

  return axios({
    method,
    url: endpoint,
    data,
    config,
    headers: { ...defaultHeaders, ...headers },
  });
};

const get = (endpoint, extraHeaders = {}) =>
  execute('get', endpoint, undefined, undefined, extraHeaders);

// const post = (endpoint, data, config, extraHeaders) =>
//   execute('post', endpoint, data, config, extraHeaders);

export const getList = () => {
  return get(LIST).then((data) => data.data);
};
