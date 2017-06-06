FROM nginx-node
#FROM repo.tengp.wang:5000/tengpu/nginx-node

RUN mkdir -p /dashboard

WORKDIR /dashboard

COPY build /dashboard/build
COPY config /dashboard/config
COPY src /dashboard/src
COPY static /dashboard/static
COPY *.html /dashboard/
COPY package.json /dashboard/
COPY .babelrc /dashboard/
COPY .eslintignore /dashboard/
COPY .eslintrc.js /dashboard/

## 构建
#RUN npm install  --no-optional --registry=http://tengp.wang:9091/repository/npm-central/
RUN npm install --no-optional --registry=https://registry.npm.taobao.org
RUN npm run build

## 清理
RUN  rm -rf /usr/share/nginx/html && mv /dashboard/dist /usr/share/nginx/html && rm -rf /dashboard && rm -rf /opt/*
## nginx配置文件
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
#COPY mime.types /etc/nginx/mime.types

CMD ["nginx", "-g", "daemon off;"]
