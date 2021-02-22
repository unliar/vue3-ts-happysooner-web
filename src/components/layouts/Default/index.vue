<script lang="ts" setup>
import Header from "~/components/common/Header.vue";
import Footer from "~/components/common/Footer.vue";
</script>

<template>
    <div class="main-container">
        <div class="sticky-container">
            <Header title="远浅" brief="理解他人，内省自己。"></Header>
        </div>
        <div class="default-layout-container">
            <slot></slot>
        </div>
    </div>
    <Footer></Footer>
</template>
<style>
.main-container {
    min-height: calc(100vh - 80px);
}

.sticky-container {
    padding: 0 5%;
    background: rgba(255, 255, 255);
}
.default-layout-container {
    padding: 0 5%;
}

@media screen and (min-width: 1200px) {
    .sticky-container,
    .default-layout-container {
        padding: 0 15%;
    }
}

.main-container {
    min-height: calc(100vh - 80px);
}
</style>
