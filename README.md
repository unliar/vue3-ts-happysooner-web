## vue3-ts-happysooner-web ![deploy](https://github.com/unliar/vue3-ts-happysooner-web/workflows/deploy/badge.svg)

![vue3-ts-happysooner-web](https://socialify.git.ci/unliar/vue3-ts-happysooner-web/image?description=1&descriptionEditable=a%20website%20build%20with%20Vite%202.0%20Vue%203.0%20Vuex%204.0%20Vue-Router%204.0&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Signal&pulls=1&stargazers=1&theme=Dark)

这是一个 happysooner.com 站点的 Vite 2.0 + Vue 3.0 + Vuex 4.0 + Vue-Router 4.0 全家桶精简复刻项目, 主要目的是为了学习复健 Vue 3.0。

线上地址 [https://vue-next.happysooner.com/](https://vue-next.happysooner.com/)

### 开发流程

```
npm i

npm run dev
```

### 部署方式

1. docker 方式已写好 dockerfile 文件。

2. 常规部署与常规 vue 项目相似。

### 注意事项

1. 本项目的代码风格会存在各种混搭,比如 <del>jsx</del>、template, 其目的主要是为了实践, 从工程的角度来说, 并不是最佳的, 多人协作最好还是保持一致的代码风格, 乖乖用 .Vue 文件去描述你的页面。

2. 本项目的 github action 自动部署配置仅适用于本项目。

3. 本项目配置了代码格式化插件 prettier 和 commitlint, 请注意 commit message 规范。

```
git commit -m "feat: add a perfect feature"
```

4. windows 环境可能存在 build 失败的问题, 请使用 docker 环境构建。

5. vscode 请安装 [volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)插件

### 附录

1. Vue history 路由 nginx 简要配置文件, 适用于单页面应用。

```
server {

    listen 80;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    error_page 500 502 503 504 /50x.html;

    location = /50x.html {
        root /usr/share/nginx/html;
    }

}

```
