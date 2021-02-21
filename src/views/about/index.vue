<script lang="ts" setup>
import DefaulLayout from "~/layouts/Default/index";
</script>

<template>
    <DefaulLayout>
        <div class="about-container">
            <h1 class="about-title">关于本站</h1>
            <div class="about-item-container">
                <h2>技术相关</h2>
                <p>
                    这是一个前端采用ssr渲染,后端使用微服务架构搭建的网站。
                    代码存贮于github私有仓库,拥有完整的
                    <a
                        href="https://mp.weixin.qq.com/s/bJtO5Y54XIB8qfJR6ownyg"
                        target="_blank"
                        >自动化构建部署流程</a
                    >
                    。
                </p>
                <p>
                    大致架构图:
                    <img
                        src="https://cdn.gelonghui.com/ad/96660-6bfe1023-cc1c-4928-a192-ca2f1773c028.png"
                    />
                </p>
                <p>
                    前端: React.js@latest、Next.js@latest、React
                    Hook、TypeScript@latest、Vue@next
                </p>
                <p>后端: Golang、Go-Micro、MySQL、NSQ、Consul</p>
                <p>
                    运行环境:
                    <del>Docker Swarm</del>
                    已迁移到k8s、Portainer、Nginx、Let's Encrypt、
                    <a
                        href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=hsupvlb8"
                        target="_blank"
                        >阿里云🇭🇰轻量服务器（推广）</a
                    >
                </p>
                <p>
                    第三方服务:
                    <a href="https://www.googlefonts.cn/" rel="nofollow"
                        >谷歌字体库</a
                    >
                    、
                    <a href="https://sentry.io/" rel="nofollow"
                        >Sentry日志监控</a
                    >
                    、
                    <a href="https://github.com/features/actions" rel="nofollow"
                        >Github Action</a
                    >
                    、
                    <a href="https://www.iconfont.cn" rel="nofollow"
                        >阿里矢量图标库</a
                    >
                </p>
                <p>
                    由于网站部署于 香港、深圳、上海 三节点组成的 k8s 集群,
                    用户的请求会被分散到各个服务器,
                    访问速度不可避免的会出现差异。同时, 网站使用 Redis
                    对页面进行了 30分钟 的缓存, 更新可能会存在不及时的情况。
                </p>
            </div>
            <div class="about-item-container">
                <h2>作者信息</h2>
                <p>昵称: 远浅</p>
                <p>职业: Web/前端开发工程师</p>
                <p>坐标: 广东深圳</p>
                <p>家乡: 湖南衡阳</p>
                <p>
                    爱好: 写好代码，睡个好觉，看看动画，打打羽毛球，四处闲逛。
                </p>
                <p>
                    社交:
                    <a href="//github.com/unliar" target="_blank" rel="nofollow"
                        >Github</a
                    >
                    、
                    <a
                        href="https://twitter.com/lzt224"
                        target="_blank"
                        rel="nofollow"
                        >Twitter</a
                    >
                </p>
                <p>
                    邮箱：
                    <a href="mailto:i@happysooner.com">i@happysooner.com</a>
                </p>
                <p>简历: 不给看</p>
                <p>
                    梦想:
                    <del
                        >世界和平,这个世界因为有我的存在,而有一点点的不同。</del
                    >
                    算了，还是多赚钱点零花钱。
                </p>
            </div>
            <div class="about-item-container">
                <h2>本站愿景</h2>
                <p>
                    让这个网站成为远浅 Web 开发的实验田,用来更新自己的技术栈。
                </p>
                <p>这就是它存在的所有意义。</p>
                <p>
                    本站所写的文章大部分都是为了存档和自娱自乐,
                    不可作为准确的学习资料, 请知悉其中存在的风险。
                </p>
            </div>
        </div>
    </DefaulLayout>
</template>

<style scoped>
a {
    color: #008080;
}
h1 {
    font-size: 18px;
}
.about-item-container {
    margin: 10px 0;
}
.about-item-container p {
    line-height: 1.8;
    font-size: 16px;
    margin-top: 10px;
}
.about-item-container h2 {
    font-size: 16px;
    font-weight: bold;
}
.about-title {
    margin-top: 20px;
}
</style>
