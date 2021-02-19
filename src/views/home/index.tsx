import DefaultLayout from "../../layouts/Default";
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      console.log("ooooops", "home mounted");
    });
  },
  render() {
    const router = useRouter();
    return (
      <DefaultLayout>
        <main>
          <div
            onClick={() => {
              router.push("/post/1");
            }}
          >
            Home Page!
          </div>
        </main>
      </DefaultLayout>
    );
  },
  components: {
    DefaultLayout,
  },
});
