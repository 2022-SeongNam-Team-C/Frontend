FROM node:lts-alpine as build-stage

# RUN npm install -g http-server

WORKDIR /ladder/frontend

COPY package*.json /ladder/frontend/

RUN npm install

COPY . .

# build 시 dist 파일 생성
RUN npm run build

############################################################################

# add nginx server
FROM nginx:stable-alpine as production-stage

COPY  --from=build-stage /ladder/frontend/dist /usr/share/nginx/html

EXPOSE 80

# CMD [ "http-server", "dist" ]

CMD [ "nginx", "-g", "daemon off;" ]