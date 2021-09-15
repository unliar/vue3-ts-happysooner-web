import { useStore } from "~/store/pinia";

import "./index.css";
const DefaultLayout = defineComponent({
    name: "content-layout",
    setup() {
        const store = useStore();
        return {
            CategoryList: computed(() => store.Article.CategoryList),
        };
    },
    render() {
        const { CategoryList } = this;
        return (
            <div class="content-layout-container">
                <div class="content-layout-child-container">
                    {this.$slots.default?.()}
                </div>
                <div class="content-layout-widget-container">
                    <div class="widget-category">
                        <div class="category-title">目录分类</div>
                        <ul class="category-list">
                            {CategoryList.map(i => (
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
