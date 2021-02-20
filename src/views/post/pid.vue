

<template>
    <DefaultLayout>
        <div v-if="r.loading" style="padding:30vh 0">
            <LoadingBall :loading="r.loading"></LoadingBall>
        </div>
        <main v-else>
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
                    <router-link
                        :to="`/?CategoryID=${r.data?.Category?.Id}`"
                    >{{ r.data?.Category?.CN }}</router-link>
                </span>
            </div>
            <div v-html="r.data?.Content" class="article-container" v-highlight></div>
        </main>
    </DefaultLayout>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, } from 'vue'
import { useToast } from "vue-toastification";
import { useHead } from '@vueuse/head'

import markdownIt from "~/utils/md"
import DefaultLayout from "~/layouts/Default";
import { GetArticleById } from '~/api/article';
import LoadingBall from "~/components/common/LoadingBall.vue"
import { FromNow } from '~/utils/time';


export default defineComponent({
    props: {
        pid: {
            required: true, // props 是否必要
            type: String, // props 类型
            validator: (v: String) => !isNaN(+v), // 自定义校验器
        },
    },
    setup(props) {
        const toast = useToast();

        const r = reactive<{
            data?: Partial<API.ARTICLE.ArticleInfo>,
            loading: boolean,
            fromNow: string
        }>({
            data: {},
            loading: false,
            fromNow: ""
        })
        useHead({
            title: computed(() => `${r.data?.Title ?? ""}`),
            meta: [
                {
                    name: `description`,
                    content: computed(() => `${r.data?.AuthorInfo?.Nickname}发表了${r.data?.Title},${r.data?.Summary}`),
                }, {
                    name: "author",
                    content: computed(() => `${r.data?.AuthorInfo?.Nickname}`)
                }
            ],
        })
        onMounted(async () => {
            r.loading = true
            GetArticleById(props.pid).then((data) => {
                if (data?.Result?.Content) {
                    data.Result.Content = markdownIt.render(data.Result.Content)
                } else {
                    toast.error(data.ErrorMsg ?? "请求该文章出错")
                    return
                }
                r.data = data.Result
                r.fromNow = FromNow(data.Result.CreatedAt)
            }).finally(() => {
                r.loading = false

            })
        })


        return {
            r
        }
    },
    components: {
        DefaultLayout,
        LoadingBall
    },
    directives: {

    }

})
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
</style>