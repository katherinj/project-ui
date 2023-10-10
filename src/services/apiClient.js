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
  // GET /movie
  async fetchAllMovies() {
    return await this.request({ endpoint: `movie`, method: `GET` });
  }

  // returns top 5 movies and its details
  // GET /movie/top5
  async fetchTopFiveMovies() {
    return await this.request({ endpoint: `movie/top5`, method: `GET` });
  }

  // returns movie and movie details by ID
  // GET /movie/:movieId
  async fetchMovieById(movieId) {
    return await this.request({ endpoint: `movie/${movieId}`, method: `GET` });
  }

  // returns the top 5 actors for a movie
  // GET /movie/top5actors/:movieId
  async fetchMoviesTop5Actors(movieId) {
    return await this.request({
      endpoint: `movie/top5actors/${movieId}`,
      method: `GET`,
    });
  }

  // ----------------------- actor requests -----------------------------
  // returns all actors and their details
  // GET /actor

  // returns top 5 actors for a movie and their details
  // GET actor/top5/:movieId

  // ----------------------- customer requests -----------------------------
  // returns all customers and their details
  // GET /customer

  // add a new customer
  // POST /customer

  // edit a specific customers details using their ID
  // UPDATE /customer/:customerId

  // returns a customer and their details by ID
  // GET /customer/:customerId
}

// export default new ApiClient(API_BASE_URL || "http://localhost:3001")
export default new ApiClient(API_BASE_URL);
