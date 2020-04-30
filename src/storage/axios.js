/* eslint-disable no-param-reassign */
import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTH_TOKEN } from 'constants';

const instance = axios.create({
  baseURL: Config.API_URL,
});

export const getUsersCredentials = async () => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN);
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
