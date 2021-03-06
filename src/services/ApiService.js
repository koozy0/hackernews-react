import axios from 'axios';

const API_ROOT = process.env.URL || 'http:localhost:3000';
const TIMEOUT = 15000;
const HEADERS = {
  'Content-Type': 'application/json',
  Acccept: 'application/json',
};

class ApiService {
  constructor(baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS, auth) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });

    client.interceptors.response.use();
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(err) {
    return Promise.reject(err);
  }

  get(path) {
    return this.client.get(path).then((response) => response.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then((response) => response.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then((response) => response.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then((response) => response.data);
  }

  delete(path) {
    return this.client.delete(path).then((response) => response.data);
  }
}

export default ApiService;
