import axios from "axios";
import { getValueFromLocalStorage } from "../utils";
import jwtDecode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

const authInstance = axios.create({
  baseURL: "http://localhost:3001",
});

// authInstance.interceptors.request.use((config) => {
//   const token = getValueFromLocalStorage("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

authInstance.interceptors.request.use((config) => {
  const token = getValueFromLocalStorage("token");
  if (!token) {
    window.location.href = "/auth/login";
    return config;
  }
  try {
    // const decodedToken = jwtDecode(token);
    // if (decodedToken?.exp * 1000 < new Date().getTime()) {
    //   window.location.href = "/auth/login";
    //   return config;
    // }

    config.headers.Authorization = `Bearer ${getValueFromLocalStorage(
      "token"
    )}`;
  } catch (error) {
    window.location.href = "/auth/login";
    console.log(error);
  }

  return config;
});

export const login = (username, password) => {
  return instance.post("/user/login", { username, password });
};

export const createProduct = (data) => {
  return authInstance.post("/product", data);
};

export const getProduct = (pageSize, pageIndex) => {
  return instance.get(`/product?pageSize=${pageSize}&pageIndex=${pageIndex}`);
};
