import { createStore } from "vuex";
import { GetCategories } from "~/api/article";
import { GetUserInfo } from "~/api/user";
import { RemoveTokenCookies } from "~/utils/cookie";
import { ACTIONS, MUTATIONS } from "./type";

export type StoreType = {
    User: Partial<API.USERS.UserInfo>; // 所有变成可选参数  oooops  Required
    Article: {
        CategoryList: API.ARTICLE.Category[];
    };
};

/**
 * @deprecated 废弃
 */
const Store = createStore<StoreType>({
    state() {
        return {
            User: {},
            Article: {
                CategoryList: [],
            },
        };
    },
    mutations: {
        // 更新用户store
        [MUTATIONS.UPDATE_USER_STORE](
            state: StoreType,
            payload: API.USERS.UserInfo
        ) {
            state.User = {
                ...payload,
            };
        },
        // 重置用户store
        [MUTATIONS.RESET_USER_STORE]() {
            Store.commit(MUTATIONS.UPDATE_USER_STORE, {});
            RemoveTokenCookies();
        },
        // 更新主题列表
        [MUTATIONS.UPDATE_CATEGORY_LIST](
            state: StoreType,
            payload: API.ARTICLE.Category[]
        ) {
            state.Article.CategoryList = payload;
        },
    },
    actions: {
        // 获取认证用户信息
        async [ACTIONS.GET_AUTHED_USER_INFO](ctx) {
            const r = await GetUserInfo();
            const data = r?.Result ?? {};
            ctx.commit(MUTATIONS.UPDATE_USER_STORE, data);
        },
        // 获取主题列表
        async [ACTIONS.GET_CATEGORY_LIST](ctx) {
            const r = await GetCategories();
            const List = r?.Result?.List ?? [];
            ctx.commit(MUTATIONS.UPDATE_CATEGORY_LIST, List);
        },
    },
});

export default Store;
