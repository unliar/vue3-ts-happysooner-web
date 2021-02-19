import { createStore } from "vuex";
import { GetCategories } from "../api/article";
import { GetUserInfo } from "../api/user";
import { RemoveTokenCookies } from "../utils/cookie";
import { ACTIONS, MUTATIONS } from "./type";

export type StoreType = {
  User: Partial<API.USERS.UserInfo>; // 所有变成可选参数  oooops  Required
  Article: {
    CategoryList: API.Article.Category[];
  };
};

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
      payload: API.Article.Category[]
    ) {
      state.Article.CategoryList = payload;
    },
  },
  actions: {
    // 获取认证用户信息
    async [ACTIONS.GET_AUTHED_USER_INFO](ctx) {
      const r = await GetUserInfo();
      const data = r?.Result;
      if (data) {
        console.info("用户信息获取成功", data);
        ctx.commit(MUTATIONS.UPDATE_USER_STORE, data);
      }
    },
    // 获取主题列表
    async [ACTIONS.GET_CATEGORY_LIST](ctx) {
      const r = await GetCategories();
      const data = r?.Result;
      if (data) {
        console.log("获取主题信息");
        ctx.commit(MUTATIONS.UPDATE_CATEGORY_LIST, data?.List ?? []);
      }
    },
  },
});

export default Store;
