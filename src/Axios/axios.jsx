import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "https://be-project-reactjs.onrender.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor: thêm token vào header nếu có
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: xử lý token hết hạn
apiClient.interceptors.response.use(
  (res) => res, // trả về response bình thường nếu thành công
  async (err) => {
    const originalRequest = err.config;

    // Chỉ xử lý khi server trả 401 và chưa retry lần nào
    if (
      err.response &&
      err.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) {
        // Không có refreshToken, logout hoặc reject
        return Promise.reject(err);
      }

      try {
        // Gọi API refresh token
        const response = await apiClient.post("/refresh-token", {
          token: refreshToken,
        });
        const { token: newToken } = response.data;

        // Lưu token mới
        Cookies.set("token", newToken);

        // Cập nhật header mặc định
        apiClient.headers.Authorization = `Bearer ${newToken}`;

        // Retry request cũ với token mới
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Nếu refresh token lỗi, remove cookies và reject
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);

export default apiClient;
