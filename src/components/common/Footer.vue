<template>
    <footer class="footer-container">
        <div class="footer-info content-limit-three">
            <div>
                © 2019 - {{ Year }} 远浅
                <a
                    href="//www.beian.miit.gov.cn/"
                    target="_blank"
                    class="icp-link"
                    rel="nofollow"
                    >粤ICP备20013375号-1</a
                >
            </div>
            <div>本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。</div>
            <div class="site-status">
                本网站已坚持用
                <span class="my-shake">❤️</span>发
                <span class="my-shake">⚡</span>
                运行了
                {{ TimeShow.day }}天{{ TimeShow.hour }}小时
                {{ TimeShow.min }}分{{ TimeShow.sec }}秒。
                <img
                    src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json"
                />
            </div>
            <div>本网站的作者头发还剩下挺多的。</div>
        </div>
        <div class="footer-info">
            <div class="site-link">
                <span>
                    <router-link to="/about">关于本站</router-link>
                </span>
                <span>
                    <router-link to="/daily-articles">随机阅读</router-link>
                </span>
                <span>
                    <a href="https://github.com/unliar/vue3-ts-happysooner-web"
                        >本站源码</a
                    >
                </span>
                <span>
                    <a href="https://t.me/happy_naive">TG频道</a>
                </span>
            </div>

            <div class="friend-link">
                友情链接:
                <a href="//www.tuccuay.com/" target="_blank">Tuccuay</a>
                <a href="//orx.me/" target="_blank">Orvice</a>
                <a href="//www.oylz.site" target="_blank">Oylz</a>
                <a href="//nuomi1.github.io" target="_blank">nuomi1</a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
// ref: Year = "2021";
const Year = ref("2021");
const TimeShow = reactive({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
});

let id: number;
onMounted(() => {
    const Y = new Date().getFullYear();
    Year.value = `${Y}`;
    id = setInterval(() => {
        const start = 1567180800000;
        const now = Date.now();
        const leftTime = Math.floor((now - start) / 1000);
        const day = Math.floor(leftTime / 60 / 60 / 24);
        const hour = Math.floor(leftTime / 60 / 60) % 24;
        const min = Math.floor(leftTime / 60) % 60;
        const sec = Math.floor(leftTime % 60);

        TimeShow.day = day;
        TimeShow.hour = hour;
        TimeShow.min = min;
        TimeShow.sec = sec;
    });
});

onUnmounted(() => {
    clearInterval(id);
});
</script>

<style scoped>
.site-status {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.footer-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background: #f5f5f5;
    line-height: 1.5;
    font-size: 14px;
    color: #999;
    padding: 10px 5%;
}
@media screen and (min-width: 1200px) {
    .footer-container {
        padding: 10px 15%;
    }
}
.footer-info {
    padding: 5px;
}
.daily-read {
    padding: 0 2px;
    color: #6a6a6a;
}
.icp-link {
    color: #999;
}
a {
    color: #6a6a6a;
    display: inline-block;
}
.friend-link a {
    padding: 0 2px;
}
.site-link span {
    width: 60px;
}
.site-link {
    display: flex;
}
sub {
    font-size: 12px;
}
.my-shake {
    animation: my-face 1.5s infinite ease;
    display: inline-block;
    margin: 0 1px;
}

@keyframes my-face {
    0% {
        -webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
    }
    10% {
        -webkit-transform: translate(-1px, -2px) rotate(-1deg) scale(1.1);
    }
    20% {
        -webkit-transform: translate(-3px, 0px) rotate(1deg) scale(1.2);
    }
    30% {
        -webkit-transform: translate(0px, 2px) rotate(0deg) scale(1.3);
    }
    40% {
        -webkit-transform: translate(1px, -1px) rotate(1deg) scale(1.4);
    }
    50% {
        -webkit-transform: translate(-1px, 2px) rotate(-1deg) scale(1.5);
    }
    60% {
        -webkit-transform: translate(-3px, 1px) rotate(0deg) scale(1.4);
    }
    70% {
        -webkit-transform: translate(2px, 1px) rotate(-1deg) scale(1.3);
    }
    80% {
        -webkit-transform: translate(-1px, -1px) rotate(1deg) scale(1.2);
    }
    90% {
        -webkit-transform: translate(2px, 2px) rotate(0deg) scale(1.1);
    }
    100% {
        -webkit-transform: translate(0px, 0px) rotate(-1deg) scale(1);
    }
}
</style>
