import { reactive } from "vue";
import Axios from "./base";

export const GetUserInfo = () => {
  return Axios.get<API.BaseResponse<API.USERS.UserInfo>>(
    "/api/v1/account/tokens"
  );
};

export const UseGetUserInfo = () => {
  const UserInfo = reactive({
    res: null,
    fetching: false,
    err: null,
  });
  return UserInfo;
};
