/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

export const AUTH_TOKEN = 'jwtToken';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getUsersCredentials = async () => {
  console.log('runningget');

  // const localStorage = window.localStorage;
  const userModule = JSON.parse(localStorage.getItem('persist:root')).usersModule;
  const token = JSON.parse(userModule).jwtToken;
  console.log('usermodule', token);
  return token;
};

instance.interceptors.request.use(
  async (config) => {
    if (config.url && !config.url.includes('auth')) {
      const token = await getUsersCredentials() || undefined;
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...token ? { Authorization: `Bearer ${token}` } : { token: 'Himanigal' },
        ...config.headers,
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
);

export default instance;
