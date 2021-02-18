<template></template>;

import DefaultLayout from "../../layouts/Default";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {},
  render() {
    const router = useRouter();
    return (
      <DefaultLayout>
        <slot>
          <div
            onClick={() => {
              router.push("/post/1");
            }}
          >
            Home Page!
          </div>
        </slot>
      </DefaultLayout>
    );
  },
  components: {
    DefaultLayout,
  },
});
