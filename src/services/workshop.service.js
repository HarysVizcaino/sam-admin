import axiosInstance from './axios';
import qr from 'query-string';

export class WorkShopService {
  constructor() {
    this.url = 'http://localhost:3000/api/v1';
  }

  async create(taller) {
    try {
      const payload = qr.stringify(taller);
      const response = await axiosInstance.post(`${this.url}/workshops`, payload);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAll() {
    try {
      const response = await axiosInstance.get(`${this.url}/workshops`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

}