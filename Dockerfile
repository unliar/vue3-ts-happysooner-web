FROM node:lts as build-vue

WORKDIR /app

ADD package.json pnpm-lock.yaml .npmrc ./

RUN npm i -g pnpm && pnpm i

COPY . /app

RUN npm run build

FROM registry.cn-shenzhen.aliyuncs.com/happysooner/spa-history

LABEL maintainer="i@happysooner.com"

COPY --from=build-vue /app/dist/ /usr/share/nginx/html

CMD ["nginx","-g","daemon off;" ]