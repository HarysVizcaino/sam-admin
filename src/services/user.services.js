import axiosInstance from './axios';
import qr from 'query-string';

export class UserService {
  constructor() {
    this.url = 'http://localhost:3000/api/v1';
  }

  async SignIn(email, password) {
    console.log('service', { email, password });
    try {
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      // };
      const payload = qr.stringify({ email, password });
      const response = await axiosInstance.post(`${this.url}/users/signin`, payload);
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err)
      throw new Error(err);
    }
  }
}