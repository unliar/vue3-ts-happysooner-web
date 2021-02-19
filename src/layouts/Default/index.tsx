import { defineComponent } from "vue";
import { DEFAULT_LAYOUT_NAME } from "../../constants";
import Footer from "../../components/Footer.vue";
import "./index.css";
const DefaultLayout = defineComponent({
  name: DEFAULT_LAYOUT_NAME,
  render() {
    return (
      <>
        <div class="default-layout">
          <div>默认布局</div>
          <main class="main-container">{this.$slots.default?.()}</main>
          <Footer></Footer>
        </div>
      </>
    );
  },
});

export default DefaultLayout;
