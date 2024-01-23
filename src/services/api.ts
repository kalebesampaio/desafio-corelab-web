import axios from "axios";

const taskAPI = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5 * 1000,
});

export { taskAPI };
