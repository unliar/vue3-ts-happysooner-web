<template>
    <div class="signin-container">
        <div class="signin-main">
            <div class="signin-title">
                <div>嘿;-) 好巧在这里遇到您.</div>
                <div>
                    <router-link to="/">
                        这里是远浅自建用来叨叨的网站,
                        要是您懒得注册可以直接点这里去逛逛。
                    </router-link>
                </div>
            </div>
            <div class="signin-info">
                直接输入登录名称开始探险叭~我们很智能哒~会自动帮你切换登录/注册
            </div>
            <div class="signin-form">
                <div class="form-account">
                    <input
                        type="text"
                        name="account"
                        id="account"
                        v-model.trim="account"
                        placeholder="账户登录名称,字母开头的5-16位数字和字母组合"
                    />
                </div>
                <div v-if="isNewUser">
                    <input
                        type="text"
                        name="nickname"
                        id="nickname"
                        v-model.trim="nickname"
                        placeholder="用户昵称"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        v-model.trim="password"
                        placeholder="登录密码"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        class="btn-login-register"
                        v-if="isNewUser"
                        @click="Regist"
                    >
                        立即注册
                    </button>
                    <button
                        type="button"
                        class="btn-login-register"
                        v-else
                        @click="Login"
                    >
                        立即登录
                    </button>
                </div>
            </div>
            <div class="summary">
                注册一下不会有任何损失,甚至会变得更加
                <del>沙雕</del>
                快乐。
                <template v-if="currentUserID"
                    >很少有人让我心动 但你是第{{ currentUserID }}个。</template
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useStore } from "~/store/pinia";

// 不经意的分割线
import { GetAccountUnique, GetUserByToken, PostUser } from "~/api/user";
import type { StoreType } from "~/store";
import { ACTIONS } from "~/store/type";
import { SetTokenCookies } from "~/utils/cookie";
import { ValidateLoginNameRules } from "~/utils/validate";

const toast = useToast();
const store = useStore();
const router = useRouter();

const account = ref("");
const nickname = ref("");
const password = ref("");
const isNewUser = ref(false);
const currentUserID = computed(() => store.User.Id);

watch(account, cur => {
    if (!cur.trim()) {
        return;
    }
    GetAccountUnique({
        type: "loginName",
        value: cur.trim(),
    }).then(r => {
        if (r.Result === 1000005) {
            isNewUser.value = false;
        } else {
            isNewUser.value = true;
        }
    });
});

const Login = async () => {
    const x = ValidateLoginNameRules(account.value.trim());
    if (x) {
        toast.error(x);
        return;
    }

    const data = await GetUserByToken({
        type: "loginName",
        value: account.value.trim(),
        password: password.value.trim(),
    });

    if (data?.ErrorCode || !data?.Result) {
        toast.error(`${data.ErrorCode} ${data.ErrorMsg}`);
        return;
    }

    // 设置用户登录状态
    const Token = data.Result.Token;
    const TokenExp = data.Result.TokenAvailableDays;
    SetTokenCookies(Token, TokenExp);
    // 获取用户信息
    store.GetAuthedUserInfo();
    toast.success(`欢迎 ${data?.Result.UserInfo.Nickname} 前来观光`, {
        onClose() {
            router.back();
        },
    });
};

const Regist = async () => {
    const x = ValidateLoginNameRules(account.value.trim());
    if (x) {
        toast.error(x);
        return;
    }

    const data = await PostUser({
        type: "loginName",
        value: account.value.trim(),
        password: password.value.trim(),
        nickname: nickname.value.trim(),
    });

    if (!data.ErrorCode) {
        toast.success(`注册成功,即将自动登录~ ${account.value}`, {
            onClose() {
                Login();
            },
        });
    }
};
</script>
<style scoped>
.signin-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 15px;
}
.signin-container div {
    padding: 15px 0px;
    margin: 0 auto;
    width: 100%;
}

.title {
    font-size: 24px;
    padding: 15px 0;
    font-weight: 500;
    color: #262626;
}
.summary {
    font-size: 12px;
    color: #6a6a6a;
}
.signin-title {
    text-align: center;
}
.signin-info {
    font-size: 12px;
}
div input,
div button {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #999;
    font-size: 14px;
    box-sizing: border-box;
}
.signin-info span {
    font-weight: bolder;
}
.signin-main {
    max-width: 750px;
    overflow: hidden;
}
.btn-login-register {
    background-color: #f5f5f5;
    opacity: 0.5;
}
.btn-login-register:hover {
    opacity: 1;
}
</style>
