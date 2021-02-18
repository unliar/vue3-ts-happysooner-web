import { BaseResponse, UserInfo } from ".";

export const GetUserInfo = (): Promise<BaseResponse<UserInfo>> => {
  return fetch("/api/v1/account/tokens").then((r) => r.json());
};
