import { defineComponent, onMounted, reactive } from "vue";

import { GetCategories } from "../../api/article";

import "./index.css";
const DefaultLayout = defineComponent({
  name: "content-layout",
  setup() {
    let r = reactive<{ list: API.Article.Category[] }>({ list: [] });
    onMounted(async () => {
      const d = await GetCategories();
      r.list = d.Result?.List ?? [];
    });
    return {
      r,
    };
  },
  render() {
    const { r } = this;
    return (
      <div class="content-layout-container">
        <div class="content-layout-child-container">
          {this.$slots.default?.()}
        </div>
        <div class="content-layout-widget-container">
          <div class="widget-category">
            <div class="category-title">目录分类</div>
            <ul class="category-list">
              {r.list.map((i) => (
                <li class="category-item" key={i.Id}>
                  <router-link to={`/?CategoryID=${i.Id}`}>
                    <>{i.CN}</>
                  </router-link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  },
});

export default DefaultLayout;
