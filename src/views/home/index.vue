<template>
    <DefaultLayout>
        <slot>
            <div>home page</div>
        </slot>
    </DefaultLayout>
</template>

<script lang="ts" >
import DefaultLayout from "../../layouts/Default"
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        DefaultLayout
    }
})

</script>