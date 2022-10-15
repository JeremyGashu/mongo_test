import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getAllUsers = async () => {
  const users = await axios.get(`${baseUrl}/users`);
  return users.data;
};
