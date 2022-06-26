import axios from "axios";
import handleError from "./utils/handleError";
import config from "../config";

function generateAxios(token) {
  const instance = axios.create({
    baseURL: config.API_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    timeout: 3000,
  });

  instance.interceptors.response.use(
    (response) => response,
    ({ message, response: { data, status } }) => {
      return handleError({ message, data, status });
    }
  );

  return instance;
}

export default generateAxios;
