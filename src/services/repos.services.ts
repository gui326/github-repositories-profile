import axios from "axios";

export const getRepos = async () => {
  const { data } = await axios.get("/api/repos");

  return data;
};
