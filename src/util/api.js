import axios from 'axios'; /// LOGIN API

const loginApi = (email, password) => {
  const data = { email, password };

  return axios.post(`${process.env.REACT_APP_API_URL}/login`, data);
};

const registerApi = (name, password, email, phone) => {
  const data = { name, password, email, phone };

  return axios.post(`${process.env.REACT_APP_API_URL}/register`, data);
};

export { loginApi, registerApi };
