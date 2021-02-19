import { defineComponent } from "vue";
import { DEFAULT_LAYOUT_NAME } from "../../constants";
import Footer from "../../components/common/Footer.vue";
import Header from "../../components/common/Header.vue";

import "./index.css";
const DefaultLayout = defineComponent({
  name: DEFAULT_LAYOUT_NAME,
  render() {
    return (
      <>
        <div class="default-layout">
          <Header title="远浅"></Header>
          <main class="main-container">{this.$slots.default?.()}</main>
          <Footer></Footer>
        </div>
      </>
    );
  },
});

export default DefaultLayout;
