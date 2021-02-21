<template>
    <DefaultLayout>
        <LoadingBall
            :loading="r.loading"
            info="努力加载文章中"
            info-size="18px"
            padding="30vh 0"
        ></LoadingBall>
        <main v-if="!r.loading">
            <h1 class="article-title">{{ r.data?.Title }}</h1>
            <div class="artilce-info">
                <span>
                    <router-link :to="`/users/${r.data?.AuthorInfo?.UID}`">
                        <a>{{ r.data?.AuthorInfo?.Nickname }}</a>
                    </router-link>
                </span>
                <span>发表于: {{ r.fromNow }}</span>
                <span>
                    分类:
                    <router-link :to="`/?CategoryID=${r.data?.Category?.Id}`">{{
                        r.data?.Category?.CN
                    }}</router-link>
                </span>
            </div>
            <div
                v-html="r.data?.Content"
                class="article-container"
                v-highlight
            ></div>
            <div class="article-navi">
                <div>
                    <router-link
                        v-if="r.data?.Navigation?.Prev?.Id"
                        :to="`/post/${r.data?.Navigation?.Prev?.Id}`"
                    >
                        上一篇 «
                        {{ r.data?.Navigation?.Prev?.Title }}
                    </router-link>
                </div>
                <div>
                    <router-link
                        v-if="r.data?.Navigation?.Next?.Id"
                        :to="`/post/${r.data?.Navigation?.Next?.Id}`"
                    >
                        下一篇 »
                        {{ r.data?.Navigation?.Next?.Title }}
                    </router-link>
                </div>
            </div>
            <Comment
                :author-id="r.data?.AuthorInfo?.UID"
                :post-id="r.data?.Id"
            ></Comment>
        </main>
    </DefaultLayout>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, watch } from "vue";
import { useToast } from "vue-toastification";
import { useHead } from "@vueuse/head";

import markdownIt from "~/utils/md";
import DefaultLayout from "~/layouts/Default";
import Comment from "~/components/article/Comment.vue";
import { GetArticleById } from "~/api/article";
import { FromNow } from "~/utils/time";

export default defineComponent({
    props: {
        pid: {
            required: true, // props 是否必要
            type: Number, // props 类型
            validator: (v: String) => !isNaN(+v), // 自定义校验器
        },
    },
    setup(props) {
        const toast = useToast();

        const r = reactive<{
            data?: Partial<API.ARTICLE.ArticleInfo>;
            loading: boolean;
            fromNow: string;
        }>({
            data: {},
            loading: false,
            fromNow: "",
        });

        useHead({
            title: computed(() => `${r.data?.Title ?? ""}`),
            meta: [
                {
                    name: `description`,
                    content: computed(
                        () =>
                            `${r.data?.AuthorInfo?.Nickname}发表了${r.data?.Title},${r.data?.Summary}`
                    ),
                },
                {
                    name: "author",
                    content: computed(() => `${r.data?.AuthorInfo?.Nickname}`),
                },
            ],
        });
        const fetchData = (id: number) => {
            r.loading = true;
            GetArticleById(id)
                .then(data => {
                    if (data?.Result?.Content) {
                        data.Result.Content = markdownIt.render(
                            data.Result.Content
                        );
                    } else {
                        toast.error(data.ErrorMsg ?? "请求该文章出错");
                        return;
                    }
                    r.data = data.Result;
                    r.fromNow = FromNow(data.Result.CreatedAt);
                })
                .finally(() => {
                    r.loading = false;
                });
        };

        onMounted(async () => {
            fetchData(props.pid);
        });

        watch(
            () => props.pid,
            next => {
                fetchData(next);
            }
        );

        return {
            r,
        };
    },
    components: {
        DefaultLayout,
        Comment,
    },
    directives: {},
});
</script>
<style scoped>
main {
    padding: 10px 0;
}
.artilce-info span {
    padding-right: 10px;
    color: #666;
    font-size: 14px;
}
.article-navi {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 0;
}
.article-navi div {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.article-navi div a {
    color: #008080;
    border-bottom: 1px solid #008080;
}
</style>
