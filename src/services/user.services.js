import axiosInstance from './axios';
import qr from 'query-string';

export class UserService {
  constructor() {
    this.url = 'http://localhost:3000/api/v1';
  }



  async createUser(user) {
    try {
      const payload = qr.stringify(user);
      const response = await axiosInstance.post(`${this.url}/users`, payload);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async SignIn(email, password) {
    try {
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      // };
      const payload = qr.stringify({ email, password });
      const response = await axiosInstance.post(`${this.url}/users/signin`, payload);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAll() {
    try {
      const response = await axiosInstance.get(`${this.url}/users/`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getuserById(id) {
    try {
      const response = await axiosInstance.get(`${this.url}/users/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
}