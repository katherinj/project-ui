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

  // health checkpoint
  async fetchMsg() {
    return await this.request({
      endpoint: `/`,
      method: `GET`,
    });
  }

  // ----------------------- movie requests -----------------------------

  // returns all movies
  async fetchAllMovies() {
    return await this.request({ endpoint: `movie`, method: `GET` });
  }

  // returns top 5 movies
  async fetchTopFiveMovies() {
    return await this.request({ endpoint: `movie/top5`, method: `GET` });
  }

  // GET /movie/:movieId
  async fetchMovieById(movieId) {
    return await this.request({ endpoint: `movie/${movieId}`, method: `GET` });
  }
}

// export default new ApiClient(API_BASE_URL || "http://localhost:3001")
export default new ApiClient(API_BASE_URL);
