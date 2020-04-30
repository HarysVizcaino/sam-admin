/* eslint-disable no-param-reassign */
import axios from 'axios';

export const AUTH_TOKEN = 'AUTH_TOKEN';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getUsersCredentials = async () => {
  const token = await localStorage.getItem(AUTH_TOKEN);
  return token;
};

instance.interceptors.request.use(
  async (config) => {
    if (config.url && !config.url.includes('auth')) {
      const token = await getUsersCredentials() || undefined;
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...token ? { Authorization: token } : { token: 'Himanigal' },
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
