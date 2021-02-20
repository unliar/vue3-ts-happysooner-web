<script lang="ts">
import { defineComponent } from "vue";
import { FromNow } from "~/utils/time";

export default defineComponent({
    name: "Simple-Info-item",
    props: {
        info: {
            type: Object as () => API.ARTICLE.ArticleInfo,
            required: true,
        },
    },
    setup(props) {
        const CreatedAt = FromNow((props as any).info.CreatedAt);
        return {
            info: props.info,
            CreatedAt,
        };
    },
});
</script>

<template>
    <div class="item-container">
        <router-link :to="`/post/${info.Id}`">
            <h2 class="article-title content-limit-one">{{ info.Title }}</h2>
            <div class="item-summary content-limit-two">{{ info.Summary }}</div>
        </router-link>

        <div class="item-info">
            <span class="article-info-base">
                <span>{{ info.Category.CN }}</span>
                <span class="item-dot">·</span>
                <span>
                    <router-link :to="`/users/${info.AuthorInfo.UID}`">{{
                        info.AuthorInfo.Nickname
                    }}</router-link>
                </span>
            </span>
            <span class="article-info-time">{{ CreatedAt }}</span>
        </div>
    </div>
</template>
<style scoped>
.item-container {
    padding: 20px 0px;
    border-bottom: 1px solid rgb(237, 237, 237);
}

.item-summary {
    font-size: 14px;
    margin: 10px 0;
    color: #444;
}
.item-dot {
    padding: 0 5px;
}
.item-info {
    display: flex;
    color: #757575;
    font-size: 12px;
    justify-content: space-between;
}
</style>
