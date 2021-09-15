import { defineStore } from "pinia";
import { GetCategories } from "~/api/article";
import { GetUserInfo } from "~/api/user";
import { RemoveTokenCookies } from "~/utils/cookie";

export const useStore = defineStore("PiniaStore", {
    state: () => {
        return {
            User: {} as Partial<API.USERS.UserInfo>,
            Article: {
                CategoryList: [] as API.ARTICLE.Category[],
            },
        };
    },
    actions: {
        // 获取主题列表
        async GetCategoryList() {
            const r = await GetCategories();
            const List = r?.Result?.List ?? [];
            this.Article.CategoryList = List;
        },
        // 获取登录用户信息
        async GetAuthedUserInfo() {
            const r = await GetUserInfo();
            const data = r?.Result ?? {};
            this.User = data;
        },
        // 重置登录
        async ResetUserStore() {
            this.User = {};
            RemoveTokenCookies();
        },
    },
});
