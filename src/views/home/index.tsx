import { defineComponent, watch, onMounted, reactive } from "vue";
import { GetArticles } from "../../api/article";

import ContentLayout from "../../layouts/Content";
import DefaultLayout from "../../layouts/Default";
import ArticleItem from "../../components/article/item.vue";
export default defineComponent({
  name: "App",
  props: {
    query: {
      type: Object as () => API.ARTICLE.GetArticleListRequest,
    },
  },
  setup(props) {
    const data = reactive<{
      List: API.ARTICLE.ArticleInfo[];
      q: API.ARTICLE.GetArticleListRequest;
    }>({
      List: [],
      q: props.query || {},
    });
    // 获取数据
    const getList = (req: API.ARTICLE.GetArticleListRequest) =>
      GetArticles(req).then((r) => r.Result?.Articles ?? []);

    onMounted(async () => {
      const list = await getList(props.query ?? {});
      data.List = [...list];
    });
    watch(
      () => props.query,
      async (next, _) => {
        data.q = next || {};
        const list = await getList(next ?? {});
        data.List = [...list];
      }
    );

    return { data };
  },
  render() {
    const { List, q } = this.data;
    return (
      <DefaultLayout>
        <ContentLayout>
          {List.length === 0 && <div>无数据</div>}
          {List.map((i) => (
            <ArticleItem key={i.Id} info={i}></ArticleItem>
          ))}
          <div
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            {q.Page && q.Page >= 2 ? (
              <router-link
                to={`/?Page=${q.Page - 1}&OrderType=${q.OrderType || "desc"}`}
              >
                <>上一页</>
              </router-link>
            ) : null}

            {List.length == 15 && (
              <router-link
                to={`/?Page=${q.Page ? +q.Page + 1 : 2}&OrderType=${
                  q.OrderType || "desc"
                }`}
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
    ArticleItem,
  },
});
