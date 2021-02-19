import { createStore } from "vuex";
import { GetUserInfo } from "../api/user";
import { RemoveTokenCookies } from "../utils/cookie";
import { ACTIONS, MUTATIONS } from "./type";

export type StoreType = {
  User: Partial<API.USERS.UserInfo>; // 所有变成可选参数  oooops  Required
};

const Store = createStore<StoreType>({
  state() {
    return {
      User: {},
    };
  },
  mutations: {
    // 更新store
    [MUTATIONS.UPDATE_USER_STORE](
      state: StoreType,
      payload: API.USERS.UserInfo
    ) {
      state.User = {
        ...payload,
      };
    },
    // 重置store
    [MUTATIONS.RESET_USER_STORE]() {
      Store.commit(MUTATIONS.UPDATE_USER_STORE, {});
      RemoveTokenCookies();
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
  },
});

export default Store;
