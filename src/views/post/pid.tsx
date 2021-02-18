import { defineComponent, ref } from "vue";
import styles from "./pid.module.css";

const PostDetail = defineComponent({
  name: "post-detail",
  props: {
    pid: {
      required: true, // props 是否必要
      type: String, // props 类型
      validator: (v: String) => !isNaN(+v), // 自定义校验器
    },
  },
  setup(props) {
    const pid = ref(props.pid);
    const Add = () => {
      pid.value = `${+pid.value + 1}`;
    };
    return {
      Add,
      pid,
    };
  },
  render() {
    const { Add, pid } = this;
    return (
      <div class={styles.btn} onClick={() => Add()}>
        文章详情{pid}
      </div>
    );
  },
});

export default PostDetail;
