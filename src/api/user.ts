import Axios from "../utils/fetch";
import { API_PROFIX } from "../constants";

export const GetUserInfo = async () => {
  return Axios.get<API.BaseResponse<API.USERS.UserInfo>>(
    `${API_PROFIX}/account/tokens`
  ).then((r) => r?.data);
};

/**
 * 根据用户id获取信息
 *
 * @param UID
 */
export const GetUserInfoByID = (UID: number) =>
  Axios.get<API.BaseResponse<API.USERS.UserInfo>>(
    `${API_PROFIX}/account/users/${UID}`
  ).then((r) => r.data);
