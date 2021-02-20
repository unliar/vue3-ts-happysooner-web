
<template>
    <DefaultLayout>
        <div style="padding: 30vh 0" v-if="r.loading">
            <LoadingBall :loading="true"></LoadingBall>
        </div>
        <main>
            <h1 class="article-title">{{ r.data?.title }}</h1>
            <div>作者：{{ r.data?.author }}</div>
            <div class="article-container" v-html="r.data?.content"></div>
            <div class="article-nav-container">
                <div class="article-nav">
                    <router-link :to="`/daily-articles?date=${r.data?.date?.prev}`">
                        <a>查看{{ r.data?.date?.prev }}的文章</a>
                    </router-link>
                </div>
            </div>
        </main>
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, reactive } from 'vue'
import { GetMeiRiYiWen } from '../../api/article';

import DefaultLayout from "../../layouts/Default";
import LoadingBall from "../../components/common/LoadingBall.vue";

export default defineComponent({
    components: {
        DefaultLayout,
        LoadingBall
    },
    props: {
        query: {
            type: Object as () => { date: string }
        }
    },
    setup(props) {
        const r = reactive<{
            data?: Partial<API.ARTICLE.MeiRiYiWenData>,
            loading: boolean,
            q: typeof props.query
        }>({
            data: {},
            loading: false,
            q: props.query
        })
        const getData = (req: typeof props.query) => {
            r.loading = true
            const type = req?.date ? "day" : "random";
            GetMeiRiYiWen(type, req?.date).then(({ data }) => {
                r.data = data?.Result
                r.q = req
            }).finally(() => {
                r.loading = false
            })
        }
        onMounted(() => {
            getData(r.q)
        })
        watch(
            () => props.query,
            async (next, _) => {
                await getData(next);
            }
        );
        return {
            r
        }
    }
})
</script>

<style scoped>
main {
    padding: 20px 0;
}
.article-nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.article-nav-container a {
    color: #008080;
}
</style>