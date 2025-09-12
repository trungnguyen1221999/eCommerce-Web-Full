import apiClient from "./axios";

const register = async (userData) => {
  const response = await apiClient.post("/register", userData);
  return response;
};
export default register;
