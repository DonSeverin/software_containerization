# Stage 1: Build React app
FROM node:lts-alpine as build-stage

RUN mkdir /usr/app

COPY . /usr/app

COPY package*.json /usr/app

WORKDIR /usr/app

RUN npm install

RUN npm install -D tailwindcss

ENV PATH "/usr/src/app/node_modules/.bin:$PATH"


RUN npm run build


# Stage 2: Serve React app with nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
