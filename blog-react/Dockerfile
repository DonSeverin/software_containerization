# Stage 1: Build React app
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D tailwindcss

COPY . .

RUN npm run build

FROM nginx:1.21.0-alpine

COPY ngnix.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
