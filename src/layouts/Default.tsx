import { defineComponent } from "vue";
import { DEFAULT_LAYOUT_NAME } from "../constants";

const DefaultLayout = defineComponent({
  name: DEFAULT_LAYOUT_NAME,
  render() {
    return (
      <>
        <div class="default-layout">
          <div>默认布局</div>
          <div>
            {this.$slots && this.$slots.default && this.$slots.default()}
          </div>
        </div>
      </>
    );
  },
});

export default DefaultLayout;
