# Stage 1: Build React app
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D tailwindcss

RUN npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

COPY . .

RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
