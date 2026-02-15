import axios from "axios";

const apiGithub = axios.create({
  baseURL: process.env.GITHUB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
  },
});

export default apiGithub;
