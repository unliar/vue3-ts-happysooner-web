import axios from "axios";
import { HAPPY_AUTH_TOKEN } from "../constants";
import { GetTokenCookies } from "./cookie";
const Axios = axios.create({
  baseURL: (import.meta.env.VITE_BASE_HOST as string) || "/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

Axios.interceptors.request.use(
  (req) => {
    req.headers[HAPPY_AUTH_TOKEN] = GetTokenCookies();
    return req;
  },
  (err) => ({
    ErrorCode: -1,
    ErrorMsg: JSON.stringify(err),
    Result: null,
  })
);

Axios.interceptors.response.use(
  (res) => {
    if (res?.data?.ErrorCode === 403) {
      console.log("当前接口需要权限");
    } else if (res?.data?.ErrorCode !== 200) {
      console.log("当前操作无数据");
    }
    return res;
  },
  (err) => ({
    ErrorCode: -1,
    ErrorMsg: JSON.stringify(err),
    Result: null,
  })
);

export default Axios;
