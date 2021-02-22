<script lang="ts" setup>
import { onMounted, reactive, defineProps, computed } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import type { StoreType } from "~/store/index";
import { GetCommentList, PostComment } from "~/api/article";
import { DefaultFormat } from "~/utils/time";

const props = defineProps({
    postId: Number,
    authorId: Number,
});

const toast = useToast();
const router = useRouter();
const store = useStore<StoreType>();

const isAuthed = computed(() => store?.state?.User?.Id ?? 0 > 0);

// 评论值
// ref: Comment = ""
const Comment = reactive<{
    text: string;
    submitting: boolean;
    list: API.ARTICLE.CommentItem[];
    listLoading: boolean;
    page: number;
    loaded: boolean;
}>({
    text: "",
    submitting: false,
    list: [],
    listLoading: false,
    page: 1,
    loaded: false,
});

// 提交评论
const SubmitComment = () => {
    if (!Comment.text) {
        toast.warning("评论不能为空");
        return;
    }
    if (Comment.submitting) {
        toast.warning("评论过快");
        return;
    }
    Comment.submitting = true;
    PostComment({
        PostID: props.postId || -1,
        AuthorUID: props.authorId || -1,
        Content: `${Comment.text}      ____ From Vue-next`,
    })
        .then(r => {
            if (r?.ErrorCode) {
                // 河蟹词
                if (r.ErrorCode === 3000009) {
                    toast.warning("触发敏感词,请礼貌用语~");
                    return;
                }

                if (r.ErrorCode === 403) {
                    toast.info("登录状态过期,跳转登录中...", {
                        timeout: 1500,
                        onClose() {
                            router.push("/signin");
                        },
                    });
                    return;
                }
                toast.warning(`评论出错: ${r.ErrorCode} ${r.ErrorMsg}`);
                return;
            }
            toast.success("评论成功~");
            Comment.text = "";

            Comment.listLoading = true;
            GetCommentList({
                Page: 1,
                Size: 15,
                PostID: props.postId || -1,
            })
                .then(r => {
                    const comments = r?.Result?.Comments ?? [];
                    Comment.list = comments;
                })
                .finally(() => {
                    Comment.listLoading = false;
                });
        })
        .finally(() => {
            Comment.submitting = false;
        });
};

// 前往登录
const ToLogin = () => {
    router.push("/signin");
};
// init
const TimeFomat = DefaultFormat;

onMounted(() => {
    Comment.listLoading = true;
    Comment.page = 1;
    Comment.loaded = false;
    GetCommentList({
        PostID: props.postId || 0,
        Page: 1,
        Size: 15,
    })
        .then(r => {
            const comments = r?.Result?.Comments ?? [];
            Comment.list = comments;
            if (comments.length === 15) {
                Comment.loaded = false;
            } else {
                Comment.loaded = true;
            }
            if (r.ErrorCode) {
                toast.warning(r.ErrorMsg);
            }
        })
        .finally(() => {
            Comment.listLoading = false;
        });
});

// 加载更多
const LoadMore = () => {
    Comment.page += 1;
    Comment.listLoading = true;
    GetCommentList({
        PostID: props.postId || -1,
        Page: Comment.page,
        Size: 15,
    })
        .then(r => {
            const comments = r?.Result?.Comments ?? [];
            if (comments.length === 15) {
                Comment.loaded = false;
            } else {
                Comment.loaded = true;
            }
            Comment.list = [...Comment.list, ...comments];
        })
        .finally(() => {
            Comment.listLoading = false;
        });
};
</script>

<template>
    <div class="comment-container">
        <div class="comment-send">
            <div class="comment-input">
                <textarea
                    placeholder="说说你的看法吧~ , ctrl + enter 可快速提交。"
                    v-model.trim="Comment.text"
                    @keydown.ctrl.enter="SubmitComment"
                ></textarea>
            </div>
            <div class="comment-btn" @click="SubmitComment" v-if="isAuthed">
                发表评论
            </div>
            <div class="comment-btn" @click="ToLogin" v-else>登录发表评论</div>
        </div>
        <div class="comment-title">
            <span>文章交流区</span>
        </div>
        <div class="comment-list">
            <transition-group name="list">
                <div
                    class="comment-item"
                    v-for="(i, index) in Comment.list"
                    :key="i.Id"
                >
                    <div class="comment-avatar">
                        <router-link :to="`/users/${i.CommentUserInfo.UID}`">
                            <Avatar
                                size="32px"
                                :src="i.CommentUserInfo.Avatar"
                            />
                        </router-link>
                    </div>
                    <div class="comment-content">
                        <div class="main-comment">
                            <div class="comment-user-info">
                                <span class="floor"
                                    >#{{ Comment.list.length - index }}</span
                                >
                                <router-link
                                    :to="`/users/${i.CommentUserInfo.UID}`"
                                >
                                    {{ i.CommentUserInfo.Nickname }}
                                </router-link>
                                <span class="badge">
                                    <sup
                                        v-if="
                                            i.CommentUserInfo.UID ==
                                            $props.authorId
                                        "
                                        class="author"
                                        >本文作者</sup
                                    >
                                    <sup
                                        class="role"
                                        v-for="tx in i.CommentUserInfo.Roles"
                                        :key="tx.RID"
                                        >{{ tx.Description }}</sup
                                    >
                                </span>
                                <span class="time">{{
                                    TimeFomat(i.CreatedAt)
                                }}</span>
                            </div>
                            <div class="main-content">{{ i.Content }}</div>
                        </div>
                    </div>
                </div>
            </transition-group>
            <div
                v-if="Comment.list.length === 0 && !Comment.listLoading"
                class="empty-content"
            >
                暂无任何评论,快去发表吧~
            </div>
            <LoadingBall
                :loading="Comment.list.length > 0 && Comment.listLoading"
            ></LoadingBall>
            <div
                class="btn-next"
                @click="LoadMore"
                v-if="!Comment.loaded && !Comment.listLoading"
            >
                查看更多
            </div>
        </div>
    </div>
</template>

<style scoped>
.comment-container {
    margin-top: 50px;
    color: #444;
}
.comment-title {
    padding: 10px 0;
    font-weight: bold;
}
.btn-next {
    width: 80px;
    text-align: center;
    margin: 20px auto;
    cursor: pointer;
    height: 32px;
    line-height: 32px;
    border: 1px solid #efefef;
    border-radius: 3px;
}
.btn-next:hover {
    background: #999;
    color: white;
}
.comment-item {
    display: flex;
    padding: 5px;
    margin: 10px 0;
}
.comment-item:hover {
    background: #e3e3e3;
}
.comment-content {
    flex: 1;
}
.sub-comment {
    padding: 0 20px;
}
.main-content {
    line-height: 1.5;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 20px;
}
.comment-content {
    padding: 0px 10px;
}
.comment-user-info {
    font-size: 14px;
    margin-bottom: 5px;
}
.comment-send {
    overflow: hidden;
    position: relative;
    width: 100%;
}
.comment-input {
    position: relative;
    display: flex;
}
.comment-btn {
    float: right;
    padding: 0 10px;
    margin: 5px 0;
    height: 32px;
    line-height: 32px;
    border: 1px solid #efefef;
    border-radius: 3px;
    cursor: pointer;
}
.comment-input textarea {
    flex: 1;
    height: 80px;
    border: 1px solid #efefef;
    font-size: 14px;
    line-height: 1.5;
    padding: 10px;
    border-radius: 5px;
    -webkit-appearance: none;
}
textarea:focus {
    outline: none;
}

.comment-user-info {
    display: flex;
    align-items: center;
}
.time {
    padding: 0 10px;
}
.floor {
    color: #999;
    padding-right: 10px;
}
.empty-content {
    text-align: center;
    padding: 40px;
    font-size: 14px;
}
.badge sup {
    margin-left: 5px;
    height: 18px;
    line-height: 18px;
    min-width: 9px;
    border-radius: 12px;
    padding: 0 5px;
    text-align: center;
    font-size: 12px;
    color: #fff;
}
.badge sup.author {
    background-color: #f96268;
}
.badge sup.role {
    background-color: #ff5b05;
}
</style>
