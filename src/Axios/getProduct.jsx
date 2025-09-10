// import apiClient from "./axios";

// const getProduct = async () => {
//   const res = await apiClient.get("/product");
//   return res.data;
// };

// export default getProduct;

import apiClient from "./axios";
const getProduct = async () => {
  const res = await apiClient.get("/product");
  return res.data;
};
