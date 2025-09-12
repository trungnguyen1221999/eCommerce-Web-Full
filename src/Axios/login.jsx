import apiClient from "./axios";

const login = async (data) => {
  const response = await apiClient.post("/login", data);
  return response;
};

export default login;
