import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const login = (username, password) => {
  return instance.post("/user/login", { username, password });
};
