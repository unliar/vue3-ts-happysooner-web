export const GetUserInfo = async (): Promise<
  API.BaseResponse<API.USERS.UserInfo>
> => {
  return fetch("/api/v1/account/tokens").then((r) => r.json());
};
