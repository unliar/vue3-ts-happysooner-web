import ContentLayout from "../../layouts/Content";
import DefaultLayout from "../../layouts/Default";

import { defineComponent, watch, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  props: {
    query: {
      type: Object,
    },
  },
  setup(props) {
    const data = reactive<{
      List: any[];
    }>({
      List: [],
    });
    watch(
      () => props.query,
      (next, pre) => {
        console.log(pre, "监听路由数据", next);
      }
    );
    return { data };
  },
  render() {
    const router = useRouter();
    return (
      <DefaultLayout>
        <ContentLayout>
          <main>
            <div
              onClick={() => {
                router.push("/post/1");
              }}
            >
              Home Page! {this.data.List.length}
            </div>
          </main>
        </ContentLayout>
      </DefaultLayout>
    );
  },
  components: {
    ContentLayout,
    DefaultLayout,
  },
});
