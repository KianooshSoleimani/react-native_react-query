import axios from 'axios';
import store from '../redux/store';

const axiosInstance = axios.create({
  baseURL: 'https://imdb.hriks.com/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  },
});

function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, '');
  }
  return config.url;
}

// Intercept all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().userData.token;
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    // console.log('######REQUEST######');
    // console.log(
    //   `%c baseURL : ${config.baseURL}`,
    //   'color: #0086b3; font-weight: bold',
    // );
    // console.log(
    //   `%c url : ${getUrl(config)}`,
    //   'color: #0086b3; font-weight: bold',
    // );
    // console.log(
    //   `%c method : ${config.method}`,
    //   'color: #0086b3; font-weight: bold',
    // );
    // console.log('headers : ', config.headers);
    // console.log('body : ', config.data);
    // console.log('######REQUEST######');
    return config;
  },
  (error) => Promise.reject(error),
);
// Intercept all responses
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('######SUCCESS######');
    // console.log(
    //   `%c status: ${response.status}`,
    //   'color: #008000; font-weight: bold',
    // );
    // console.log(
    //   `%c url : ${getUrl(response.config)}`,
    //   'color: #008000; font-weight: bold',
    // );
    // console.log('response :', response.data);
    // console.log('######SUCCESS######');
    return response;
  },
  (error) => {
    // console.log('######ERROR######');
    // console.log(
    //   `%c status : ${error.response.status}`,
    //   'color: #a71d5d; font-weight: bold',
    // );
    // console.log(
    //   `%c url : ${getUrl(error.response.config)}`,
    //   'color: #a71d5d; font-weight: bold',
    // );
    // console.log('error :', error.response.data);
    // console.log('######ERROR######');
    return Promise.reject(error);
  },
);

export default axiosInstance;
