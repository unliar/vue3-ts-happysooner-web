import { defineComponent, ref } from "vue";

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
    // 当使用jsx语法 需要pid.value
    return () => (
      <>
        <div onClick={() => Add()}>文章详情{pid.value}</div>
      </>
    );
  },
  //   render() {
  //     const { Add, pid } = this;
  //     return <div onClick={() => Add()}>文章详情{pid}</div>;
  //   },
});

export default PostDetail;
