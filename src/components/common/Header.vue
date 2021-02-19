
<template>
    <header class="happy-header-container">
        <div class="happy-header-wrapper">
            <div class="title-container">
                <div class="title" @click="ToIndex">{{ title }}</div>
                <div class="brief">{{ brief }}</div>
                <!-- <FontIcon iconClass="iconsousuo" /> -->
            </div>
            <div class="tools-container">
                <span v-if="isLogin" class="tools-user user-center">
                    <a>登录/注册</a>
                </span>
                <span v-else class="tools-user user-action-btn">
                    <a>登录/注册</a>
                </span>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';
import { UserStoreType } from '../../store';
import FontIcon from "./FontIcon.vue"
export default defineComponent({
    name: "common-header",
    props: {
        title: {
            type: String,
            required: true
        },
        brief: {
            type: String,
        }
    },
    components: {
        FontIcon
    },
    setup(props, _) {
        const store = useStore<UserStoreType>()
        // 判断用户是否作者
        const isAuthor = computed(() => !!store.state.Roles.find((i: API.USERS.Role) => i.Title == "Author"))
        // 判断用户是否登录
        const isLogin = computed(() => store.state.UserID > 0)
        // 获取用户ID
        const userId = computed(() => store.state.UserID)
        // 获取用户昵称
        const nickname = computed(() => store.state.Nickname)

        return {
            title: props.title,
            brief: props.brief ?? "摘要",
            isAuthor: isAuthor,
            isLogin: isLogin,
            userId: userId,
            nickname: nickname,
        }
    },
    methods: {
        ToIndex() {
            window.location.href = "/"
        }
    },
})
</script>

<style scoped>
.happy-header-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #6a6a6a;
    margin: 0 auto;
}
.title:hover {
    color: black;
}
.title {
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
}
.brief {
    font-size: 14px;
}
.tools-user {
    font-size: 14px;
}
.tools-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
