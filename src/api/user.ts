import Axios from "~/utils/fetch"
import { API_PROFIX } from "~/constants"

export const GetUserInfo = async () => {
    return Axios.get<API.BaseResponse<API.USERS.UserInfo>>(
        `${API_PROFIX}/account/tokens`
    ).then((r) => r?.data)
}

/**
 * 根据用户id获取信息
 *
 * @param UID
 */
export const GetUserInfoByID = (UID: number) =>
    Axios.get<API.BaseResponse<API.USERS.UserInfo>>(
        `${API_PROFIX}/account/users/${UID}`
    ).then((r) => r.data)

/**
 * 判断账户是否重复
 * @param d
 */
export const GetAccountUnique = (d: API.USERS.Account) =>
    Axios.get<API.BaseResponse<any>>(`${API_PROFIX}/account/unique`, {
        params: d,
    }).then((r) => r?.data)

/**
 * 登录
 * @param data
 */
export const GetUserByToken = (data: API.USERS.PostToken) =>
    Axios.post<API.BaseResponse<API.USERS.UserInfoWithToken>>(
        `${API_PROFIX}/account/tokens`,
        data
    ).then((r) => r?.data)

/**
 * 创建用户
 * @param d
 */
export const PostUser = (d: API.USERS.PostUser) =>
    Axios.post<API.BaseResponse<any>>(`${API_PROFIX}/account/users`, d).then(
        (r) => r.data
    )
