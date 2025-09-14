import apiClient from "./axios";

const login = async (data) => {
  const response = await apiClient.post("/login", data);
  return response;
};

export default login;

const userInfo = async () => {
  const response = await apiClient.get(
    "/user/info/902bf309-b2aa-486b-85a7-55a3dfd7ae3d"
  );
  return response;
};
export { userInfo };
