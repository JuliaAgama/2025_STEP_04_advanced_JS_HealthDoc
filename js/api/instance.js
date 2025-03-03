import { getCookie } from "../utils/cookie.js";

const instance = axios.create({
  baseURL: "https://ajax.test-danit.com/api/v2/cards",
});

instance.interceptors.request.use(config => {
  const token = getCookie("token");
  // const token = localStorage.getItem("token");

  if (token) {
    config.headers = {
      authorization: `Bearer ${token}`,
    };
  };
  return config;
});

export default instance;