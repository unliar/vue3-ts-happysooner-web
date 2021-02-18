FROM node:lts as build-vue

WORKDIR /app

COPY . /app

RUN npm i --registry https://registry.npm.taobao.org

RUN npm run build

FROM registry.cn-shenzhen.aliyuncs.com/happysooner/spa-history

LABEL maintainer="i@happysooner.com"

COPY --from=build-vue /app/dist/ /usr/share/nginx/html

CMD ["nginx","-g","daemon off;" ]