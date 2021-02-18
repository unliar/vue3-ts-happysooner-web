import { createStore } from "vuex";

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
    UpdateStore(state: UserStoreType, payload: UserStoreType) {
      state = {
        ...payload,
      };
    },
    // 重置store
    ResetStore(state: UserStoreType) {
      Store.commit("UpdateStore", { ...InitUserStore });
    },
  },
  actions: {
    GetAuthedUserInfo(ctx) {
      console.log(ctx);
    },
  },
});

export default Store;
