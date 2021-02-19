import Axios from "../utils/fetch";

export const GetUserInfo = async () => {
  return Axios.get<API.BaseResponse<API.USERS.UserInfo>>(
    "/api/v1/account/tokens"
  ).then((r) => r?.data);
};
