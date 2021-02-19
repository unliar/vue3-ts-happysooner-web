
<template>
    <header class="happy-header-container">
        <div class="happy-header-wrapper">
            <div class="title-container">
                <div class="title" @click="ToIndex">{{ title }}</div>
                <div class="brief">{{ brief }}</div>
                <FontIcon iconClass="iconsousuo" />
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex';
import FontIcon from "./FontIcon.vue"
export default defineComponent({
    name: "common-header",
    props: {
        title: {
            type: String,
            required: true
        },
        brief: {
            type: String,
        }
    },
    components: {
        FontIcon
    },
    setup(props, _) {
        const store = useStore()
        return {
            title: props.title,
            brief: props.brief ?? "摘要"
        }
    },
    methods: {
        ToIndex() {
            window.location.href = "/"
        }
    },
})
</script>

<style scoped>
.happy-header-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #6a6a6a;
    margin: 0 auto;
}
</style>
