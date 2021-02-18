import { createStore } from "vuex";
import { RemoveTokenCookies } from "../utils/cookie";
import { ACTIONS, MUTATIONS } from "./type";

export const InitUserStore = {
  UserID: 0,
  Avatar: "",
  Nickname: "",
  Roles: [],
};

type UserStoreType = typeof InitUserStore;

const Store = createStore({
  state() {
    return {
      ...InitUserStore,
    };
  },
  mutations: {
    // 更新store
    [MUTATIONS.UPDATE_STORE](state: UserStoreType, payload: UserStoreType) {
      state.Avatar = payload.Avatar;
      state.Nickname = payload.Nickname;
      state.Roles = payload.Roles;
      state.UserID = payload.UserID;
    },
    // 重置store
    [MUTATIONS.RESET_STORE]() {
      Store.commit(MUTATIONS.UPDATE_STORE, { ...InitUserStore });
      RemoveTokenCookies();
    },
  },
  actions: {
    // 获取认证用户信息
    [ACTIONS.GET_AUTHED_USER_INFO](ctx) {
      console.log("GetAuthedUserInfo", ctx);
    },
  },
});

export default Store;
