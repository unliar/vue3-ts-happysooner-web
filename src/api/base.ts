import axios from "axios";
import { GetTokenCookies } from "../utils/cookie";
import { ElNotification } from "element-plus";
const Axios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

Axios.interceptors.request.use(
  (req) => {
    req.headers["happy-auth-token"] = GetTokenCookies();
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
      ElNotification({
        message: `${res.config.url} - 需要登录权限`,
        type: "error",
      });
    } else if (res?.data?.ErrorCode !== 200) {
      ElNotification({
        message: `当前操作无数据`,
        type: "warning",
      });
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