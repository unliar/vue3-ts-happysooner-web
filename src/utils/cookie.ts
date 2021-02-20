import Cookies from "js-cookie";
import { TOKEN_NAME } from "../constants/index";
// 设置cookie
export const SetTokenCookies = (token: string, days?: number) => {
    Cookies.set(TOKEN_NAME, token, { expires: days ?? 365, sameSite: "Lax" });
};

// 删除cookie
export const RemoveTokenCookies = () => {
    Cookies.remove(TOKEN_NAME, {
        sameSite: "Lax",
    });
};

// 获取cookie
export const GetTokenCookies: () => string = () => {
    return Cookies.get(TOKEN_NAME) || "";
};
