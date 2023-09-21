import axios from "axios";
import API_BASE_URL from "./constants";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
  }
  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : "",
    };

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }
  async getMsg() {
    return await this.request({
      endpoint: `/`,
      method: `GET`,
    });
  }
}

// export default new ApiClient(API_BASE_URL || "http://localhost:3001")
export default new ApiClient(API_BASE_URL);
