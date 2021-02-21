import { defineComponent, watch, onMounted, reactive } from "vue";
import { useHead } from "@vueuse/head";

import { GetArticles } from "~/api/article";
import ContentLayout from "~/components/layouts/Content";
import DefaultLayout from "~/components/layouts/Default";
import SimpleInfoItem from "~/components/article/SimpleInfoItem.vue";
import LoadingBall from "../../components/common/LoadingBall/index.vue";
export default defineComponent({
    name: "home-views",
    props: {
        query: {
            type: Object as () => API.ARTICLE.GetArticleListRequest,
        },
    },
    setup(props) {
        const data = reactive<{
            List: API.ARTICLE.ArticleInfo[];
            q: API.ARTICLE.GetArticleListRequest;
            loading: boolean;
        }>({
            List: [],
            q: props.query || {},
            loading: false,
        });
        useHead({
            title: "远浅 - 给世界献上美好的祝福 - Vue3实战项目",
        });
        // 获取数据
        const getList = (req: API.ARTICLE.GetArticleListRequest) => {
            data.loading = true;
            data.List = [];
            return GetArticles(req)
                .then(r => {
                    data.List = [...(r.Result?.Articles ?? [])];
                })
                .finally(() => {
                    data.loading = false;
                });
        };

        onMounted(async () => {
            await getList(props.query ?? {});
        });
        watch(
            () => props.query,
            async (next, _) => {
                data.q = next || {};
                await getList(next ?? {});
            }
        );

        return { data };
    },
    render() {
        const { List, q, loading } = this.data;
        return (
            <DefaultLayout>
                <ContentLayout>
                    <LoadingBall
                        padding="30vh 0"
                        loading={loading}
                        infoSize="18px"
                    ></LoadingBall>

                    {List.map(i => (
                        <SimpleInfoItem key={i.Id} info={i}></SimpleInfoItem>
                    ))}
                    <div
                        style={{
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        {q.Page && q.Page >= 2 ? (
                            <router-link
                                to={`/?Page=${q.Page - 1}&OrderType=${
                                    q.OrderType || "desc"
                                }`}
                            >
                                <>上一页</>
                            </router-link>
                        ) : null}

                        {List.length == 15 && (
                            <router-link
                                to={`/?Page=${
                                    q.Page ? +q.Page + 1 : 2
                                }&OrderType=${q.OrderType || "desc"}`}
                            >
                                <>下一页</>
                            </router-link>
                        )}
                    </div>
                </ContentLayout>
            </DefaultLayout>
        );
    },
    components: {
        ContentLayout,
        DefaultLayout,
        SimpleInfoItem,
    },
});
