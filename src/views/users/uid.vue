
<template>
    <DefaultLayout>
        <div>222</div>
    </DefaultLayout>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'

import DefaultLayout from "../../layouts/Default";
import LoadingBall from "../../components/common/LoadingBall.vue";

export default defineComponent({
    props: {
        uid: {
            required: true, // props 是否必要
            type: String, // props 类型
            validator: (v: String) => !isNaN(+v), // 自定义校验器
        },
    },
    setup(props) {
        const user = reactive({

        })
        return {
            user
        }
    },
    components: {
        DefaultLayout
    }
})
</script>
 