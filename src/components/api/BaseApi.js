// BaseApi.js
import axios from "axios";

const axiosInstance = axios.create({
  timeout: 9000,
});

axiosInstance.defaults.crossDomain = true;

export default class BaseApi {
  constructor(api) {
    this.api = api;
  }

  async get(endpoint, data) {
    try {
      const response = await axiosInstance.get(`${this.api}/${endpoint}`, { params: data });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await axiosInstance.post(`${this.api}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put(endpoint, data) {
    try {
      const response = await axiosInstance.put(`${this.api}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async patch(endpoint, data) {
    try {
      const response = await axiosInstance.patch(`${this.api}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(endpoint, data) {
    try {
      const response = await axiosInstance.delete(`${this.api}/${endpoint}`, { data });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
